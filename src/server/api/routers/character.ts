import { eq } from 'drizzle-orm';
import { database } from '~/server/database';
import { characters } from '~/server/database/characters';
import type { CharacterApiResponse } from '~/server/types/characters';
import { authedProcedure, router } from '../trpc';

export const characterRouter = router({
  getAllCharacters: authedProcedure.query(async ({ ctx }): Promise<CharacterApiResponse> => {
    const { session } = ctx;
    const result = await database
      .select({ class: characters.class, name: characters.name, role: characters.role })
      .from(characters)
      .where(eq(characters.createdById, session.user.id));

    return {
      characters: result,
    };
  }),
});
