import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import { Constants, ImagePicker, Permissions } from 'expo';
import firebaseSvc from '../resource/FirebaseSvc';

import firebase, { database } from 'firebase';
import Expo from "expo";
import {AppLoading} from "expo";
import { Root } from "native-base";
import { View, ScrollView, StyleSheet , TouchableOpacity , StatusBar} from "react-native";
import {AsyncStorage} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import { auth, initializeApp, storage } from 'firebase';
import uuid from 'uuid';


export default class SignIN extends Component {

    constructor(props){
		super(props)
		this.state={
      loading: true , 
			userEmail:'',
      userPassword:'', 
      name: 'Alexa B',
    email: 'test36@gmail.com',
    password: 'test123',
    avatar: '',
		}
	}

    static navigationOptions = {
        header : null
      }


      async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('../resource/Roboto.ttf'),
          'Roboto_medium': require('../resource/Roboto_medium.ttf'),
      ...Ionicons.font,
        });
        this.setState({ loading: false });
    
      }


    //   async componentWillMount() {
    //     await Expo.Font.loadAsync({
    //       Roboto: require("native-base/Fonts/Roboto.ttf"),
    //       Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    //       Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf"),
    //     });
    //     this.setState({ loading: false });
    //   }
      
    
    moveToSignUp= ()=>{

      // console.log(this.props)
      const { state, navigate } = this.props.navigation;
      navigate("SignUp" )
      console.log('navigate')
      // console.log(navigate)
  
  
    }
  
    // componentDidMount(){
    //   Expo.ScreenOrientation.allow(
    //     Expo.ScreenOrientation.Orientation.LANDSCAPE_RIGHT)
  
    // }

    state = {
      name: 'Alexa B',
      email: 'test36@gmail.com',
      password: 'test123',
      avatar: '',
    };
  
    // using Fire.js
    onPressLogin = async () => {
      console.log('pressing login... email:' + this.state.email);
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
      };
  
      const response = firebaseSvc.login(
        user,
        this.loginSuccess,
        this.loginFailed
      );
    };
  
    loginSuccess = () => {
      console.log('login successful, navigate to chat.');
      this.props.navigation.navigate('Chat', {
        name: this.state.name,
        email: this.state.email,
        avatar: this.state.avatar,
      });
    };
    loginFailed = () => {
      console.log('login failed ***');
      alert('Login failure. Please tried again.');
    };
  
  
    onChangeTextEmail = email => this.setState({ email });
    onChangeTextPassword = password => this.setState({ password });
  


  render() {
    if (this.state.loading) {
      return <AppLoading />;
    }
    return (
      <Container>
        {/* <Header  /> */}
        <Header style={styles.mainColor}>
          
          <Body>
            <Title style={{color:'white' ,marginLeft:'13%' }}>ZenClause Sign In </Title>
            
          </Body>
          <Right />
        </Header>
        <Content>

        {/* <Card> */}
            {/* <CardItem > */}
            <StatusBar hidden={true} />
          <Form style={{marginTop: '10%'}}>
            <Item last style={styles.inputField} >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={userEmail => this.setState({userEmail})}  placeholder='Email '/>
            </Item>
            <Item  last style={styles.inputField}>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	onChangeText={password => this.setState({password})}  placeholder='Password ' />
            </Item>

            <Button block style={styles.Login} onPress={() => this.onPressLogin()}>
            <Text style={{marginBottom: 7}}>Login</Text>
          </Button>
          
          </Form>
          <Text style={styles.textOfaccountChange}>
           Don't Have An Account
          </Text>
          <TouchableOpacity  >
            <Text 
            onPress={this.moveToSignUp}
            style={{
  color: 'black',
  marginLeft : '3%' , 
  fontSize: 15,
  textDecorationLine: 'underline'

            }}>
              Sign Up Now
            </Text>
          </TouchableOpacity>

          {/* </CardItem> */}
         {/* </Card> */}

        </Content>
      </Container>
    );
  }
}


const styles = StyleSheet.create({

  textOfaccountChange : {
    marginTop : '3%' , 
    color: 'black', opacity: 0.7, fontSize: 15 , 
    marginLeft : '3%' , 
  } , 
  btn :{
    marginTop: '2%  '
  } , 
  Login : {
    marginLeft : '3%' , marginRight : '3%' , marginTop: '3%' , backgroundColor  : '#0F91DC'
  } , 
  mainColor : {
    backgroundColor  : '#0F91DC'
  } , 
  inputField: {
    marginLeft : '3%'
  }
})