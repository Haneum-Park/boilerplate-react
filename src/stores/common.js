import { atom, selector } from 'react';

const atomExample = atom({
  key: 'atomExample',
  default: '',
});

const selectorExample = selector({
  key: 'selectorExample',
  get: ({ get }) => get('atomExample'),
  set: ({ set }, value) => set('atomExample', value),
});

export {
  atomExample,
  selectorExample,
};