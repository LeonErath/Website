import styled from "styled-components";
import Link from "next/link";

const Div = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
	align-items: center;
	height: 90vh;
	background-image: url("/contact_background.svg");
	background-repeat: no-repeat;

	background-position: center;
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	line-height: 1.5;
	width: 100%;
	div {
	}
	img {
		margin: 32px;
		min-width: 30%;
		max-width: 200px;
		max-height: 200px;
	}
`;

const Container2 = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`;

const Headline = styled.div`
	font-size: 3em;
	@media (min-width: 768px) and (max-width: 1024px) {
		font-size: 2em;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 2em;
	}
`;

const Text = styled.div`
	margin-top: 44px;
	margin-bottom: 64px;
	font-size: 2em;
	max-width: 500px;

	color: #363636;
	font-weight: 300;
	@media (min-width: 768px) and (max-width: 1024px) {
		font-size: 1.4em;
		max-width: 300px;
	}
	@media (min-width: 320px) and (max-width: 767px) {
		font-size: 1.4em;
		max-width: 300px;
	}
`;

const Contact = props => (
	<Div>
		<Container>
			<img width="200" src="/email.svg"></img>
			<div>
				<Headline>Have a Question?</Headline>
				<Text>
					I’m available for full contract work and would love to get in touch.
				</Text>
				<Container2>
					<div>
						<div>
							<b>Telephone</b>
						</div>
						<div>+49 176 8121 5974</div>
					</div>
					<div>
						<div>
							<b>Email</b>
						</div>
						<div>
							<Link href="mailto:contact@erath.dev">
								<a>contact@erath.dev</a>
							</Link>
						</div>
					</div>
				</Container2>
			</div>
		</Container>
	</Div>
);

export default Contact;
