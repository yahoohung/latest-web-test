import { createStore } from 'react-sweet-state';
import initialState from './initialState';

const Store = createStore({
  initialState,
  actions: {
    add: () => ({ setState, getState }) => {
      setState({
        count: getState().count + 1,
      });
    },
  },
  name: 'appStore',
});

export default Store;
