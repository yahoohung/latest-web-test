import { createSelector } from 'react-sweet-state';

const getZero = createSelector(
  state => state.count,
  count => count % 10 === 0,
);

const getCount = createSelector(
  state => state.count,
  count => count,
);

export {
  getZero,
  getCount,
};
