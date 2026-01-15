/**
 * Base transition tokens
 */
export const duration = {
  fast: '150ms',
  base: '200ms',
  slow: '300ms',
  slower: '500ms',
} as const;

export const easing = {
  ease: 'ease',
  easeIn: 'ease-in',
  easeOut: 'ease-out',
  easeInOut: 'ease-in-out',
} as const;

export const transitions = {
  fast: `${duration.fast} ${easing.ease}`,
  base: `${duration.base} ${easing.ease}`,
  slow: `${duration.slow} ${easing.ease}`,
} as const;

export type Duration = typeof duration;
export type Easing = typeof easing;
export type Transitions = typeof transitions;
