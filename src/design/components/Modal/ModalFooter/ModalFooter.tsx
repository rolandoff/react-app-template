import type { ModalFooterProps } from '../types';
import './ModalFooter.scss';

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className="modal-footer">{children}</div>;
};
