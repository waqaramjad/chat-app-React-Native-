import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'; // 0.3.0

import firebaseSvc from '../resource/FirebaseSvc';

type Props = {
  name?: string,
  email?: string,
  avatar?: string,
};

class Chat extends React.Component<Props> {

  constructor(props) {
    super(props);
  }
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {
    return {
      name: "WAQAR AMJAD" ,
      email: "test3@gmail.com",
      avatar: this.props.navigation.state.params.avatar,
      RecevierUID: this.props.navigation.state.params.RecevierUID,
      id: 'xSiLKMWW0aWK8u4H6uS7hOH7mEg1',
      _id: 'xSiLKMWW0aWK8u4H6uS7hOH7mEg1', // need for gifted-chat
      // name: this.props.navigation.state.params.name,
      // email: this.props.navigation.state.params.email,
      // avatar: this.props.navigation.state.params.avatar,
      // id: firebaseSvc.uid,
      // _id: firebaseSvc.uid, // need for gifted-chat

    };
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={firebaseSvc.send}
        user={this.user}
      />
    );
  }

  // componentDidMount() {
  //   firebaseSvc.refOn(message =>{
  //     // GlobalUser = this.user
  //     this.setState(previousState => ({
  //       messages: GiftedChat.append(previousState.messages, message),
  //     }))
  //   }
  //   );
  // }
  componentWillUnmount() {
    firebaseSvc.refOff();
  }
}

export default Chat;
