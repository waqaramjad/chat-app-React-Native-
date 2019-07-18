// import { AppLoading } from 'expo';
// import { Asset } from 'expo-asset';
// import * as Font from 'expo-font';
// import { Root } from "native-base";
// import React, { useState } from 'react';
// import { Platform, StatusBar, StyleSheet, View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// import AppNavigator from './navigation/Navigator';

// export default function App(props) {
//   const [isLoadingComplete, setLoadingComplete] = useState(false);
 

//   if (!isLoadingComplete && !props.skipLoadingScreen) {
//     return (
//       <AppLoading
//         startAsync={loadResourcesAsync}
//         onError={handleLoadingError}
//         onFinish={() => handleFinishLoading(setLoadingComplete)}
//       />
//     );
//   } else {
//     return (
//       <View style={styles.container}>
//         {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
//         <AppNavigator />
//       </View>
//     );
//   }
// }


// async function loadResourcesAsync() {
//   await Promise.all([
//     Asset.loadAsync([
//       require('./assets/images/robot-dev.png'),
//       require('./assets/images/robot-prod.png'),
//     ]),
//     Font.loadAsync({
//       // This is the font that we are using for our tab bar
//       ...Ionicons.font,
//       // We include SpaceMono because we use it in HomeScreen.js. Feel free to
//       // remove this if you are not using it in your app
//       'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
//     }),
//   ]);
// }

// function handleLoadingError(error: Error) {
//   // In this case, you might want to report the error to your error reporting
//   // service, for example Sentry
//   console.warn(error);
// }

// function handleFinishLoading(setLoadingComplete) {
//   setLoadingComplete(true);
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
// });



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



// import {
  // Navigator
// } from 'react-native-deprecated-custom-components'
// import Dashboard from './components/home/DashBoard'
import Chat from './components/Chat/Chat'
import Login from './components/Auth2/Login';
import CreateAccount from './components/Auth2/CreateAccount';
// import Chat from './components/Chat';

import SignIn from './components/Auth/SignIn'
import SignUp from './components/Auth/SignUp'
// import Splash from './components/SplashScreen/splash'
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
  // Dashboard: {screen: Dashboard},
  // Splash: {screen: Splash},
  // Chat :{screen : Chat}, 
  Login: { screen: Login },
  CreateAccount: { screen: CreateAccount },
  Chat: { screen: Chat },
  // SignIn: {screen: SignIn}, 

  // SignUp: {screen: SignUp},
});

const AppContainer = createAppContainer(App) 
export default AppContainer





console.disableYellowBox = true;



