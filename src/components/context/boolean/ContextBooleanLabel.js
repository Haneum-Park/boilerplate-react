// * 9. 이제 state를 업데이트 할 함수도 붙였으니 state를 불러와 보여주면 되겠죠? 똑같이 useContext를 사용하면 너무 좋아영.
import React, { useContext } from 'react';

import { AppContext } from '@src/contexts';

function ContextBooleanLabel() {
  // * 10. 여기도 똑같습니다.
  const { isChecked } = useContext(AppContext);
  return <div style={{ color: '#fff' }}>{isChecked ? 'checked' : 'unchecked'}</div>;
}

export default ContextBooleanLabel;
