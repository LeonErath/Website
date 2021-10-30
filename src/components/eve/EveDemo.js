import Modal from "react-modal";
import styled, { keyframes } from "styled-components";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ChatMessage from "./ChatMessage";

const fadeIn = keyframes`
  from {
    transform: scale(0.3);
	opacity: 0;
  }

  to {
    transform: scale(1);
	opacity: 1;
	visibility: visible;
  }
`;

const MessageContainer = styled.div`
	box-sizing: border-box;
	overflow-y: auto;
	flex-grow: 1;
	height: 100px;
	margin: 14px;
	display: flex;
	flex-direction: column;
	scroll-behavior: smooth;
`;

const Header = styled.div`
	display: flex;
	flex-direction: row;
	position: relative;
	justify-content: space-between;
	margin: 8px;
`;

const Image = styled.img`
	visibility: hidden;
	animation: ${fadeIn} 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) 0.3s 1;
	animation-fill-mode: forwards;
`;

const StatusBubble = styled.div`
	height: 14px;
	width: 14px;
	border-radius: 50%;
	transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	background: ${props => (props.online ? "#4CB0B9" : "#B94C4C")};
	position: absolute;
	top: 46px;
	left: 130px;
	visibility: hidden;
	animation: ${fadeIn} 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) 0.5s 1;
	animation-fill-mode: forwards;
`;

const Status = styled.div`
	height: 14px;
	width: 14px;
	position: absolute;
	top: 60px;
	left: 55px;
	color: gray;
	transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	opacity: ${props => (props.loading ? 1 : 0)};
	transform: ${props => (props.loading ? "scale(1)" : "scale(0.5)")};
`;

const Forms = styled.div`
	margin: 16px;
	display: flex;
	align-items: center;
	background: white;
	height: 50px;
	box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
	border-radius: 25px;
	visibility: hidden;
	animation: ${fadeIn} 0.6s cubic-bezier(0.075, 0.82, 0.165, 1) 0.7s 1;
	animation-fill-mode: forwards;
`;

const Input = styled.input`
	box-sizing: border-box;
	margin-left: 8px;
	padding: 8px;
	font-variant: tabular-nums;
	list-style: none;
	font-feature-settings: "tnum";
	position: relative;
	display: inline-block;
	width: 100%;
	height: 50px;
	color: #2f2a41;
	font-size: 18px;
	line-height: 1.5;
	background-color: transparent;
	background-image: none;
	border: 0px solid #2f2c41;
	transition: all 0.3s;
	:focus {
		outline: none;
	}
`;

const Transparent = styled.div`
	background-color: rgba(250, 250, 250, 0.3);
	border-radius: 24px;
	padding: 8px;
	display: flex;
	flex-grow: 1;
`;

const Container = styled(Transparent)`
	background: #faffff;
	overflow: hidden;
	flex-direction: column;
`;

const ImageButton = styled.div`
	padding-right: 4px;
	cursor: pointer;
	visibility: hidden;
	animation: ${fadeIn} 0.6s cubic-bezier(0.075, 0.82, 0.165, 1)
		${props => props.delay} 1;
	animation-fill-mode: forwards;
	display: flex;
	justify-content: center;
	align-items: center;
	img {
		transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
		:hover {
			transform: scale(0.7);
		}
	}
`;

const customStyles = {
	overlay: {
		backgroundColor: "rgba(0, 0, 0, 0.3)"
	},
	content: {
		padding: "8px",
		width: "94%",
		height: "94%",
		maxHeight: "94%",
		maxWidth: "500px",
		display: "flex",
		backgroundColor: "rgba(250, 250, 250, 0.3)",
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "cetner",
		top: "50%",
		left: "50%",
		right: "auto",
		border: "0px solid black",
		borderRadius: "24px",
		overflow: "hidden",
		boxSizing: "border-box",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};
const EveDemo = props => {
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
					timeout: 1000
				})
					.then(() => {
						setOffline(false);
					})
					.catch(e => {
						setOffline(true);
					});
			}, 3000);
		} catch (e) {}
	}, []);

	const askEve = async message => {
		if (loading || isOffline || message.length === 0) {
			return;
		}
		const time = Date.now();
		setLoading(true);
		setMessages(m => [...m, { text: message, time }]);

		setMessage("");

		axios({
			method: "post",
			url: `${URL}/message-api`,
			data: {
				message: message
			}
		})
			.then(({ data: answer }) => {
				setLoading(false);
				setMessages(m => [...m, { text: answer, time: Date.now() }]);
			})
			.catch(e => {
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
			contentLabel="Example Modal">
			<Transparent>
				<Container>
					<Header>
						<Image
							src="/images/eve/eve_chat_header.svg"
							width="160"
							alt="Eve"></Image>
						<StatusBubble online={!isOffline}></StatusBubble>
						<Status loading={loading}> writing...</Status>

						<ImageButton delay={"1.2s"}>
							<img
								onClick={closeModal}
								style={{ marginRight: "12px" }}
								src="/images/eve/eve_chat_close.svg"
								width="25"
								alt="Close"></img>
						</ImageButton>
					</Header>
					<MessageContainer ref={messageContainer}>
						{messages.map((message, i) => (
							<ChatMessage
								isUser={i % 2 === 0}
								message={message}
								isLast={i === messages.length - 1}></ChatMessage>
						))}
						{loading && (
							<ChatMessage
								loading={loading}
								isUser={false}
								message={{ text: "Loading...", time: Date.now() }}
								isLast={false}></ChatMessage>
						)}
					</MessageContainer>
					<Forms>
						<Input
							onKeyUp={event => {
								if (event.key === "Enter") {
									askEve(message);
								}
							}}
							value={message}
							onChange={v => setMessage(v.target.value)}
							placeholder="Hello..."></Input>
						<ImageButton delay={"1s"}>
							<img
								onClick={() => askEve(message)}
								src="/images/eve/eve_chat_arrow.svg"></img>
						</ImageButton>
					</Forms>{" "}
				</Container>
			</Transparent>
		</Modal>
	);
};

export default EveDemo;
