import styled from "styled-components";

const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 90vh;
	background: no-repeat url("/static/contact_background.svg");
`;

const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 60%;
	line-height: 1.5;
`;

const Headline = styled.div`
	font-size: 4em;
`;

const Text = styled.div`
	margin-top: 44px;
	margin-bottom: 64px;
	font-size: 2em;
	width: 500px;

	color: #363636;
	font-weight: 300;
`;

const Contact = props => (
	<Div>
		<Container>
			<img width="200" src="/static/email.svg"></img>
			<div>
				<Headline>Have a Question?</Headline>
				<Text>
					I’m available for full contract work and would love to get in touch.
				</Text>
				<Container>
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
						<div>me@leonerath.de</div>
					</div>
				</Container>
			</div>
		</Container>
	</Div>
);

export default Contact;
