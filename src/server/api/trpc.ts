import { initTRPC } from '@trpc/server';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import type { Session } from 'next-auth';
import superjson from 'superjson';
import { ZodError } from 'zod';
import { getServerAuthSession } from '../auth';
import { database } from '../database';

interface CreateContextOptions {
  session: Session | null;
}

const createInnerTRPCContext = (options: CreateContextOptions) => {
  return {
    session: options.session,
    database,
  };
};

export const createTRPCContext = async (options: CreateNextContextOptions) => {
  const { req, res } = options;

  // Get the session from the server using the getServerSession wrapper function
  const session = await getServerAuthSession({ req, res });

  return createInnerTRPCContext({ session });
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : undefined,
      },
    };
  },
});

export const createTRPCRouter = t.router;

export const publicProcedure = t.procedure;
