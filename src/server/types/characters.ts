import type { CLASSES } from '~/server/constants/classes';
import type { ROLES } from '~/server/constants/roles';

export interface CharacterApiResponse {
  characters: Array<Character>;
}

export interface Character {
  name: string;
  class: keyof typeof CLASSES;
  role: keyof typeof ROLES;
}
