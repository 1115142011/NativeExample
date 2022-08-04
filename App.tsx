import React from 'react';
import ApplicationsRoute from './src/routers';
import store from '@stores/index';
import {Provider} from 'react-redux';

const App: React.FC<any> = () => {
  return (
    <Provider store={store}>
      <ApplicationsRoute />
    </Provider>
  );
};

export default App;
