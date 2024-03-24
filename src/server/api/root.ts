import { characterRouter } from './routers/character';
import { exampleRouter } from './routers/example';
import { router } from './trpc';

export const appRouter = router({
  example: exampleRouter,
  character: characterRouter,
});

export type AppRouter = typeof appRouter;
