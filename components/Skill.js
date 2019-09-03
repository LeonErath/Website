import styled from "styled-components";

const Div = styled.div`
	margin: 30px 30px 30px 30px;
	width: 460px;
	display: flex;
	flex-direction: column;
`;

const Div2 = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Div3 = styled.div`
	display: flex;
	flex-direction: row-reverse;
`;

const Progress = styled.div`
	border-radius: 10px;
	height: 6px;
	width: 360px;
	background: ${props => props.theme.lightblue};
`;

const Bar = styled.div`
	border-radius: 10px;
	height: 6px;
	width: ${props => Math.min(props.progress * 360, 360)}px;
	background: ${props => props.theme.blue};
`;

const Name = styled.div``;
const Time = styled.div`
	font-size: 0.9em;
	color: ${props => props.theme.gray};
`;

const Skill = props => (
	<Div>
		<Div2>
			<Name>{props.name}</Name>
			<div style={{ display: "block" }}>
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
