import type { ButtonProps } from './types';

export const defaultButtonProps: ButtonProps = {
  children: 'Button',
  variant: 'primary',
  size: 'medium',
};

export const buttonVariantFixtures: Record<string, Partial<ButtonProps>> = {
  primary: { variant: 'primary', children: 'Primary' },
  secondary: { variant: 'secondary', children: 'Secondary' },
  outline: { variant: 'outline', children: 'Outline' },
  ghost: { variant: 'ghost', children: 'Ghost' },
};

export const buttonSizeFixtures: Record<string, Partial<ButtonProps>> = {
  small: { size: 'small', children: 'Small' },
  medium: { size: 'medium', children: 'Medium' },
  large: { size: 'large', children: 'Large' },
};
