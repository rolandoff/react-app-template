import { render, screen } from '@testing-library/react';
import { ModalBody } from './ModalBody';

describe('ModalBody', () => {
  it('renders children', () => {
    render(<ModalBody><p>Body content</p></ModalBody>);
    expect(screen.getByText('Body content')).toBeInTheDocument();
  });

  it('has the correct class', () => {
    const { container } = render(<ModalBody><p>Content</p></ModalBody>);
    expect(container.firstChild).toHaveClass('modal-body');
  });
});
