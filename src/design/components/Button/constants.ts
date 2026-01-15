import type { ButtonSize, ButtonVariant } from './types';

export const DEFAULT_BUTTON_VARIANT: ButtonVariant = 'primary';
export const DEFAULT_BUTTON_SIZE: ButtonSize = 'medium';

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  small: 'button--small',
  medium: 'button--medium',
  large: 'button--large',
};

export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'button--primary',
  secondary: 'button--secondary',
  outline: 'button--outline',
  ghost: 'button--ghost',
};
