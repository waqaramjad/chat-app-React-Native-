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
  
  // import firebase from 'firebase';
  
  
  
//   import {
//     Navigator
//   } from 'react-native-deprecated-custom-components'
//   import Dashboard from './components/home/DashBoard'
import SignUp from '../components/Auth/SignUp'
import SignIn from '../components/Auth/SignIn'
//   import Splash from './components/SplashScreen/splash'
  import {createStackNavigator ,createAppContainer } from 'react-navigation';
  
  
  // var config = {
  //   apiKey: "AIzaSyDTO_VW8KigcpywWHw8q10DCQBRz0uBW54",
  //   authDomain: "zenclause.firebaseapp.com",
  //   databaseURL: "https://zenclause.firebaseio.com",
  //   projectId: "zenclause",
  //   storageBucket: "zenclause.appspot.com",
  //   messagingSenderId: "284077417988"
  // };
  // firebase.initializeApp(config);
  
  
  const App = createStackNavigator({
    SignIn: {screen: SignIn},   
    // Dashboard: {screen: Dashboard},
    // Splash: {screen: Splash},
    
     SignUp: {screen: SignUp},
  });
  
  const AppContainer = createAppContainer(App) 
  export default AppContainer
  
  
  
  
  
  console.disableYellowBox = true;
  
  