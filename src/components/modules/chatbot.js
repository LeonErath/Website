import React, { Component } from "react";
import styled from "styled-components";
import ChatClient from "./chatClient";

const SVG = styled.svg`
  width: 100%;

  height: 100%;
  object-fit: contain;
`;

const SendButton = styled.button`
  margin-left: 8px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  text-align: center;
  width: 48px;
  height: 48px;
  cursor: pointer;
  border-color: #6eb29d;
  outline: none;
  border-radius: 50%;
`;

const Button = styled.button`
  font-family: Calibri, sans-serif;

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
  height: 560px;
  width: 300px;

  margin-bottom: 14px;
`;

const ProfileImage = styled.div`
  position: absolute;
  z-index: 2;

  height: 100px;
  width: 100px;
  margin-left: 100px;
  border-radius: 50%;
  background: #ffffff;
`;
const ChatMessages = styled.div`
  height: 300px;
  overflow: auto;
  background: rgb(153, 172, 194);
`;

const PrivacyPolicy = styled.div`
  padding: 8px;
  color: rgb(153, 172, 194);
  font-size: 10px;
`;

const InputBox = styled.div`
  padding-left: 8px;
`;
const Input = styled.input`
  width: 200px;
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
  margin-top: 50px;
  position: relative;
  z-index: 1;
  font-weight: 100;
  line-height: 1.5;
  letter-spacing: 1.1;
  height: 450px;
  width: 300px;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.1);
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
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                  borderRadius: "50%"
                }}
                src="./profile.jpg"
              />
            </ProfileImage>
            <Chat>
              <ChatClient onRef={ref => (this.child = ref)} />
              <PrivacyPolicy>
                Eve uses the Information you provide to us to contact you about
                our relevant content, products, and services. You may
                unsubscribe from these communications at any time. For more
                information, check out our privaxy policy.
              </PrivacyPolicy>
              <InputBox>
                <Input
                  type="text"
                  name="chatmessage"
                  value={this.state.value}
                  onChange={evt => this.setState({ value: evt.target.value })}
                  placeholder="Your message.."
                />{" "}
                <SendButton onClick={this.sendMessage}>SEND</SendButton>
              </InputBox>
            </Chat>
          </ChatWindow>
        )}
        {!this.state.open && (
          <Message>
            Hey there!
            <br /> Do you want to chat with me?
          </Message>
        )}
        {!this.state.open && <Triangle />}
        <Button onClick={this.chatbotClick} color="#6eb29d">
          {!this.state.open && (
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 835.225 806.782"
              fill="#ffffff"
            >
              <g id="noun_chat_920149" transform="translate(-94.544 -3.215)">
                <g
                  id="Group_83"
                  data-name="Group 83"
                  transform="translate(94.544 3.215)"
                >
                  <path
                    id="Path_153"
                    data-name="Path 153"
                    class="cls-1"
                    d="M420.507,3.215c228.476,0,415.812,156.159,417.6,348.132,1.1,118.738-44.584,204.095-148.078,276.5-1.469,1.423-3.03,3.076-4.132,4.316-3.168,43.758,23.968,93.346,80.536,147.389l4.041,3.9a15.4,15.4,0,0,1-10.882,26.31c-.413,0-.781.229-1.194.229-118.6-9.321-239.633-96.423-261.214-112.677l-9.367-1.01c-13.775,1.791-53.033,5.556-67.266,5.556h-.046C190.24,701.866,2.9,544.559,2.9,352.541,2.9,160.476,190.24,3.215,420.507,3.215Zm1.01,665.73c13.27,0,55.971-3.122,63.823-4.454a16.626,16.626,0,0,1,5-.046l15.519,2.479A15.161,15.161,0,0,1,512.889,670c1.1.872,99.132,76.5,203.131,101.657-45.227-51.517-65.568-100.647-60.471-146.471a13.955,13.955,0,0,1,.872-3.627c.6-1.7,2.479-6.8,13.224-16.851.551-.505,1.148-.964,1.745-1.423C767.629,536.2,808.218,460.947,807.208,351.668,805.647,176.5,632.132,34.024,420.507,34.024c-213.278,0-386.747,142.384-386.747,317.46C33.714,526.515,207.229,668.945,421.517,668.945Z"
                    transform="translate(-2.905 -3.215)"
                  />
                </g>
              </g>
            </SVG>
          )}
          {this.state.open && (
            <SVG
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 711.244 711.244"
              fill="#ffffff"
            >
              <g
                id="Group_85"
                data-name="Group 85"
                transform="translate(-6404.358 2144.642)"
              >
                <line
                  id="Line_7"
                  data-name="Line 7"
                  class="cls-1"
                  x2="682.96"
                  y2="682.96"
                  transform="translate(6418.5 -2130.5)"
                />
                <line
                  id="Line_8"
                  data-name="Line 8"
                  class="cls-2"
                  y1="682.96"
                  x2="682.96"
                  transform="translate(6418.5 -2130.5)"
                />
              </g>
            </SVG>
          )}
        </Button>
      </Main>
    );
  }
}

export default Chatbot;
