import { createContainer } from 'react-sweet-state';
import Store from '../store';

const AppContainer = createContainer(Store, {
  onInit: () => async ({ setState }, {

  }) => {

  },
  onUpdate: () => async ({ setState }, {
  
  }) => {
  },
});

export default AppContainer;
