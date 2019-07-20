
import React, {
  Component
} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  

  NetInfo
} from 'react-native';

import firebase from 'firebase';



import Chat from './components/Chat/Chat'
import Login from './components/Auth2/Login';
import CreateAccount from './components/Auth2/CreateAccount';
import Recording from './components/recordingTesting/recording'

import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
import {createStackNavigator ,createAppContainer } from 'react-navigation';




const App = createStackNavigator({
  // Recording : {screen : Recording},
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Chat: { screen: Chat },
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;



