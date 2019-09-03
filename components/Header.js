import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import Router from "next/router";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => {
	NProgress.start();
};

Router.onRouteChangeComplete = () => {
	NProgress.done();
};

Router.onRouteChangeError = () => {
	NProgress.done();
};

const Logo = styled.div`
	width: 100px;
	cursor: pointer;
`;

const StyledHeader = styled.div`
	> div {
		width: 80%;
		display: flex;
		flex-direction: row;
	}
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 1;
	background: white;
	display: flex;
	padding: 10px;

	flex-direction: row;
	box-shadow: 0 10px 20px 0
		${props => (props.shadow ? "rgb(0,0,0,0)" : "rgba(0,0,0,.05)")};
	@media (min-width: 320px) and (max-width: 1024px) {
		width: 100%;
	}
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<StyledHeader shadow={this.props.scrollPosition === 0}>
				<div>
					<Logo>
						<Link href="/">
							<img src="static/logo.png" width="80"></img>
						</Link>
					</Logo>

					<Nav />
				</div>
			</StyledHeader>
		);
	}
}

export default Header;
