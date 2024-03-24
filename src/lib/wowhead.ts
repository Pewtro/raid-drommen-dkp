type WowheadIconSizes = 'small' | 'medium' | 'large';

export const getWowheadIconUrl = (icon: string, size: WowheadIconSizes = 'medium') =>
  `https://wow.zamimg.com/images/wow/icons/${size}/${icon}.jpg` as const;

export const getBlizzardIconUrl = (icon: string) => `https://render-us.worldofwarcraft.com/icons/56/${icon}.jpg`;
