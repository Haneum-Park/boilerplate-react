import React, { useState, useCallback } from 'react';

// * 2. 생성된 Context를 호출합니당.
import { AppContext } from '@src/contexts';

const ContextBooleanProvider = ({ children }) => {
  // * 3. Context에서 사용할 state를 생성하고,
  const [isChecked, setIsChecked] = useState(false);

  // ? 왜 useCallback을 쓰는 걸까?
  // ? 함수는 컴포넌트가 리렌더링 될 때마다 새롭게 생성됩니다. 뭐 딱히..새롭게 생성된다 해서 그닥 문제는 없겠지만,
  // ? 필요한 함수만을 재사용 하는 건 프로그램 최적화시에 중요한문제에여.
  // ? 때문에 함수를 다시 생성해서 쓰지 않고, 그 함수를 재사용 할겁니다.
  // ? 리액트의 useCallback은 그걸 가능하게 하는데,
  // ? useCallback을 쓰게되면 그 함수는 렌더링 시 메모이제이션이 되요. 그리고 그 메모이제이션 된 함수는 필요할 때 재사용되구여,
  // ? 그렇게 하면 컴포넌트가 업데이트될 때 불필요한 것들은 리렌더링이 방지되겠죠.
  // * 4. 생성된 state를 업데이트하는 함수를 만들어줍니다.
  const toggleChecked = useCallback(() => {
    setIsChecked((prev) => !prev);
  }, [isChecked]);

  return (
    // * 5. 생성된 state와 함수는 Provider의 value에 전달합니다.
    <AppContext.Provider
      // NOTE 이런식으로 중괄호로 두번 감싸주고영
      value={{
        isChecked,
        toggleChecked,
      }}
    >
      {/* // * 6. 그리고 children을 props에서 가져와 Provider안에 넣어줍니다. */}
      {/* // ! 이게 중요합니다. 이렇게 Provider로 감싸진 컴포넌트들은 value내 state를 가져와 사용할 수 있어영. 반대로 Provider에 감싸져 있지 않다면 못 쓰겠져? */}
      {children}
    </AppContext.Provider>
  );
};

export default ContextBooleanProvider;
