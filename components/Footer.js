import Link from "next/link";
import styled from "styled-components";

const StyledFooter = styled.div`
	width: auto;
	display: flex;
	justify-content: center;
	align-content: center;
	background: #2d313c;
	padding: 16px;
	margin-top: 16px;
	color: white;
`;

const Footer = () => (
	<StyledFooter>Leon Erath © 2019 - All Rights Reserved</StyledFooter>
);

export default Footer;
