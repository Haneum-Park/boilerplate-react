// * 7. 이제 Context에서 value로 넣어준 함수를 작동하게 합니다. 본래라면 Consumer를 써야하지만 useContext는 그것을 대신해줍니다. 편하죠?
import React, { useContext } from 'react';

import { AppContext } from '@src/contexts';

function ContextBooleanButton() {
  // * 8. useContext를 사용하여 import 시킨 AppContext를 가져옵니다.
  // ? 이 때, 왜 ContextBooleanProvider를 가져오지않고 AppContext를 가져오냐?
  // ? 그건 ContextBooleanProvider에서도 AppContext를 가져오고 있으니까요!
  // ? ContextBooleanProvider에서 AppContext로 Provider를 생성해주고, value값을 넣어줬기때문에 AppContext를 가져옵니다.
  const { toggleChecked } = useContext(AppContext);

  // NOTE 그 다음 가져온 toggleChecked를 함수 넣듯이 넣어줘용
  return <button onClick={toggleChecked}>버튼</button>;
}

export default ContextBooleanButton;
