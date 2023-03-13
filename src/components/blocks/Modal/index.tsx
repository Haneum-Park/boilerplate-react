import React from 'react';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

interface ModalProps extends SweetAlertOptions {
  onReset?: () => void;
  children: React.ReactNode;
  showConfirmButton?: boolean;
}

const ModalSwal = withReactContent(Swal);

function Modal({ children, onReset, showConfirmButton = false, ...rest }: ModalProps) {
  const onShowSwal = () => {
    ModalSwal.fire({
      ...rest,
      showConfirmButton,
      background: 'var(--color-black)',
      html: <>{children}</>,
    }).then((result) => {
      if (result.isDismissed) {
        if (onReset) onReset();
      }
    });
  };

  return { onShowSwal };
}

export default Modal;
