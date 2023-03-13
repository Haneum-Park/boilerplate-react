/* eslint-disable no-useless-return */
import Swal from 'sweetalert2';

export function serverError(
  title: string | HTMLElement,
  html: HTMLElement | string,
  confirmButtonText = '확인',
) {
  return Swal.fire({
    icon: 'error',
    title: title || '서버 에러',
    html,
    confirmButtonText,
    background: 'var(--color-black)',
  });
}

export function expToken(timerInterval: string | number | NodeJS.Timer | undefined) {
  return Swal.fire({
    icon: 'error',
    title: '로그인',
    html: '로그인 시간이 만료됐습니다.<br />로그인 페이지로 이동합니다.<br />남은시간 : <b class="timer">10초</b>',
    timer: 10 * 1000,
    timerProgressBar: true,
    confirmButtonText: '이동',
    confirmButtonColor: '#244895',
    background: 'var(--color-black)',
    didOpen: () => {
      const b = Swal.getHtmlContainer()?.querySelector('.timer') as Element;
      timerInterval = setInterval(() => {
        b.textContent = `${(Number(Swal.getTimerLeft()) / 1000).toFixed(0)}초` as unknown as string;
      }, 1000);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}

export function refreshLogin(timerInterval: string | number | NodeJS.Timer | undefined) {
  return Swal.fire({
    icon: 'warning',
    title: '로그인',
    html: '로그인 시간이 만료됐습니다.<br />연장하시겠습니까?<br />남은시간 : <b class="timer">180초</b>',
    timer: 3 * 60 * 1000,
    timerProgressBar: true,
    confirmButtonText: '예',
    confirmButtonColor: '#244895',
    cancelButtonText: '아니오',
    showCancelButton: true,
    background: 'var(--color-black)',
    didOpen: () => {
      const b = Swal.getHtmlContainer()?.querySelector('.timer') as Element;
      timerInterval = setInterval(() => {
        b.textContent = `${(Number(Swal.getTimerLeft()) / 1000).toFixed(0)}초` as unknown as string;
      }, 1000);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  });
}
