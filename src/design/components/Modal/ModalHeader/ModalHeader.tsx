import type { ModalHeaderProps } from '../types';
import './ModalHeader.scss';

export const ModalHeader = ({
  title,
  onClose,
  showCloseButton = true,
  children,
}: ModalHeaderProps) => {
  return (
    <div className="modal-header">
      {title && <h2 className="modal-header__title">{title}</h2>}
      {children}
      {showCloseButton && onClose && (
        <button
          className="modal-header__close"
          onClick={onClose}
          aria-label="Close modal"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
};
