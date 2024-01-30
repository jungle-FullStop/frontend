import { createContext, useState, ReactNode } from 'react';

interface ModalData {
  children?: ReactNode;
}

export const ModalContext = createContext<{
  isOpen: boolean;
  openModal: (modalData: ModalData) => unknown;
  closeModal: () => unknown;
  modalData: ModalData;
}>({} as any);

const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData>({});

  const openModal = ({ children }: ModalData) => {
    setIsOpen(true);
    setModalData({ children });
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalData({});
  };
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
