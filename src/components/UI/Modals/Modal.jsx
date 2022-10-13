import React from 'react';
import ModalPortal from './ModalPortal';

const Modal = (opened, onClose) => {
  return (
    <ModalPortal>
      <div>Modal</div>
    </ModalPortal>
  );
};

export default Modal;
