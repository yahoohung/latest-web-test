import { createStore, defaults } from 'react-sweet-state';
import { produce } from 'immer';
import initialState from './initialState';

defaults.mutator = (currentState, producer) => produce(currentState, producer);

const Store = createStore({
  initialState,
  actions: {
    add: (n = 1) => ({ setState }) => {
      setState(({ test }) => {
        test.a += n;
      });
    },
    increment: (n = 2) => ({ setState }) => {
      setState(draft => {
        draft.count += n;
      });
    },
  },
  name: 'appStore',
});

export default Store;
