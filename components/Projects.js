import styled from "styled-components";
import Link from "next/link";
import Card from "./Card/";

const Item = styled.div`
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	:hover {
		div {
			opacity: 1;
		}
	}
`;

const ProjectDiv = styled.div`
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(4, 400px);

	@media (min-width: 320px) and (max-width: 480px) {
		grid-template-columns: 1fr;
		grid-template-rows: 400px 400px 400px 400px 400px 400px;
	}
`;

const Projects = props => (
	<ProjectDiv>
		<Item style={{ background: "#F4F4F4" }}>
			<Link href="/verifica">
				<img width="130" src="static/verifica.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>solo project</div>
					<div>3 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>spellcheck</Card.Background>
					<Card.Foreground>
						<Card.Title>verifica</Card.Title>

						<div>(coming soon)</div>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/react.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#505050" }}>
			<Link href="/eve">
				<img width="400" src="static/eve.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>3 people</div>
					<div>3 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>chatbot</Card.Background>
					<Card.Foreground>
						<Link href="/eve">
							<Card.Title>Eve</Card.Title>
						</Link>
						<Link href="https://github.com/AAA-Intelligence/eve">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/python.svg"></img>
					<img width="40" src="/static/gopher.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#344A5F" }}>
			<Link href="audio3d">
				<img width="400" src="static/audio3d.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>3 people</div>
					<div>6 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>audio only</Card.Background>
					<Card.Foreground>
						<Link href="audio3d">
							<Card.Title>Audio 3D</Card.Title>
						</Link>
						<Link href="https://github.com/niklaskorz/audio3d">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/react.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#CE5E5E" }}>
			<Link href="pineapple">
				<div
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					<div
						style={{
							transform: "rotate(-3deg)",
							position: "absolute",
							fontSize: "8em",
							color: "#AA4D4D",
							fontWeight: "bold"
						}}>
						Pineapple
					</div>
					<img
						width="480"
						src="static/pineapple.png"
						style={{ position: "absolute" }}></img>
				</div>
			</Link>
			<Card>
				<Card.Header>
					<div>3 people</div>
					<div>1 year</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>School 4.0</Card.Background>
					<Card.Foreground>
						<Link href="pineapple">
							<Card.Title>Pineapple</Card.Title>
						</Link>
						<Link href="https://github.com/LeonErath/Pineapple">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/android-icon.svg"></img>
					<img width="40" src="/static/brand/apple.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#303F9F" }}>
			<Link href="journalismfuture">
				<div
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					<div
						style={{
							transform: "rotate(-3deg)",
							position: "absolute",
							fontSize: "8em",
							color: "#202C77",
							fontWeight: "bold"
						}}>
						Journalism
					</div>
					<img
						width="200"
						src="static/jf.png"
						style={{ position: "absolute" }}></img>
				</div>
			</Link>
			<Card>
				<Card.Header>
					<div>Hackathon</div>
					<div>3 days</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>Journalism</Card.Background>
					<Card.Foreground>
						<Link href="journalismfuture">
							<Card.Title>Journalism Future</Card.Title>
						</Link>
						<Link href="https://github.com/JournalismFuture/Journalism-Future-App">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/android-icon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#F4F4F4" }}>
			<Link href="t2m">
				<img width="400" src="static/t2m.png"></img>
			</Link>
			<Card>
				<Card.Header>
					<div>5 people</div>
					<div>3 months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>generation</Card.Background>
					<Card.Foreground>
						<Link href="t2m">
							<Card.Title>Text2Music</Card.Title>
						</Link>
						<Link href="https://github.com/AudiophileDev/T2M">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" height="60" src="/static/java.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<div></div>
		<Item style={{ background: "#B20741" }}>
			<Link href="watchlist">
				<div
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					<div
						style={{
							transform: "rotate(2deg)",
							position: "absolute",
							fontSize: "8em",
							color: "#860430",
							fontWeight: "bold"
						}}>
						Watchlist
					</div>
					<img
						width="200"
						src="static/watchlist.png"
						style={{ position: "absolute" }}></img>
				</div>
			</Link>
			<Card>
				<Card.Header>
					<div>solo project</div>
					<div>6 months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>Movies</Card.Background>
					<Card.Foreground>
						<Link href="watchlist">
							<Card.Title>Watchlist</Card.Title>
						</Link>
						<Link href="https://github.com/LeonErath/Watchlist">
							<a target="_blank">
								<img src="/static/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/static/android-icon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
	</ProjectDiv>
);

export default Projects;
