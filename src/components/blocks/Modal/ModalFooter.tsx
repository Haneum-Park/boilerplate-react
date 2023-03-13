import React, { memo } from 'react';
import { useSnapshot } from 'valtio';

import { LoadingSpinner } from '@block/LoadingBtn';

import { proxyBtnLoad } from '@store/btnLoading';

import { ModalFooterWrap, ModalFooterBtn } from './styles';

type ModalFooterProps = {
  confirmText?: string;
  onConfirm: () => void;
  showCancel?: boolean;
  cancelText?: string;
  onCancel?: () => void;
  showDeny?: boolean;
  denyText?: string;
  onDeny?: () => void;
};

function ModalFooter({
  confirmText = '확인',
  onConfirm,
  showCancel = false,
  cancelText = '취소',
  onCancel = () => {},
  showDeny = false,
  denyText = '거부',
  onDeny = () => {},
}: ModalFooterProps) {
  const { isLoading } = useSnapshot(proxyBtnLoad);

  return (
    <ModalFooterWrap>
      <ModalFooterBtn onClick={onConfirm} disabled={isLoading}>
        {isLoading ? <LoadingSpinner size={12} /> : confirmText}
      </ModalFooterBtn>
      {showCancel && (
        <ModalFooterBtn bgColor={'--color-red'} onClick={onDeny}>
          {denyText}
        </ModalFooterBtn>
      )}
      {showDeny && (
        <ModalFooterBtn bgColor={'--color-grey-20'} onClick={onCancel}>
          {cancelText}
        </ModalFooterBtn>
      )}
    </ModalFooterWrap>
  );
}

export default memo(ModalFooter);
