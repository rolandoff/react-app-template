import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import { defaultModalProps } from './Modal.fixtures';

describe('Modal', () => {
  it('renders when isOpen is true', () => {
    render(
      <Modal {...defaultModalProps}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('does not render when isOpen is false', () => {
    render(
      <Modal {...defaultModalProps} isOpen={false}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('renders title in header', () => {
    render(
      <Modal {...defaultModalProps} title="Test Title">
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal {...defaultModalProps} onClose={onClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    await user.click(screen.getByRole('button', { name: /close modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal {...defaultModalProps} onClose={onClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('does not call onClose on Escape when closeOnEscape is false', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(
      <Modal {...defaultModalProps} onClose={onClose} closeOnEscape={false}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(onClose).not.toHaveBeenCalled();
  });

  it('renders compound components correctly', () => {
    render(
      <Modal {...defaultModalProps} title={undefined}>
        <Modal.Header title="Custom Header" />
        <Modal.Body>Body Content</Modal.Body>
        <Modal.Footer><button>Submit</button></Modal.Footer>
      </Modal>
    );

    expect(screen.getByText('Custom Header')).toBeInTheDocument();
    expect(screen.getByText('Body Content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
  });
});
