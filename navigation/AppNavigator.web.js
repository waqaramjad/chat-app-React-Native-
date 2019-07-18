import { createBrowserApp } from '@react-navigation/web';
import { createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'

const switchNavigator = createSwitchNavigator({
  SignUp : SignUp , 
  SignIn : SignIn , 

  // Main: MainTabNavigator,

});
switchNavigator.path = '';

export default createBrowserApp(switchNavigator, { history: 'hash' });
