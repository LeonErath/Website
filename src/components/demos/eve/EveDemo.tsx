import axios from "axios";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import { ChatMessage } from "./ChatMessage";
import classes from "./EveDemo.module.scss";

const Status = styled.div`
  height: 14px;
  width: 14px;
  position: absolute;
  top: 60px;
  left: 55px;
  color: gray;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  opacity: ${(props: { loading?: boolean }) => (props.loading ? 1 : 0)};
  transform: ${(props: { loading?: boolean }) =>
    props.loading ? "scale(1)" : "scale(0.5)"};
`;

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  content: {
    padding: "8px",
    width: "94%",

    maxWidth: "400px",
    display: "flex",
    backgroundColor: "rgba(250, 250, 250, 0.3)",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "cetner",
    top: "80px",
    bottom: "16px",
    left: "50%",
    right: "auto",
    border: "0px solid black",
    borderRadius: "24px",
    overflow: "hidden",
    boxSizing: "border-box",
    transform: "translateX(-50%)",
  },
};

interface Props {
  setDemoOpen: (open: boolean) => void;
  isDemoOpen: boolean;
}

export const EveDemo = (props: Props) => {
  const [messages, setMessages] = useState([]);
  const [isOffline, setOffline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const messageContainer = useRef(null);

  const URL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/api/eve"
      : "/api/eve";

  useEffect(() => {
    if (messageContainer && messageContainer.current) {
      messageContainer.current.scrollTop =
        messageContainer.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    try {
      setInterval(async () => {
        axios({
          method: "get",
          url: `${URL}/health-check`,
          timeout: 1000,
        })
          .then(() => {
            setOffline(false);
          })
          .catch((e) => {
            setOffline(true);
          });
      }, 3000);
    } catch (e) {}
  }, []);

  const askEve = async (message) => {
    if (loading || isOffline || message.length === 0) {
      return;
    }
    const time = Date.now();
    setLoading(true);
    setMessages((m) => [...m, { text: message, time }]);

    setMessage("");

    axios({
      method: "post",
      url: `${URL}/message-api`,
      data: {
        message: message,
      },
    })
      .then(({ data: answer }) => {
        setLoading(false);
        setMessages((m) => [...m, { text: answer, time: Date.now() }]);
      })
      .catch((e) => {
        setLoading(false);
        console.log(e);
      });
  };

  const closeModal = () => {
    props.setDemoOpen(false);
    setMessages([]);
    setMessage("");
  };

  return (
    <Modal
      style={customStyles}
      isOpen={props.isDemoOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
    >
      <div className={classes.transparent}>
        <div className={classes.container}>
          <div className={classes.header}>
            <img src="/images/eve/eve_chat_header.svg" width="160" alt="Eve" />
            <div
              className={classNames(classes.status, {
                [classes.offline]: isOffline,
              })}
            ></div>
            <Status loading={loading}>writing...</Status>

            <button onClick={closeModal} className={classes.button}>
              <img
                style={{ marginRight: "12px" }}
                src="/images/eve/eve_chat_close.svg"
                width="25"
                alt="Close"
              />
            </button>
          </div>
          <div className={classes.messageContainer} ref={messageContainer}>
            {messages.map((message, i) => (
              <ChatMessage isUser={i % 2 === 0} message={message}></ChatMessage>
            ))}
            {loading && (
              <ChatMessage
                loading={loading}
                isUser={false}
                message={{ text: "Loading...", time: Date.now() }}
              ></ChatMessage>
            )}
          </div>
          <div className={classes.form}>
            <input
              onKeyUp={(event) => {
                if (event.key === "Enter") {
                  askEve(message);
                }
              }}
              value={message}
              onChange={(v) => setMessage(v.target.value)}
              placeholder="Hello..."
              className={classes.input}
            />
            <button onClick={() => askEve(message)} className={classes.button}>
              <img src="/images/eve/eve_chat_arrow.svg"></img>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};
