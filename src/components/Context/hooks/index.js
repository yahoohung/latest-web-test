import { createHook } from 'react-sweet-state';
import Store from '../store';
import {
  getZero,
  getCount,
} from './selector';

const useAppStore = (option) => createHook(Store, { option })();

const useZeroValue = createHook(Store, {
  selector: getZero,
});

const useCountValue = createHook(Store, {
  selector: getCount,
});



export {
  useAppStore,
  useZeroValue,
  useCountValue,
};
