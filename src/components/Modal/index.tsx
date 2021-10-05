import ReactModal from 'react-modal';

ReactModal.setAppElement('#root');

const modalCustomStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleCloseModal: () => void;
}

export function Modal({ children, isOpen, handleCloseModal }: ModalProps) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      style={modalCustomStyles}
    >
      {children}
    </ReactModal>
  );
}
