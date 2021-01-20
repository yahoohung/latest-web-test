import { createHook } from 'react-sweet-state';
import Store from '../store';

const useAppStore = (option) => createHook(Store, { option })();

export {
  useAppStore,
};
