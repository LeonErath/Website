import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import moment from "moment";
import Link from "next/link";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (max-width: 1024px) {
		margin-top: 100px;
	}

	img {
		object-fit: contain;
		max-width: 400px;
	}
`;

const Info = styled.div`
	margin-top: 32px;
	display: flex;
	-webkit-font-smoothing: antialiased;
	display: flex;
	align-items: center;
	img {
		transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
		:hover {
			transform: scale(1.2);
		}
	}
`;

const Text = styled.div`
	color: #2d2d2d;
	font-size: 18px;
	max-width: 400px;
	line-height: 28px;
	margin-left: 8px;
`;

const GITHUB_STATS = gql`
	{
		user(login: "leonerath") {
			createdAt
			contributionsCollection(
				to: "2020-04-01T01:01:00"
				from: "2019-05-01T01:01:00"
			) {
				hasActivityInThePast
				totalCommitContributions
				totalRepositoryContributions
				totalRepositoriesWithContributedCommits
			}
		}
	}
`;

const Github = () => {
	const { loading, error, data } = useQuery(GITHUB_STATS);

	if (loading || error) {
		return (
			<Container>
				<img src="/developer.svg"></img>
				{loading && (
					<Info>
						<Text>
							<span>Loading...</span>
						</Text>
					</Info>
				)}
			</Container>
		);
	}
	const {
		user: {
			createdAt,
			contributionsCollection: {
				totalCommitContributions: commits,
				totalRepositoriesWithContributedCommits: repos
			}
		}
	} = data;

	return (
		<Container>
			<img src="/developer.svg"></img>
			<Info>
				<Link href="https://github.com/LeonErath">
					<a target="_blank">
						<img
							width="40"
							src="/github-icon.svg"
							style={{ margin: "8px" }}></img>
					</a>
				</Link>
				<Text>
					<span>
						I joined Github <b>{moment(createdAt).fromNow()}</b> and commited{" "}
						<b>{commits}</b> times in <b>{repos}</b> different repositories in
						the last year.
					</span>
				</Text>
			</Info>
		</Container>
	);
};

export default Github;
