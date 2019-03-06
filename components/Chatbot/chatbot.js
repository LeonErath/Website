import React, { Component } from "react";
import styled from "styled-components";
import ChatClient from "./chatClient";
import ChatIcon from "../svg/chat";
import DismissIcon from "../svg/dismiss2";
import SendIcon from "../svg/send";

const SendButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  width: 34px;
  height: 34px;
  cursor: pointer;
  background: #6eb29d;
  outline: none;
  border: none;
  border-radius: 50%;
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 1px;
  color: ${props => (props.textcolor ? props.textcolor : "white")};
  background: ${props => (props.color ? props.color : "black")};
  font-size: 16px;
  width: 48px;
  height: 48px;
  border: 2px solid ${props => (props.color ? props.color : "black")};
  border-radius: 24px;
  display: inline-flex;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
  :focus {
    outline: 0;
  }
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  justify-content: flex-end;
  align-items: flex-end;
`;

const Message = styled.div`
  padding: 12px;
  border-radius: 8px;
  background: #fff;
  font-weight: 100;
  line-height: 1.5;
  letter-spacing: 1.1;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 10px 0 10px;
  margin-right: 12px;
  margin-bottom: 4px;
  border-color: #fff transparent transparent transparent;
`;

const ChatWindow = styled.div`
  position: relative;
  z-index: 0;
  height: 574px;
  width: 300px;

  margin-bottom: -2px;
`;

const ProfileImage = styled.div`
  position: absolute;
  z-index: 2;

  height: 140px;
  width: 140px;
  margin-left: 80px;
  border-radius: 50%;

  background: #ffffff;
`;

const PrivacyPolicy = styled.div`
  padding: 8px;
  color: rgb(153, 172, 194);
  font-size: 10px;
`;

const InputBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  width: 240px;
  padding: 6px 10px;
  font-size: 14px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  :focus {
    outline: 0;
  }
`;

const Chat = styled.div`
  padding-top: 58px;
  margin-top: 70px;
  position: relative;
  z-index: 1;
  font-weight: 100;
  line-height: 1.5;
  letter-spacing: 1.1;
  height: 444px;
  width: 300px;

  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);

  border-radius: 8px;
  background: #ffffff;
`;

class Chatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      acceppted: false,
      value: ""
    };

    this.chatbotClick = this.chatbotClick.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  chatbotClick() {
    console.log("Chatbot clicked");
    this.setState({ open: !this.state.open });
  }

  sendMessage() {
    this.child.addMessage({ text: this.state.value });
    this.setState({ value: "" });
  }

  render() {
    return (
      <Main>
        {this.state.open && (
          <ChatWindow>
            <ProfileImage>
              {" "}
              <img
                alt="profile"
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
                src="./images/eve/smile2.jpg"
              />
            </ProfileImage>
            <Chat>
              <ChatClient onRef={ref => (this.child = ref)} />
              <PrivacyPolicy>
                Eve uses your messages to generate an appropriate answer. Your
                messages will be sent to the server and then deleted. None of
                your messages will be saved or kept longer than necessary. For
                more information on how we process your information, check our
                privacy policy.
              </PrivacyPolicy>
              <InputBox>
                <Input
                  type="text"
                  name="chatmessage"
                  value={this.state.value}
                  onChange={evt => this.setState({ value: evt.target.value })}
                  placeholder="Your message.."
                />{" "}
                <SendButton onClick={this.sendMessage}>
                  <SendIcon />
                </SendButton>
              </InputBox>
            </Chat>
          </ChatWindow>
        )}
        {this.state.open && <Triangle />}
        {!this.state.open && (
          <Message>
            Hey there!
            <br /> Do you want to chat with me?
          </Message>
        )}
        {!this.state.open && <Triangle />}
        <Button onClick={this.chatbotClick} color="#6eb29d">
          {!this.state.open && <ChatIcon />}
          {this.state.open && <DismissIcon />}
        </Button>
      </Main>
    );
  }
}

export default Chatbot;
