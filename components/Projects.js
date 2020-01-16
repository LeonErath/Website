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

const Backtext = styled.div`
	position: absolute;
	font-size: 6em;
	color: ${props => props.color};
	font-weight: bold;
	@media (min-width: 320px) and (max-width: 1024px) {
		font-size: 5em;
	}
`;

const ProjectDiv = styled.div`
	width: 100%;
	margin-top: 100px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: repeat(4, 400px);

	@media (max-width: 767px) {
		grid-template-columns: 1fr;
		grid-template-rows: repeat(7, 400px);
	}
`;

const Projects = props => (
	<ProjectDiv>
		<Item style={{ background: "#F4F4F4" }}>
			<Link href="/verifica">
				<img width="130" src="/verifica.png"></img>
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
					<img width="40" src="/react.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#505050" }}>
			<Link href="/eve">
				<img width="400" src="/eve.png"></img>
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
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/python.svg"></img>
					<img width="40" src="/gopher.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#344A5F" }}>
			<Link href="https://niklaskorz.github.io/audio3d/">
				<a target="_blank">
					<img width="400" src="/audio3d.png"></img>
				</a>
			</Link>
			<Card>
				<Card.Header>
					<div>3 people</div>
					<div>6 Months</div>
				</Card.Header>
				<Card.Main>
					<Card.Background>audio only</Card.Background>
					<Card.Foreground>
						<Link href="https://niklaskorz.github.io/audio3d/">
							<a
								target="_blank"
								style={{ color: "black", textDecoration: "none" }}>
								<Card.Title>Audio 3D</Card.Title>
							</a>
						</Link>
						<Link href="https://github.com/niklaskorz/audio3d">
							<a target="_blank">
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/react.svg"></img>
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
					<Backtext color="#AA4D4D" style={{ transform: "rotate(-3deg)" }}>
						Pineapple
					</Backtext>
					<img
						width="400"
						src="/pineapple.png"
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
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/android-icon.svg"></img>
					<img width="40" src="/brand/apple.svg"></img>
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
					<Backtext
						color="#202C77"
						style={{
							transform: "rotate(-3deg)"
						}}>
						Journalism
					</Backtext>
					<img width="200" src="/jf.png" style={{ position: "absolute" }}></img>
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
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/android-icon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
		<Item style={{ background: "#F4F4F4" }}>
			<Link href="t2m">
				<img width="400" src="/t2m.png"></img>
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
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" height="60" src="/java.svg"></img>
				</Card.Stack>
			</Card>
		</Item>

		<Item style={{ background: "#B20741" }}>
			<Link href="watchlist">
				<div
					style={{
						position: "relative",
						display: "flex",
						justifyContent: "center",
						alignItems: "center"
					}}>
					<Backtext
						color="#860430"
						style={{
							transform: "rotate(2deg)"
						}}>
						Watchlist
					</Backtext>
					<img
						width="200"
						src="/watchlist.png"
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
								<img src="/github-icon.svg"></img>
							</a>
						</Link>
					</Card.Foreground>
				</Card.Main>
				<Card.Stack>
					<img width="40" src="/android-icon.svg"></img>
				</Card.Stack>
			</Card>
		</Item>
	</ProjectDiv>
);

export default Projects;
