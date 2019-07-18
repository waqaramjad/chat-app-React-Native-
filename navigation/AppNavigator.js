import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    SignUp : SignUp , 
  SignIn : SignIn , 

    Main: MainTabNavigator,
  })
);
