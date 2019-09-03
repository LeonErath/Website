import styled, { keyframes } from "styled-components";
import Skill from "../components/Skill";
import Projects from "../components/Projects";
import About from "../components/About";
import Contact from "../components/Contact";

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Container = styled.div`
	width: 80%;
	@media (min-width: 1025px) and (max-width: 1280px) {
	}
	@media (min-width: 320px) and (max-width: 1024px) {
		width: 100%;
	}
`;

const TextContainer = styled.div`
	min-width: 400px;
	h1 {
		font-size: 2.6em;
		font-weight: 400;
		color: black;
	}
	h2 {
		width: 400px;
		line-height: 1.5;
		font-weight: 400;
		font-size: 1.4em;
		color: ${props => props.theme.gray};
	}
	@media (min-width: 320px) and (max-width: 767px) {
		text-align: center;
	}
`;

const LandingPage = styled.div`
	height: 86vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap-reverse;
	justify-content: space-between;
	align-items: center;

	padding-left: 32px;
	padding-right: 32px;
	@media (min-width: 320px) and (max-width: 1024px) {
		justify-content: center;
	}
`;
const MoveUpDown = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(-20px); }
`;
const ScrollDown = styled.div`
	height: 6vh;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	animation: ${MoveUpDown} 0.6s infinite alternate;
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: row-reverse;

	img {
		object-fit: contain;
		max-width: 400px;
		@media (min-width: 320px) and (max-width: 1024px) {
			max-width: 300px;
		}
	}
`;
const Skills = styled.div`
	height: 86vh;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	@media (min-width: 320px) and (max-width: 1024px) {
		justify-content: center;
	}
`;

const SkillContainer = styled.div``;

const Headline = styled.div`
	margin-top: 30px;
	width: 100%;
	text-align: center;
	font-size: 2em;
`;

const Tools = styled.div`
	margin-top: 60px;
	width: 460px;
	margin: 30px 30px 30px 30px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const App = () => (
	<Root>
		<Container>
			<LandingPage>
				<TextContainer>
					<h1>Hey, I’m Leon 👋</h1>
					<h2>I’m a Fullstack Developer based in Düsseldorf, Germany.</h2>
				</TextContainer>
				<ImageContainer>
					<img src="/static/profile.png"></img>
				</ImageContainer>
			</LandingPage>
			<ScrollDown>
				<img src="/static/scroll.svg"></img>
			</ScrollDown>

			<Headline>Skills & Tools</Headline>
			<Skills>
				<ImageContainer style={{ flexDirection: "row" }}>
					<img src="/static/developer.svg"></img>
				</ImageContainer>
				<SkillContainer>
					<Skill name="JavaScript" time="2 years" progress="0.7" />
					<Skill name="CSS/HTML" time="2 years" progress="0.5" />
					<Skill name="Java" time="4 years" progress="0.9" />
					<Skill name="React" time="2 years" progress="0.8" />
					<Skill name="CI/CD" time="1 years" progress="0.5" />
					<Skill name="Docker" time="1 years" progress="0.8" />
					<Tools>
						<div>Tools</div>
						<div style={{ display: "flex", alignItems: "center" }}>
							<img
								width="40"
								src="/static/github-icon.svg"
								style={{ margin: "8px" }}></img>
							<img
								width="40"
								src="/static/android-icon.svg"
								style={{ margin: "8px" }}></img>
							<img
								width="40"
								src="/static/terminal.svg"
								style={{ margin: "8px" }}></img>
							<img
								width="40"
								src="/static/visual-studio-code.svg"
								style={{ margin: "8px" }}></img>
						</div>
					</Tools>
				</SkillContainer>
			</Skills>
			<Headline id="projects">Projects</Headline>

			<Projects />

			<Headline id="about">About Me</Headline>

			<About />

			<div id="contact"></div>
			<Contact></Contact>
		</Container>
	</Root>
);

export default App;
