import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    isOpen: { control: 'boolean' },
    closeOnOverlayClick: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    showCloseButton: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Modal Title',
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>This is the modal content. You can put any content here including forms, text, images, or other components.</p>
        <p>The modal will automatically handle scrolling if the content is too long.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" onClick={args.onClose}>Cancel</Button>
        <Button variant="primary">Confirm</Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const Small: Story = {
  args: {
    isOpen: true,
    title: 'Small Modal',
    size: 'small',
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>This is a small modal for quick confirmations or simple messages.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" onClick={args.onClose}>Cancel</Button>
        <Button variant="primary">OK</Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const Large: Story = {
  args: {
    isOpen: true,
    title: 'Large Modal',
    size: 'large',
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>This is a large modal suitable for complex forms or detailed content.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" onClick={args.onClose}>Cancel</Button>
        <Button variant="primary">Save Changes</Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const WithoutCloseButton: Story = {
  args: {
    isOpen: true,
    title: 'No Close Button',
    showCloseButton: false,
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>This modal has no close button in the header. Users must use the footer buttons to close it.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={args.onClose}>Got it</Button>
      </Modal.Footer>
    </Modal>
  ),
};

export const NoTitle: Story = {
  args: {
    isOpen: true,
    title: undefined,
    onClose: () => console.log('Modal closed'),
  },
  render: (args) => (
    <Modal {...args}>
      <Modal.Body>
        <p>This modal has no title header, just content and footer.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" onClick={args.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  ),
};
