import Modal from "react-modal";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileContainer = styled.div`
	position: absolute;
	top: 16px;
	left: 16px;
	display: flex;
	width: 100%;
	justify-content: flex-start;

	img {
		border-radius: 50%;
		width: 80%;
		max-width: 120px;
		object-fit: cover;
	}
`;

const Header = styled.div`
	height: 60px;
	position: relative;
	border-bottom: 1px solid #d9d9d9;
	display: flex;
	justify-content: center;
	align-items: center;

	div {
		font-size: 40px;
	}
`;

const MessageContainer = styled.div`
	box-sizing: border-box;
	overflow-y: scroll;
	margin-top: 60px;
	flex-grow: 1;
	margin-left: 16px;
	margin-right: 16px;
	width: 90%;
	display: flex;
	flex-direction: column;
`;

const Message = styled.div`
	margin-top: 16px;
	width: 100%;
	display: flex;
	justify-content: ${props => (props.user ? "flex-end" : "flex-start")};
	div {
		background: ${props => (props.user ? "#518CE0" : "#EBEDF2")};
		color: ${props => (props.user ? "white" : "#505157")};
	}
`;

const Bubble = styled.div`
	padding: 8px;
	border-radius: 4px;
	font-size: 20px;
`;

const Forms = styled.div`
	margin: 16px;
	display: flex;
	align-items: center;
	height: 50px;
`;

const Input = styled.input`
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	font-variant: tabular-nums;
	list-style: none;
	font-feature-settings: "tnum";
	position: relative;
	display: inline-block;
	width: 100%;
	height: 32px;
	padding: 4px 11px;
	color: rgba(0, 0, 0, 0.65);
	font-size: 14px;
	line-height: 1.5;
	background-color: #fff;
	background-image: none;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	transition: all 0.3s;
`;

const Button = styled.button`
	margin-left: 4px;
	background-image: url("/images/eve/arrow_right.svg");
	background-size: cover; /* <------ */
	background-repeat: no-repeat;
	background-position: center center;
	border: 1px solid transparent;
	box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	user-select: none;
	touch-action: manipulation;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #fff;
	border-color: #d9d9d9;
	display: block;
	transition: all cubic-bezier(0.075, 0.82, 0.165, 1);
	:hover {
		border-color: #5d5d5d;
	}
`;

const customStyles = {
	content: {
		padding: "0",
		width: "90%",
		height: "80%",
		maxWidth: "600px",
		display: "flex",
		flexDirection: "column",
		top: "50%",
		left: "50%",
		right: "auto",
		overflow: "hidden",
		boxSizing: "border-box",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};
const EveDemo = props => {
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	const URL =
		process.env.NODE_ENV === "development"
			? "http://localhost:3001/message-api"
			: "https://eve.erath.dev/message-api";

	const askEve = async message => {
		setLoading(true);
		setMessages([...messages, message]);
		setMessage("");

		axios({
			method: "post",
			url: URL,
			data: {
				message: message
			}
		})
			.then(({ data: answer }) => {
				setLoading(false);

				setMessages([...messages, message, answer]);
			})
			.catch(e => {
				setLoading(false);
				console.log(e);
			});
	};

	return (
		<Modal
			style={customStyles}
			isOpen={props.isDemoOpen}
			onRequestClose={() => props.setDemoOpen(false)}
			contentLabel="Example Modal">
			<Header>
				<ProfileContainer>
					<img src="/images/eve/smile2.jpg"></img>
				</ProfileContainer>
				<div>Eve</div>
			</Header>
			<MessageContainer>
				{messages.map((message, i) => (
					<Message user={i % 2 === 0}>
						<Bubble> {message}</Bubble>
					</Message>
				))}
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
					placeholder="hello"></Input>
				<Button onClick={() => askEve(message)}></Button>
			</Forms>
		</Modal>
	);
};

export default EveDemo;
