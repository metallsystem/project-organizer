import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalPortal = ({ children }) => {
  const modalContainer = document.createElement('article');
  modalContainer.className = 'modal';
  modalContainer.setAttribute('role', 'dialog');

  const [ container ] = useState(modalContainer);

  useEffect(() => {
    document.body.appendChild(container);

    return () => {
      document.body.removeChild(container);
    };
  }, [])
  return createPortal(children, container);
}

export default ModalPortal
