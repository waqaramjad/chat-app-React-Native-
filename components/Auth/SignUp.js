import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import firebase, { database } from 'firebase';
import {Expo, AppLoading } from "expo";
import { View, ScrollView, StyleSheet ,StatusBar ,  TouchableOpacity} from "react-native";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';


export default class SignUp extends Component {
  
  constructor(props){
		super(props)
		this.state={
     userName : '' , 
     
			userEmail:'', 
      userPassword:''	, 
      cnfrmPass :'',
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

  // async componentWillMount() {
  //   await Font.loadAsync({
  //     'Roboto': require('../resource/Roboto.ttf'),
  //     'Roboto_medium': require('../resource/Roboto_medium.ttf'),
  //     // ...Ionicons.font,
  //   });
  //   this.setState({ loading: false });
  // }

  
  signupAction = () => {
    let uid ;
    let myThis = this

    this.setState({
      userName : '' , 

      userEmail:'', 
      userPassword:''	, 
      cnfrmPass :'',
    })
    const {userName} = this.state;
    
    const {userEmail} = this.state;
    // const {CompanyName} = this.state;
    const {userPassword} = this.state;
    const {cnfrmPass} = this.state;
    
    
    // // //console.log(FirstName)
    
    
    var obj = {
      
      userName : userName,
      
      
      mail : userEmail,
      // pass : userPassword , 
      
      
    }
    const { navigate } = this.props.navigation; 
        var str1 = userPassword;
    var str2 = cnfrmPass;
    var myUId ; 
    // //    
        var n = str1.localeCompare(str2);
        // //console.log(n)  

        if(n===-1){
          alert('Password not matched')

        }
        else{

        //  userEmail = 'waqaramjad345@gmail.com'
        //  userPassword = '000000'
        var fb = firebase.auth()
        fb.createUserWithEmailAndPassword(userEmail,userPassword)
            .then((createdUser) => {
                alert('signed up successfully');
                // //console.log(createdUser.user.uid)
                myUId = createdUser.user.uid ; 
                //console.log('myUId')
                

                fb.signInWithEmailAndPassword(userEmail, userPassword)
                .then((signedinUser) => {

                  var user = fb.currentUser
                  user.sendEmailVerification().then(function() {
                    //console.log('email sent')
                    alert('Check your Email to uthorize your account')

     
    
                    // var a = this.props.navigation.navigate("Home") 
                    // var a = this.props.navigation

                   
                   
                        setTimeout(function(){ navigate("SignIn")}, 5000);
                    
                  })

                }).catch(function(error) {
                  // An error happened.
                  //console.log(error)
                });              
  
                firebase.database().ref('users/'+myUId+'/'  ).set(obj)
                    .then(() => {
                    })
  
  
            }).catch((err)=>{
              // //console.log(err)
              alert(err.message)
              
          })
        }
  
  }

  moveToSignIn= ()=>{

    console.log(this.props)
    const { state, navigate } = this.props.navigation;
    navigate("SignIn" )
    console.log('navigate')
    console.log(navigate)


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
       <Header style={styles.mainColor}>
          
          <Body>
            <Title style={{color:'white' ,marginLeft:'13%' }}>ZenClause Sign Up </Title>
            
          </Body>
          <Right />
        </Header>
        <Content>
        {/* <Card> */}
            {/* <CardItem > */}
        <StatusBar hidden={true} />
          <Form style={{marginTop: '10%'}}>
            <Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={userName => this.setState({userName})}  placeholder='User Name  '/>
            </Item>
            <Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={userEmail => this.setState({userEmail})}  placeholder='Email '/>
            </Item>
            <Item  last>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	 secureTextEntry={true}  onChangeText= {userPassword => this.setState({userPassword})}  placeholder='Password ' />
            </Item>
            <Item  last>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	onChangeText={cnfrmPass => this.setState({cnfrmPass})}  placeholder='Confirm Password ' />
            </Item>

            <Button block style={styles.Login} onPress={() => this.signupAction()}>
            <Text>Sign Up </Text>
          </Button>
          
          </Form>
          <Text style={styles.textOfaccountChange}>
           Already have account
          </Text>
          <TouchableOpacity onPress={this.moveToSignIn}  >
            <Text style={{
  color: 'black',
  marginLeft : '3%' , 
  fontSize: 15,
  textDecorationLine: 'underline'

            }}>
              Sign In now
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
  }
})


