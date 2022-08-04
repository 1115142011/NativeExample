import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ExtraNavigation, OrdinaryNavigation, TabNavigator} from './routeConfig';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from './navigation';
import {useSelector} from 'react-redux';
import {GlobeStore} from '@stores/index';

const BottomTab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

/** tab navigator default pathname `/home` */
const BottomTabNavigator: React.FC<any> = React.memo(props => {
  if (TabNavigator.length === 0) return null;
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

/** normal route and need authority */
const OrdinaryNavigator: React.FC<unknown> = () => {
  if (TabNavigator.length === 0 && OrdinaryNavigation.length === 0) return null;
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
      {Boolean(TabNavigator.length) && (
        <Stack.Screen name={'/home'}>
          {props => <BottomTabNavigator {...props} />}
        </Stack.Screen>
      )}
    </Stack.Navigator>
  );
};

/** not authority */
const ExtraNavigator: React.FC<unknown> = () => {
  if (ExtraNavigation.length === 0) return null;
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
  const islogin = useSelector((state: GlobeStore) => state.user.isLogin);
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <SafeAreaView style={{flex: 1}}>
          {islogin ? <OrdinaryNavigator /> : <ExtraNavigator />}
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationsRoute;
