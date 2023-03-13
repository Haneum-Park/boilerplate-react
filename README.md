<div style="text-align: center">
  <p style="font-size: 38px; font-weight: bold">BOILERPLATE REACT</p>
  <img src="https://img.shields.io/badge/node.js-v18.12.1-339933?logo=Node.js" />
  <img src="https://img.shields.io/badge/yarn-v1.22.18-2C8EBB?logo=Yarn" />
</div>

---

## Component Design Pattern

- `VAC (View - Assets - Component)`
- `Atomic (Atom - Molecule - Organism - Template - Page)`
  - 기존 `Atomic` 디자인 패턴에서 `Molecule`, `Organism`, `Template`을 제거하고 `Block` 단위를 추가해 적용
  - `Proxy` 상태관리를 사용하여 `props drilling`을 방지
- `Presentational and Container Components`
  - `Presentational Components` : UI를 담당하는 컴포넌트
  - `Container Components` : `Presentational Components`를 감싸고 데이터를 주입하는 컴포넌트

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
    <img src="https://img.shields.io/badge/webpack-v5.74.0-8DD6F9?logo=Webpack" />
  </div>
  <div style="display: flex; align-items: center">
    <code>Compiler</code>
    &nbsp;:&nbsp;
    <a style="display: flex; align-items: center" href="https://www.npmjs.com/package/@babel/core"><img src="https://img.shields.io/badge/babel-v7.18.10-F9DC3E?logo=Babel" /></a>
  </div>
</div>
