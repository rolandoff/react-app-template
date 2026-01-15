export const radius = {
  sm: '4px',
  md: '6px',
  lg: '8px',
  full: '9999px',
} as const;

export type RadiusToken = typeof radius;
