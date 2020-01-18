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
	display: flex;
	padding: 10px;
	flex-direction: row;
	transition: background-color 0.3s linear;
`;

const Header = props => {
	return (
		<div style={{ position: "absolute", width: "100vw" }}>
			<StyledHeader>
				<div>
					<Logo>
						<Link href="/">
							<img src="/logo.png" width="80"></img>
						</Link>
					</Logo>

					<Nav />
				</div>
			</StyledHeader>
		</div>
	);
};

export default Header;
