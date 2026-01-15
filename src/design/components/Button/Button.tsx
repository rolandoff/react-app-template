import type { ButtonProps } from './types';
import {
  DEFAULT_BUTTON_SIZE,
  DEFAULT_BUTTON_VARIANT,
  BUTTON_SIZE_CLASSES,
  BUTTON_VARIANT_CLASSES,
} from './constants';
import './Button.scss';

export const Button = ({
  children,
  variant = DEFAULT_BUTTON_VARIANT,
  size = DEFAULT_BUTTON_SIZE,
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  disabled,
  className = '',
  ...props
}: ButtonProps) => {
  const classes = [
    'button',
    BUTTON_VARIANT_CLASSES[variant],
    BUTTON_SIZE_CLASSES[size],
    fullWidth && 'button--full-width',
    isLoading && 'button--loading',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classes}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className="button__spinner" aria-hidden="true" />}
      {!isLoading && leftIcon && <span className="button__icon button__icon--left">{leftIcon}</span>}
      <span className="button__content">{children}</span>
      {!isLoading && rightIcon && <span className="button__icon button__icon--right">{rightIcon}</span>}
    </button>
  );
};
