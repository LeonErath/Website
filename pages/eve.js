import React from "react";
import styled from "styled-components";
import Tech from "../components/svg/tech";
import Stack from "../components/svg/stack";
import Github from "../components/svg/github";
import Link from "next/link";

const Header = styled.div`
	width: 100%;
	height: 100vh;
	background-image: url("/eve_blob.svg");
	background-repeat: no-repeat;
	background-position-x: -600px;
	background-position-y: -300px;
	display: flex;
`;

const Container2 = styled.div`
	justify-content: center;
	display: flex;
	align-items: center;
	padding: 100px 100px 0px 100px;
`;
const Container = styled.div`
	margin-top: 140px;
	justify-content: center;
	display: flex;
	flex-direction: ${props => (props.reverse ? "row" : "row-reverse")};

	> div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 32px;
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const H1 = styled.h1`
	font-size: 26em;
	font-weight: 400;
	color: #2f2e41;
	margin: 0;
	margin-block-start: 0px;
	padding: 0;
`;

const H2 = styled.h1`
	font-size: 3em;
	font-weight: 400;
	color: #2f2e41;
`;

const Software = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: flex-start;

	& img {
		padding: 8px 16px 8px 8px;
	}
`;

const H3 = styled.h1`
	font-size: 2em;
	font-weight: bold;
	color: #2f2e41;
`;

const Text = styled.div`
	line-height: 2;
	font-size: 1.1em;
	font-weight: 400;
	color: #585858;
	width: 700px;
`;

const Banner = styled.div`
	margin-top: 200px;
	height: 400px;
	background: #2f2e41;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Button = styled.button`
	padding: 16px 30px 16px 30px;
	background: #2f2e41;
	text-align: center;
	font-size: 1em;
	border-radius: 30px;
	border: none;
	font-weight: bold;
	margin: 8px;
	color: white;
	text-transform: uppercase;
	cursor: pointer;
	box-shadow: 6px 6px 10px 1px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.05);
	}
`;

const ButtonOutline = styled.button`
	padding: 16px 30px 16px 30px;
	background: transparent;
	color: #2f2e41;
	text-align: center;
	font-size: 1em;
	border-radius: 30px;
	border-width: 3px;
	border-color: #2f2e41;
	font-weight: bold;
	margin: 8px;
	text-transform: uppercase;
	cursor: pointer;
	box-shadow: 6px 6px 10px 1px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.05);
	}
`;

const eve = props => {
	return (
		<div>
			<Header>
				<div style={{ paddingLeft: "140px", marginTop: "40px" }}>
					<H1>Eve</H1>
					<H2>A virtual dating assistant</H2>
					<div
						style={{
							display: "flex",
							flexDirection: "row",
							width: "100%",
							justifyContent: "flex-end"
						}}>
						<Button>Demo</Button>
						<Link href="https://github.com/AAA-Intelligence/eve/wiki/EVE-API">
							<a>
								<ButtonOutline>Documentation</ButtonOutline>
							</a>
						</Link>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						height: "100%",
						width: "100%"
					}}>
					<img
						src="/darting_assistant.svg"
						alt="assistant"
						width="600"></img>
				</div>
			</Header>

			<Container reverse>
				<div>
					<H3>Solving a Problem</H3>
					<Text>
						99% of Men don’t approach women, because they are waiting for the
						right moment. To remedy this, there are numerous dating coaches.
						Help in this form, however, is very expensive and overcomes the need
						for introverted people to seek help. In addition, it is very
						difficult to provide the counselling service for the many victims at
						any time anywhere in the world.
					</Text>
				</div>
				<ImageContainer>
					<img src="/dark_alley.svg" alt="dark_alley" width="400"></img>
				</ImageContainer>
			</Container>

			<Container>
				<div>
					<H3>Using artificial intelligence</H3>
					<Text>
						“Eve” gives the possibility of communicating with a chatbot through
						a chat client. The user interacts with a daily used and thus already
						known chat interface. The user receives answers in German, which are
						influenced by his messages. This allows him to practice what it
						would be like in reality to communicate with a real potential
						partner.
					</Text>
				</div>
				<ImageContainer>
					<img src="/opinion.svg" alt="dark_alley" width="400"></img>
				</ImageContainer>
			</Container>

			<Banner>
				<div style={{ marginRight: "100px" }}>
					<img src="/eve_second_logo.svg" alt="eve" width="200"></img>
				</div>
				<div>
					<H2 style={{ color: "white" }}>Available everywhere.</H2>
					<Text style={{ color: "white", width: "300px" }}>
						Chat with your AI wherever you want from the web or as an app.
					</Text>
					<Software>
						<img src="/brand/googlechrome.svg"></img>
						<img src="/brand/mozillafirefox.svg"></img>
						<img src="/brand/apple.svg"></img>
						<img src="/brand/android.svg"></img>
					</Software>
				</div>
			</Banner>

			<Container2>
				{" "}
				<Tech style={{ width: "90%" }}></Tech>
			</Container2>
			<Container reverse>
				<div>
					<H3>Our tech stack</H3>
					<Text>
						With the help of Google’s library tensorflow, we have developed a
						state of the art chatbot. We also use Go to provide a WebSocket
						connection to the bot. If you also want to integrate Eve into your
						platform, we offer a REST API.
					</Text>
					<div
						style={{
							marginTop: "16px",
							display: "flex",
							flexDirection: "row",
							width: "100%",
							justifyContent: "flex-start"
						}}>
						<Link href="https://github.com/AAA-Intelligence/eve/wiki/EVE-API">
							<a>
								<ButtonOutline>Documentation</ButtonOutline>
							</a>
						</Link>
						<Link href="https://github.com/AAA-Intelligence/eve">
							<a>
								<Github fill="#000000" style={{ width: "50px" }}></Github>
							</a>
						</Link>
					</div>
				</div>
				<ImageContainer>
					<Stack></Stack>
				</ImageContainer>
			</Container>
			<Container></Container>
		</div>
	);
};

export default eve;
