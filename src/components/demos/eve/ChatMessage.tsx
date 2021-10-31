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
	  pacity: 0;
	  ransform: translateX(50px)
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
  display: flex;
  flex-direction: row;
  margin-top: 16px;
  width: 100%;

  font-size: 16px;

  .bubbleWrapper {
    display: flex;
    flex-direction: column;
  }

  .bubble {
    width: auto;
    background: ${(props: { user: boolean }) =>
      props.user ? "#40949B" : "#3F3B56"};
    color: white;
    padding: 10px 16px 10px 16px;
    word-wrap: break-word;
    max-width: 240px;
    align-self: ${(props) => (props.user ? "flex-end" : "flex-start")};
    border-radius: ${(props) =>
      props.user ? "20px 20px 0px 20px" : "20px 20px 20px 0px"};
    font-size: inherit;
    animation: ${fadeIn} 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) 1;
  }
  .loadingBubble {
    color: white;
    background: #3f3b56;
    padding: 10px 16px 10px 16px;
    word-wrap: break-word;
    width: auto;
    align-self: flex-start;
    border-radius: 20px 20px 20px 0px;
    font-size: inherit;
    visibility: hidden;
    animation: ${fadeIn} 0.4s cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s 1;
    animation-fill-mode: forwards;
    > div {
      display: block;
    }
  }

  .time {
    width: auto;
    color: ${(props) => (props.user ? "#40949B" : "#3F3B56")};
    margin-top: 4px;
    font-size: 12px;
    align-self: ${(props) => (props.user ? "flex-end" : "flex-start")};
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
  loading?: boolean;
}

export const ChatMessage = ({
  isUser,
  message: { text, time },
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
