import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";

const ChatMessages = styled.div`
  height: 300px;
  overflow: auto;
  display: flex;
  flex-direction: column;
`;

const Message = styled.div`
  flex-direction: ${props => (props.right ? "row-reverse" : "row")};
  margin: 4px;
  display: flex;
`;
const Text = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
  display: inline-block;
  border-radius: 25px;
  background: rgb(153, 172, 194);
`;

class ChatClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocked: false,
      messages: []
    };

    this.makeRequest = this.makeRequest.bind(this);
  }

  componentDidMount() {
    this.props.onRef(this);
  }
  componentWillUnmount() {
    this.props.onRef(undefined);
  }

  addMessage(message) {
    const messages = this.state.messages;

    const blocked = messages.length % 2 === 0;

    if (blocked) {
      messages.push(message);
      this.setState({ messages: messages, blocked: blocked });
      this.makeRequest(message.text);
    } else {
      console.log("Chat is currently blocked");
    }
  }

  makeRequest(message) {
    axios({
      auth: {
        username: "dev",
        password: "dev"
      },
      method: "post",
      url: "http://localhost:8080/messageApi",
      data: {
        message: message,
        bot: 9
      }
    })
      .then(function(response) {
        const messages = this.state.messages;
        messages.push(response);
        this.setState({ messages: messages });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const Chat = (
      <div>
        {this.state.messages.map((message, index) => {
          return (
            <Message right={index % 2 === 0}>
              <Text>{message.text}</Text>
            </Message>
          );
        })}
      </div>
    );

    return <ChatMessages>{Chat}</ChatMessages>;
  }
}

export default ChatClient;
