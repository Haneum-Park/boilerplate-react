import React, { useContext } from 'react';

import { AppContext } from '@src/contexts';

function ContextCountButton() {
  const { addCount } = useContext(AppContext);

  // NOTE 그 다음 가져온 toggleChecked를 함수 넣듯이 넣어줘용
  return <button onClick={addCount}>+ 1</button>;
}

export default ContextCountButton;
