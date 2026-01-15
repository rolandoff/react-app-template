import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ModalHeader } from './ModalHeader';

describe('ModalHeader', () => {
  it('renders the title', () => {
    render(<ModalHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders close button when showCloseButton is true and onClose provided', () => {
    const onClose = jest.fn();
    render(<ModalHeader title="Test" onClose={onClose} showCloseButton />);
    expect(screen.getByRole('button', { name: /close modal/i })).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = jest.fn();
    render(<ModalHeader title="Test" onClose={onClose} />);
    
    await user.click(screen.getByRole('button', { name: /close modal/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it('hides close button when showCloseButton is false', () => {
    render(<ModalHeader title="Test" onClose={jest.fn()} showCloseButton={false} />);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('renders children', () => {
    render(<ModalHeader><span>Custom Content</span></ModalHeader>);
    expect(screen.getByText('Custom Content')).toBeInTheDocument();
  });
});
