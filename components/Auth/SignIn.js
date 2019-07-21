import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import firebase, { database } from 'firebase';
import Expo from "expo";
import {AppLoading} from "expo";
import { Root } from "native-base";
import { View, ScrollView, StyleSheet , TouchableOpacity , StatusBar} from "react-native";
import {AsyncStorage} from 'react-native';
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class SignIN extends Component {

    constructor(props){
		super(props)
		this.state={
      loading: true , 
			userEmail:'',
			userPassword:''
		}
	}

    static navigationOptions = {
        header : null
      }

      // async componentWillMount() {
      //   await Font.loadAsync({
      //     'Roboto': require('../resource/Roboto.ttf'),
      //     'Roboto_medium': require('../resource/Roboto_medium.ttf'),
      //     // 'Ionicons': require("@expo/vector-icons/fonts/Ionicons.ttf"),
      //   });
      //   this.setState({ loading: false });
      //   console.log('test')
      // }

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
      
      signinAction = () => {
   
        var myThis = this

                const {userEmail,userPassword} = this.state;
          // var myNavigator = 	this.props.prop.navigator
     const { state, navigate } = this.props.navigation;
                // // //console.log(myNavigator)
          // //console.log('done')
          var emailVerified
          var fb = firebase.auth()
          // const { navigate } = myThis.props.prop.navigation; 
            fb.signInWithEmailAndPassword(userEmail, userPassword)
                .then((signedinUser) => {
                  firebase.database().ref('users/'+signedinUser.user.uid+'/' ).once('value').then(function(snapshot) {
                    
                    
                    var user = fb.currentUser;
                    emailVerified = user.emailVerified
                    
                    
                   
                   if (emailVerified === true)
                   {
                     var checkForUser = snapshot.val()
                     var checking = checkForUser.userName
                     var UID = signedinUser.user.uid
                    navigate("Splash", {userName: checking , UID : UID })
                   }
                   else{
                     alert('email not verified ')
                    }
                
                   //console.log('hello 1')
                    // //console.log('else')
                    // alert('Login Success')
                  //   myNavigator.push({
                  //     title: 'Home' , 
                      
                  })
    // //console.log()
    
    
                
                 
                 
                  // });
                  // //console.log('check'+signedinUser.user.uid)
    
                        
                                // //console.log('done 2')
    
                }).catch((err)=>{
                  // //console.log(err)
                                alert(err.message)
                            })
    
        // }
    
    }
    
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
              <Input  secureTextEntry={true}	onChangeText={userPassword => this.setState({userPassword})}  placeholder='Password ' />
            </Item>

            <Button block style={styles.Login} onPress={() => this.signinAction()}>
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