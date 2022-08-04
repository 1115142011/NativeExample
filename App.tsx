import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import ApplicationsRoute from './src/routers';

const App: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <ApplicationsRoute />
    </NavigationContainer>
  );
};

export default App;
