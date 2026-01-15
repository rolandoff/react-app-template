import type { ModalBodyProps } from '../types';
import './ModalBody.scss';

export const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className="modal-body">{children}</div>;
};
