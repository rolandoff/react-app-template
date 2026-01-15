import type { ModalSize } from './types';

export const MODAL_SIZES: Record<ModalSize, string> = {
  small: '400px',
  medium: '600px',
  large: '800px',
};

export const MODAL_ANIMATION_DURATION = 200;

export const MODAL_Z_INDEX = 1000;

export const MODAL_OVERLAY_OPACITY = 0.5;

export const DEFAULT_MODAL_SIZE: ModalSize = 'medium';
