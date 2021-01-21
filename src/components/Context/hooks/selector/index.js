import { createSelector } from 'react-sweet-state';

const getZero = createSelector(
  state => state.count,
  count => count % 10 === 0,
);

export {
  getZero,
};
