import styled, { keyframes } from "styled-components";
import moment from "moment";
import { BeatLoader } from "react-spinners";

const fadeIn = keyframes`
  from {
    transform: scale(0.3);
	opacity: 0;
  }

  to {
	visibility: visible;
    transform: scale(1);
	opacity: 1;
  }
`;
const fadeInRight = keyframes`
  from {
	opacity: 0;
	transform: translateX(50px)
  }
  to {
	opacity: 1;
	transform: translateX(0px)
  }
`;
const fadeInLeft = keyframes`
  from {
	opacity: 0;
	transform: translateX(-50px)
  }
  to {
	opacity: 1;
	transform: translateX(0px)
  }
`;

const Message = styled.div`
  margin-top: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: ${(props: { user: boolean }) =>
    props.user ? "flex-end" : "flex-start"};

  .bubbleWrapper {
    display: flex;
    flex-direction: column;
  }
  .bubble {
    display: block;
    background: ${(props) => (props.user ? "#40949B" : "#3F3B56")};
    color: ${(props) => (props.user ? "white" : "white")};
    padding: 10px 16px 10px 16px;
    word-wrap: break-word;
    max-width: 240px;
    align-self: ${(props) => (props.user ? "flex-end" : "flex-start")};
    border-radius: ${(props) =>
      props.user ? "20px 20px 0px 20px" : "20px 20px 20px 0px"};
    font-size: 20px;
    animation: ${fadeIn} 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) 1;
  }
  .loadingBubble {
    display: block;
    background: ${(props) => (props.user ? "#40949B" : "#3F3B56")};
    color: ${(props) => (props.user ? "white" : "white")};
    padding: 10px 16px 10px 16px;
    word-wrap: break-word;
    max-width: 240px;
    align-self: ${(props) => (props.user ? "flex-end" : "flex-start")};
    border-radius: ${(props) =>
      props.user ? "20px 20px 0px 20px" : "20px 20px 20px 0px"};
    font-size: 20px;
    visibility: hidden;
    animation: ${fadeIn} 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s 1;
    animation-fill-mode: forwards;
  }

  .time {
    color: ${(props) => (props.user ? "#40949B" : "#3F3B56")};
    margin-top: 4px;
    font-size: 12px;
    align-self: ${(props) => (props.user ? "flex-start" : "flex-end")};
    animation: ${(props) => (props.user ? fadeInRight : fadeInLeft)} 0.5s
      cubic-bezier(0.075, 0.82, 0.165, 1) 1;
  }
`;

interface Props {
  isUser: boolean;
  message: {
    text: string;
    time: number;
  };
  isLast: boolean;
  loading?: boolean;
}

export const ChatMessage = ({
  isUser,
  message: { text, time },
  isLast,
  loading,
}: Props) => {
  if (loading) {
    return (
      <Message user={isUser}>
        <div className="bubbleWrapper">
          <div className="loadingBubble">
            <BeatLoader
              size={8}
              color={"#ffffff"}
              loading={loading}
              margin={2}
            />
          </div>
        </div>
      </Message>
    );
  }
  return (
    <Message user={isUser}>
      <div className="bubbleWrapper">
        <div className="bubble">{text}</div>
        <div className="time">{moment(time).format("LT")}</div>
      </div>
    </Message>
  );
};
