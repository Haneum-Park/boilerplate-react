import React, { memo } from 'react';

// * 11. 이제 여기서 Provider 컴포넌트를 호출하여 아까 만든 state보여줄 컴포넌트와 함수를 작동시킬 컴포넌트를 감싸주면 끝입니다.
// ! count도 있으니까 함 보세요!
import ContextBooleanProvider from '@comp/context/boolean/ContextBooleanProvider';
import ContextBooleanLabel from '@comp/context/boolean/ContextBooleanLabel';
import ContextBooleanButton from '@comp/context/boolean/ContextBooleanButton';
import ContextCountProvider from '@comp/context/count/ContextCountProvider';
import ContextCountLabel from '@comp/context/count/ContextCountLabel';
import ContextCountButton from '@comp/context/count/ContextCountButton';
import TemplateMain from './templates/TemplateMain';

const Main = () => {
  return (
    <>
      <ContextBooleanProvider>
        <ContextBooleanLabel />
        <ContextBooleanButton />
      </ContextBooleanProvider>
      <ContextCountProvider>
        <ContextCountLabel />
        <ContextCountButton />
      </ContextCountProvider>
      <TemplateMain />
    </>
  );
};

export default memo(Main);
