import { MouseEvent } from 'react';
import { createPortal } from 'react-dom';

import useModal from '@hooks/useModal';
import Icon from '@components/Common/Icon.tsx';

const Modal = () => {
  const { isOpen, modalData, closeModal } = useModal();

  const { children } = modalData;

  if (!isOpen) {
    return <></>;
  }

  const onClickModalBack = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <>
      <div
        className="fixed left-0 top-0 z-40 flex h-full w-full items-center justify-center bg-white bg-opacity-70"
        onClick={() => onClickModalBack}
      >
        <div className="border-default relative h-auto max-h-[75%] w-1/3 min-w-[90%] overflow-hidden rounded-2xl border bg-white p-4 pb-5 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] sm:min-w-min">
          {children}
          <button onClick={closeModal}>
            <Icon id="closed" styles="absolute right-4 top-3 h-6 w-6" />
          </button>
        </div>
      </div>
    </>,
    document.getElementById('modal') as HTMLElement,
  );
};

export default Modal;
