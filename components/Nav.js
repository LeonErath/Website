import Link from "next/link";
import styled from "styled-components";

const NavStyles = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	@media (max-width: 480px) {
		margin: 8px;
	}
`;

const LinkDiv = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 767px) {
		display: none;
	}
`;

const StyledLink = styled.a`
	margin-left: 48px;
	font-weight: bold;
	padding: 8px;
	color: black;
	text-decoration: none;
	cursor: pointer;
	text-transform: uppercase;
	font-size: 0.9em;
	transition: all 0.1s ease;
	:hover {
		color: ${props => props.theme.darkblue};
	}
`;

const ContactDiv = styled.div`
	display: flex;
	flex-direction: row-reverse;
	width: 100%;
`;

const ContactButton = styled.div`
	padding: 14px 24px 14px 24px;
	background: ${props => props.theme.gradient};
	width: 100px;
	text-align: center;
	font-size: 1em;
	border-radius: 24px;
	font-weight: bold;
	color: white;
	text-transform: uppercase;
	cursor: pointer;
	box-shadow: 6px 6px 10px 1px rgba(0, 0, 0, 0.1);
	transition: all 0.2s ease;
	:hover {
		transform: scale(1.05);
	}
`;

const Nav = () => (
	<NavStyles>
		<LinkDiv>
			<Link href="/resume/Leon_Erath_Resume_2019.pdf">
				<StyledLink>Resume</StyledLink>
			</Link>
			<Link href="/#projects">
				<StyledLink>Projects</StyledLink>
			</Link>
			<Link href="/#about">
				<StyledLink>About</StyledLink>
			</Link>
		</LinkDiv>
		<ContactDiv>
			<Link href="/#contact">
				<ContactButton>Contact Me</ContactButton>
			</Link>
		</ContactDiv>
	</NavStyles>
);

export default Nav;
