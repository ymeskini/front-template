import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { createRouter } from './lib/router/createRouter';
import { createStore } from './lib/redux/createStore';

const store = createStore({});
const router = createRouter();

const App = () => (
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

export default App;