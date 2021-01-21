import { createHook } from 'react-sweet-state';
import Store from '../store';
import { getZero } from './selector';

const useAppStore = (option) => createHook(Store, { option })();

const useZeroValue = createHook(Store, {
  selector: getZero,
});

export {
  useAppStore,
  useZeroValue,
};
