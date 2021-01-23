import { createHook } from 'react-sweet-state';
import Store from '../store';
import {
  getZero,
  getCount,
  getTestA,
  getTestB,
} from './selector';

const useAppStore = (option) => createHook(Store, { option })();

const useZeroValue = createHook(Store, {
  selector: getZero,
});

const useCountValue = createHook(Store, {
  selector: getCount,
});

const useTestA = createHook(Store, {
  selector: getTestA,
});

const useTestB = createHook(Store, {
  selector: getTestB,
});

export {
  useAppStore,
  useZeroValue,
  useCountValue,
  useTestA,
  useTestB,
};
