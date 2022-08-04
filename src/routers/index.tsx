import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  ExtraNavigation,
  OrdinaryNavigation,
  TabNavigator,
} from './routeConfig111';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/** tab navigator default pathname `/home` */
const BottomTabNavigator: React.FC<any> = React.memo(props => {
  return (
    <BottomTab.Navigator>
      {TabNavigator.map(v => {
        const {name, isLive, component, ...rest} = v;
        const RouteComponent = isLive ? component : React.memo(component);
        return (
          <BottomTab.Screen name={name} key={v.name} {...rest}>
            {props => <RouteComponent {...props} />}
          </BottomTab.Screen>
        );
      })}
    </BottomTab.Navigator>
  );
});

const OrdinaryNavigator: React.FC<unknown> = props => {
  return (
    <Stack.Navigator initialRouteName="/home">
      {OrdinaryNavigation.map(v => {
        const {name, isLive, component, ...rest} = v;
        const RouteComponent = isLive ? component : React.memo(component);
        return (
          <Stack.Screen name={name} key={v.name} {...rest}>
            {props => <RouteComponent {...props} />}
          </Stack.Screen>
        );
      })}
      {/* <Stack.Screen name={'/home'}>
        {props => <BottomTabNavigator {...props} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
};

const ExtraNavigator: React.FC<unknown> = props => {
  return (
    <Stack.Navigator initialRouteName="/home">
      {ExtraNavigation.map(v => {
        const {name, isLive, component, ...rest} = v;
        const RouteComponent = isLive ? component : React.memo(component);
        return (
          <Stack.Screen name={name} key={v.name} {...rest}>
            {props => <RouteComponent {...props} />}
          </Stack.Screen>
        );
      })}
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
