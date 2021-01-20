import { createStore } from 'react-sweet-state';
import initialState from './initialState';

const Store = createStore({
  initialState,
  actions: {},
  name: 'appStore',
});

export default Store;
