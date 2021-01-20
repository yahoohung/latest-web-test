import { createContainer, defaults } from 'react-sweet-state';
import Store from '../store';

if (typeof window !== 'undefined') {
  defaults.devtools = true;
}

const AppContainer = createContainer(Store, {
  onInit: () => async ({ setState }, {

  }) => {

  },
  onUpdate: () => async ({ setState }, {
  
  }) => {
  },
});

export default AppContainer;
