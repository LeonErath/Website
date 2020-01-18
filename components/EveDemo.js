import Modal from "react-modal";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileContainer = styled.div`
	position: absolute;
	top: 10px;
	left: 20px;
	display: flex;
	width: 100%;
	justify-content: flex-start;

	img {
		border-radius: 50%;
		width: 80%;
		max-width: 60px;
		max-height: 60px;

		object-fit: cover;
	}
`;

const StatusBubble = styled.div`
	height: 12px;
	width: 12px;
	border: 3px solid #2f2b41;
	border-radius: 50%;
	background: ${props => (props.online ? "#00E30A" : "#E3000A")};
	position: absolute;
	top: 58px;
	left: 58px;
`;

const Header = styled.div`
	height: 80px;
	position: relative;

	background: #2f2c41;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
const Name = styled.div`
	margin-left: 90px;
	font-size: 40px;
	color: white;
`;

const Status = styled.div`
	font-size: 14px;
	margin-left: 8px;
	color: #e0e0e0;
`;

const MessageContainer = styled.div`
	box-sizing: border-box;
	overflow-y: scroll;
	margin-top: 16px;
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
		background: ${props => (props.user ? "#31ABB5" : "#F4F4F4")};
		color: ${props => (props.user ? "white" : "#2F2B41")};
	}
`;

const Bubble = styled.div`
	padding: 8px;
	border-radius: 8px;
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
	font-size: 16px;
	line-height: 1.5;
	background-color: #fff;
	background-image: none;
	border: 1px solid #2f2c41;
	border-radius: 4px;
	transition: all 0.3s;
	:focus {
		outline: none;
	}
`;

const Button = styled.button`
	margin-left: 4px;
	background-image: url("/images/eve/arrow_right.svg");
	background-size: cover; /* <------ */
	background-repeat: no-repeat;
	background-position: center center;
	cursor: pointer;
	transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
	user-select: none;
	touch-action: manipulation;
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background-color: #fff;
	border-color: #fff;
	display: block;
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
		borderRadius: "20px",
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

	const URL =
		process.env.NODE_ENV === "development"
			? "http://localhost:3001/api/eve"
			: "/api/eve";

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
		if (loading || isOffline) {
			return;
		}
		setLoading(true);
		setMessages([...messages, message]);
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
				<StatusBubble online={!isOffline}></StatusBubble>
				<Name>Eve</Name>
				{loading && <Status>writing...</Status>}
				{isOffline && <Status>offline</Status>}
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
					placeholder="Hello..."></Input>
				<Button onClick={() => askEve(message)}></Button>
			</Forms>
		</Modal>
	);
};

export default EveDemo;
