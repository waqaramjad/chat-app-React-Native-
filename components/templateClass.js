import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import firebase, { database } from 'firebase';
import {Expo, AppLoading } from "expo";
import { View, ScrollView, StyleSheet ,StatusBar ,  TouchableOpacity} from "react-native";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class Home extends Component {
  
  constructor(props){
		super(props)
		this.state={
    
     loading: true , 

     		
    }
    
    const { state, navigate } = this.props.navigation;

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



  render() {

     if (this.state.loading) {
      return <AppLoading />;
    }
    return (
     <Container>
       <Header style={styles.mainColor}>
          
          <Body>
            <Title style={{color:'white' ,marginLeft:'13%' }}>Screen </Title>
            
          </Body>
          <Right />
        </Header>
        <Content>
        <StatusBar hidden={true} />

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
  }
})


