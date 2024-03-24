import { ROLES } from './roles';

export const CLASSES = {
  Druid: 'Druid',
  Hunter: 'Hunter',
  Mage: 'Mage',
  Paladin: 'Paladin',
  Priest: 'Priest',
  Rogue: 'Rogue',
  Shaman: 'Shaman',
  Warlock: 'Warlock',
  Warrior: 'Warrior',
} as const;

interface ClassInformation {
  icon: `classicon_${Lowercase<keyof typeof CLASSES>}`;
  color: string;
  roles: Array<keyof typeof ROLES>;
}

export const CLASS_INFO: Record<keyof typeof CLASSES, ClassInformation> = {
  Druid: {
    icon: 'classicon_druid',
    color: '#FF7D0A',
    roles: [ROLES.Tank, ROLES.Healer, ROLES.Damage],
  },
  Hunter: {
    icon: 'classicon_hunter',
    color: '#ABD473',
    roles: [ROLES.Damage],
  },
  Mage: {
    icon: 'classicon_mage',
    color: '#69CCF0',
    roles: [ROLES.Damage, ROLES.Healer],
  },
  Paladin: {
    icon: 'classicon_paladin',
    color: '#F58CBA',
    roles: [ROLES.Tank, ROLES.Healer, ROLES.Damage],
  },
  Priest: {
    icon: 'classicon_priest',
    color: '#FFFFFF',
    roles: [ROLES.Healer, ROLES.Damage],
  },
  Rogue: {
    icon: 'classicon_rogue',
    color: '#FFF569',
    roles: [ROLES.Damage, ROLES.Tank],
  },
  Shaman: {
    icon: 'classicon_shaman',
    color: '#0070DE',
    roles: [ROLES.Healer, ROLES.Damage, ROLES.Tank],
  },
  Warlock: {
    icon: 'classicon_warlock',
    color: '#9482C9',
    roles: [ROLES.Damage, ROLES.Tank],
  },
  Warrior: {
    icon: 'classicon_warrior',
    color: '#C79C6E',
    roles: [ROLES.Tank, ROLES.Damage],
  },
};
