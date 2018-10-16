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
  margin: 8px;
  display: flex;
`;
const Text = styled.div`
  padding-top: 6px;
  padding-bottom: 6px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 100;
  font-size: 14px;
  display: inline-block;
  border-radius: 25px;
  background: #6eb29d;
  color: #ffffff;
`;

class ChatClient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blocked: false,
      messages: []
    };

    this.makeRequest = this.makeRequest.bind(this);
    this.scrollToBottom = this.scrollToBottom.bind(this);
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

  componentDidUpdate() {
    this.scrollToBottom();
  }
  scrollToBottom() {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  makeRequest(message) {
    let that = this;
    axios({
      method: "post",
      url: "http://leonerath.de:8080/messageApi",
      data: {
        message: message,
        bot: 1
      }
    })
      .then(function(response) {
        console.log(response.data);

        let messages = that.state.messages;
        messages.push({ text: response.data });
        console.log(messages);

        that.setState({ messages: messages });
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
        <div
          style={{ float: "left", clear: "both" }}
          ref={el => {
            this.messagesEnd = el;
          }}
        />
      </div>
    );

    return <ChatMessages>{Chat}</ChatMessages>;
  }
}

export default ChatClient;
