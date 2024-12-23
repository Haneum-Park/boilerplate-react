<div style="text-align: center">
  <p style="font-size: 38px; font-weight: bold">BOILERPLATE REACT</p>
  <img src="https://img.shields.io/badge/node.js-v18.12.1-339933?logo=Node.js" />
  <img src="https://img.shields.io/badge/yarn-v1.22.18-2C8EBB?logo=Yarn" />
</div>


## Component Design Pattern

- `VAC (View - Assets - Component)`
- `Atomic (Atom - Molecule - Organism - Template - Page)`
  - 기존 `Atomic` 디자인 패턴에서 `Molecule`, `Organism`, `Template`을 제거하고 `Block` 단위를 추가해 적용
  - `Proxy` 상태관리를 사용하여 `props drilling`을 방지

```text plain
요약하여 설명하면 Input, Image 등 가장 작은 단위부터 Page까지 올라가고
Page에서 쓰에는 대부분의 state들은 Valtio로 가져간다.

이 때, 사용되는 state들은 Presentational Components에서 불러와 Object화 시킨 후
Container Components에 주입하는 방식으로 구현하였다.

이렇게 되면 Atomic 방식을 유지하면서 props drilling을 방지할 수 있고
Presentational and Container 방식을 구현해 prop가 비대해지는걸 방지 할 수 있다.

즉 하나의 컴포넌트는 폴더 안에 index.tsx, style.ts, script.ts를 가진다.
단, 코드량이 적은 컴포넌트는 분리하지 않는다.
```

## Mainly Usage Library

<div style="display: flex; justify-contnet: center; align-items: flex-start; flex-direction: column; gap: 5px">
  <div style="display: flex; align-items: center">
    <code>Language</code>
    &nbsp;:&nbsp;
    <img src="https://img.shields.io/badge/typescript-v4.7.4-3178C6?logo=Typescript" />
  </div>
  <div style="display: flex; align-items: center">
    <code>Framework</code>
    &nbsp;:&nbsp;
    <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB?logo=React" />
  </div>
  <div style="display: flex; align-items: center">
    <code>State Manage</code>
    &nbsp;:&nbsp;
    <img src="https://img.shields.io/badge/valtio-v1.6.4-171717?logo=V&logoColor=171717"/>
  </div>
  <div style="display: flex; align-items: center">
    <code>Bundler</code>
    &nbsp;:&nbsp;
    <img src="https://img.shields.io/badge/vite-v4.1.4-646CFF?logo=Vite" />
  </div>
  <div style="display: flex; align-items: center">
    <code>Compiler</code>
    &nbsp;:&nbsp;
    <a style="display: flex; align-items: center" href="https://www.npmjs.com/package/@swc/core"><img src="https://img.shields.io/badge/swc-v1.3.40-F9DC3E?logo=SWC" /></a>
  </div>
</div>


## Commit Policy

- `git commit -m "[TYPE]: MESSAGE"`
  - `TYPE`은 아래와 같이 작성하고 그 의미를 둔다.
    - `INIT`: 초기 환경 설정
    - `FEAT`: 새로운 기능, 페이지, 컴포넌트 등의 추가
    - `FIX`: 버그 수정
    - `CHORE`: 문서 추가/수정, 빌드 업무 수정, 패키지 매니저 수정, 환경 설정 수정 등
    - `REFACT`: 코드 리팩토링, 코드 포맷팅, 세미콜론 누락, 코드 변경이 없는 수정 등
  - `MESSAGE`는 _**최대 100자 이내**_ 이해가 될 정도로 _**간결하게 작성**_ 할 것.
- 여러 `TYPE`이 동시에 해당되는 경우, 가장 중요한 `TYPE`을 선택하여 작성할 것.
  - 단, 구분이 필요한 경우 commit을 분리하여 작성할 것.
  - 예를 들어, FEAT와 FIX 커밋을 할 파일이 섞여 있는 경우 파일이 같다면 하나의 커밋으로 FEAT TYPE으로 작성하고 다르다면 분리하여 작성
- 커밋 내용이 길어질 경우에 git commit으로 여러줄을 작성. 단, 첫 줄은 반드시 정책을 따를 것.
- Example
  ```bash
    git commit -m "[FEAT]: Added login component"
    git commit -m "[FIX]: Fixed register validate"
    git commit -m "[CHORE]: Changed webpack config"
    git commit -m "[REFACT]: login component"
    git commit -m "[INIT]"
  ```