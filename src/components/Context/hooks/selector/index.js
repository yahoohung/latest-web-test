import { createSelector } from 'react-sweet-state';

const getZero = createSelector(
  state => state.count,
  count => count % 10 === 0,
);

const getCount = createSelector(
  state => state.count,
  count => count,
);

const getTestA = createSelector(
  state => state.test,
  test => test?.a,
);

const getTestB = createSelector(
  state => state.test,
  test => test?.b,
);

export {
  getZero,
  getCount,
  getTestA,
  getTestB,
};
