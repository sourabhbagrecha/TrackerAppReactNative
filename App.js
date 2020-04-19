import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import {Provider as AuthProvider, Context as AuthContext} from './src/contexts/AuthContext';
import { setNavigator } from './src/NavigationRef';
import ResolveAuthSignIn from './src/screens/ResolveAuthSignIn';
import LocationContext from './src/contexts/LocationContext';

const switchNavigator = createSwitchNavigator({
  ResolveAuth: ResolveAuthSignIn,
  loginFlow: createStackNavigator({
    SignUp: SignUpScreen,
    SignIn: SignInScreen
  }),
  mainFlow: createBottomTabNavigator({
    trackListFlow: createStackNavigator({
      TrackList: TrackListScreen,
      TrackDetail: TrackDetailScreen
    }),
    TrackCreate: TrackCreateScreen,
    Account: AccountScreen
  })
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <LocationContext.Provider>
      <AuthProvider>
        <App ref={(navigator) => { setNavigator(navigator) }}/>
      </AuthProvider>
    </LocationContext.Provider>
  );
};