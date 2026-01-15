import { render, screen } from '@testing-library/react';
import { ModalFooter } from './ModalFooter';

describe('ModalFooter', () => {
  it('renders children', () => {
    render(<ModalFooter><button>Submit</button></ModalFooter>);
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });

  it('has the correct class', () => {
    const { container } = render(<ModalFooter><button>OK</button></ModalFooter>);
    expect(container.firstChild).toHaveClass('modal-footer');
  });
});
