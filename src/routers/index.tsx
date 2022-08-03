import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OrdinaryNavigation, TabNavigator} from './routeConfig';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/** tab navigator default pathname `/home` */
const BottomTabNavigator: React.FC<any> = props => {
  return (
    <BottomTab.Navigator>
      {TabNavigator.map(v => {
        const RouteComponent = v.isLive ? v.component : React.memo(v.component);
        return (
          <BottomTab.Screen name={v.name} key={v.name}>
            {props => <RouteComponent {...props} />}
          </BottomTab.Screen>
        );
      })}
    </BottomTab.Navigator>
  );
};

const OrdinaryNavigator: React.FC<unknown> = props => {
  return (
    <Stack.Navigator initialRouteName="/home">
      {OrdinaryNavigation.map(v => {
        const RouteComponent = v.isLive ? v.component : React.memo(v.component);
        return (
          <Stack.Screen name={v.name} key={v.name}>
            {props => <RouteComponent {...props} />}
          </Stack.Screen>
        );
      })}
      <Stack.Screen name={'/home'}>
        {props => <BottomTabNavigator {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const ApplicationsRoute: React.FC<any> = () => {
  return (
    <React.Fragment>
      <OrdinaryNavigator />
    </React.Fragment>
  );
};

export default ApplicationsRoute;
