import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'

export default  class Example extends React.Component {
  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
       
          user: {
            _id: 1,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
       
       
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    console.log('check', this.state.messages)

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    )
  }
}