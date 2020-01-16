import styled from "styled-components";

const Div = styled.div`
	margin: 30px 30px 30px 30px;
	width: 80%;
	display: flex;
	flex-direction: column;
`;

const Div2 = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
`;

const Div3 = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row-reverse;
`;

const Progress = styled.div`
	border-radius: 10px;
	height: 6px;
	width: 100%;
	max-width: 360px;
	display: flex;
	justify-content: flex-start;
	background: ${props => props.theme.lightblue};
`;

const Bar = styled.div`
	border-radius: 10px;
	height: 6px;
	width: ${props => props.progress}%;
	background: ${props => props.theme.blue};
`;

const Name = styled.div`
	width: 100px;
`;
const Time = styled.div`
	font-size: 0.9em;
	color: ${props => props.theme.gray};
`;

const Skill = props => (
	<Div>
		<Div2>
			<Name>{props.name}</Name>
			<div style={{ display: "block", width: "100%", marginLeft: "8px" }}>
				<Progress>
					<Bar progress={props.progress}></Bar>
				</Progress>
			</div>
		</Div2>
		<Div3>
			<Time>{props.time}</Time>
		</Div3>
	</Div>
);

export default Skill;
