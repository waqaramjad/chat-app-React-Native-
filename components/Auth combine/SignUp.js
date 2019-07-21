import React, { Component } from 'react';
import { Container, Left , Header, Content, Body, Right, Title, Form, Item, Input, Label ,  Button, Text , Icon  } from 'native-base';
import firebase, { database } from 'firebase';
import {Expo, AppLoading } from "expo";
import { View, ScrollView, StyleSheet ,StatusBar ,  TouchableOpacity} from "react-native";
import { Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import firebaseSvc from '../resource/FirebaseSvc';


export default class SignUp extends Component {
  
  constructor(props){
		super(props)
		this.state={
      name : '' , 
     
			email:'', 
      password:''	, 
      cnfrmPass :'',

      avatar : ' ', 
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

  

  moveToSignIn= ()=>{

    console.log(this.props)
    const { state, navigate } = this.props.navigation;
    navigate("SignIn" )
    console.log('navigate')
    console.log(navigate)


  }

  onPressCreate = async () => {
    console.log('create account... email:' + this.state.email);
    try {
      const user = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar: this.state.avatar,
      };

      var str1 = user.name;
      var str2 = this.state.cnfrmPass
      var n = str1.localeCompare(str2);
      // //console.log(n)  

      if(n===-1){
        alert('Password not matched')

      }

      else{
      await firebaseSvc.createAccount(user);
   } } catch ({ message }) {
      console.log('create account failed. catch error:' + message);
    }
  };

  onChangeTextEmail = email => this.setState({ email });
  onChangeTextPassword = password => this.setState({ password });
  onChangeTextName = name => this.setState({ name });

  onImageUpload = async () => {
    const { status: cameraRollPerm } = await Permissions.askAsync(
      Permissions.CAMERA_ROLL
    );
    try {
      // only if user allows permission to camera roll
      if (cameraRollPerm === 'granted') {
        console.log('choosing image granted...');
        let pickerResult = await ImagePicker.launchImageLibraryAsync({
          allowsEditing: true,
          aspect: [4, 3],
        });
        console.log(
          'ready to upload... pickerResult json:' + JSON.stringify(pickerResult)
        );

        var wantedMaxSize = 150;
        var rawheight = pickerResult.height;
        var rawwidth = pickerResult.width;
        
        var ratio = rawwidth / rawheight;
        var wantedwidth = wantedMaxSize;
        var wantedheight = wantedMaxSize/ratio;
        // check vertical or horizontal
        if(rawheight > rawwidth){
            wantedwidth = wantedMaxSize*ratio;
            wantedheight = wantedMaxSize;
        }
        console.log("scale image to x:" + wantedwidth + " y:" + wantedheight);
        let resizedUri = await new Promise((resolve, reject) => {
          ImageEditor.cropImage(pickerResult.uri,
          {
              offset: { x: 0, y: 0 },
              size: { width: pickerResult.width, height: pickerResult.height },
              displaySize: { width: wantedwidth, height: wantedheight },
              resizeMode: 'contain',
          },
          (uri) => resolve(uri),
          () => reject(),
          );
        });
        let uploadUrl = await firebaseSvc.uploadImage(resizedUri);
        //let uploadUrl = await firebaseSvc.uploadImageAsync(resizedUri);
        await this.setState({ avatar: uploadUrl });
        console.log(" - await upload successful url:" + uploadUrl);
        console.log(" - await upload successful avatar state:" + this.state.avatar);
        await firebaseSvc.updateAvatar(uploadUrl); //might failed
      }
    } catch (err) {
      console.log('onImageUpload error:' + err.message);
      alert('Upload image error:' + err.message);
    }
  };



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

              <Input onChangeText={name => this.setState({name})}  placeholder='User Name  '/>
            </Item>
            <Item >
            {/* <Icon active name='lock' /> */}

              <Input onChangeText={email => this.setState({email})}  placeholder='Email '/>
            </Item>
            <Item  last>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	 secureTextEntry={true}  onChangeText= {password => this.setState({password})}  placeholder='Password ' />
            </Item>
            <Item  last>
              {/* <Label>Password</Label> */}
              {/* <Icon active name='lock' /> */}
              <Input  secureTextEntry={true}	onChangeText={cnfrmPass => this.setState({cnfrmPass})}  placeholder='Confirm Password ' />
            </Item>
            <Button
          title="Upload Avatar Image"
          style={styles.buttonText}
          onPress={this.onImageUpload}
        />
            <Button block style={styles.Login} onPress={() => this.onPressCreate()}>
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
  }, 
  buttonText: {
    marginLeft: offset,
    fontSize: 42,
  },
})


