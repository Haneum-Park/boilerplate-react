// NOTE 리액트의 state는 props를 통해 부모컴포넌트에서 자식컴포넌트로 전달되영
// NOTE 근데 자식컴포넌트의 자식 - 자식 - 자식 이렇게 깊이가 깊어지면 거쳐가는 컴포넌트가 많아져 퍼포먼스나 코드 생산적으로나 굉장이 좋지 않아여
// NOTE 그럴때 Context를 쓰는 것이죠.
// NOTE Context를 쓰면 state를 전역적으로 공유하기 때문에 props로 복잡하게 연결하지 않아도 데이터가 필요한 컴포넌트에서 Context로 가져와 사용이 가능합니당.
// NOTE 그 중 리액트 Hook API에서도 useContext로 좀 더 Context를 사용하기 편하게 만들 수 있어영
// NOTE 여기서는 파일을 따로 분리하고 Context 관련 예제를 만들었는데 이렇게하면 언제든 Context를 초기화하고 Provider로 엮인 컴포넌트에서는 언제든 불러올 수 있겠져?

// NOTE Context를 초기화할 때는 createContext로 객체를 생성해줍니당.
// NOTE 내부에 값을 집어 넣어도 되지만 우선은 빈 객체를 만들어봅시당.
// NOTE Typescript 때는 넣는게 좋겠져?

// * 1. createContext 객체 생성해줍니당
import { createContext } from 'react';

export const AppContext = createContext();
