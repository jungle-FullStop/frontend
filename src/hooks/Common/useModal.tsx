import { useContext } from 'react';

import { ModalContext } from '@util/ModalProvider.tsx';

const useModal = () => useContext(ModalContext);

export default useModal;
