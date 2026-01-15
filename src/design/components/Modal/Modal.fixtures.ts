import type { ModalProps } from './types';

export const defaultModalProps: Omit<ModalProps, 'children'> = {
  isOpen: true,
  onClose: () => {},
  size: 'medium',
  title: 'Modal Title',
  closeOnOverlayClick: true,
  closeOnEscape: true,
  showCloseButton: true,
};

export const modalContentFixtures = {
  simple: 'This is a simple modal content.',
  longText: `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  `.trim(),
  withForm: {
    title: 'Contact Form',
    fields: ['Name', 'Email', 'Message'],
  },
};

export const modalSizeFixtures = {
  small: { size: 'small' as const, title: 'Small Modal' },
  medium: { size: 'medium' as const, title: 'Medium Modal' },
  large: { size: 'large' as const, title: 'Large Modal' },
};
