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
	cursor: pointer;
`;

const StyledHeader = styled.header`
	position: sticky;
	top: 0;
	z-index: 1;
	background: white;
	display: flex;
	padding-top: 10px;
	padding-bottom: 10px;
	padding-left: 200px;
	padding-right: 200px;
	flex-direction: row;
	box-shadow: 0 10px 20px 0
		${props => (props.shadow ? "rgb(0,0,0,0)" : "rgba(0,0,0,.05)")};
	@media (min-width: 320px) and (max-width: 480px) {
		padding-left: 0px;
		padding-right: 0px;
	}
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<StyledHeader shadow={this.props.scrollPosition === 0}>
				<Logo>
					<Link href="/">
						<img src="static/logo.png" width="80"></img>
					</Link>
				</Logo>

				<Nav />
			</StyledHeader>
		);
	}
}

export default Header;
