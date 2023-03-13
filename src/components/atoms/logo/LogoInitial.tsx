import React, { memo } from 'react';

function InitialLogo() {
  return (
    <svg
      id='미투_ᄐ_스트_파비콘'
      data-name='미투 테스트 파비콘'
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      width='30'
      height='30'
      viewBox='0 0 30 30'
    >
      <defs>
        <pattern
          id='pattern'
          preserveAspectRatio='xMidYMid slice'
          width='100%'
          height='100%'
          viewBox='0 0 160 160'
        >
          <image
            width='160'
            height='160'
            xlinkHref='data:image/png;base64,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'
          />
        </pattern>
      </defs>
      <rect
        id='미투_ᄐ_스트_파비콘-2'
        data-name='미투 테스트 파비콘'
        width='30'
        height='30'
        rx='5'
        fill='url(#pattern)'
      />
    </svg>
  );
}

export default memo(InitialLogo);
