import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import moment from "moment";
import classes from "./Github.module.scss";

const GITHUB_STATS = gql`
  {
    user(login: "leonerath") {
      createdAt
      contributionsCollection(
        to: "2021-01-01T01:01:00"
        from: "2020-01-01T01:01:00"
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
      <div className={classes.container}>
        <img src="/illustrations/coding.svg"></img>

        <div className={classes.text}>
          <span>
            I love the web and my work is focused around building complex web
            and desktop apps. Topics such as accessibility and testing are
            particularly important to me.
          </span>
        </div>
      </div>
    );
  }
  const {
    user: {
      createdAt,
      contributionsCollection: {
        totalCommitContributions: commits,
        totalRepositoriesWithContributedCommits: repos,
      },
    },
  } = data;

  return (
    <div className={classes.container}>
      <img src="/illustrations/coding.svg"></img>

      <div className={classes.text}>
        <span>
          I love the web and my work is focused around building complex web and
          desktop apps. Topics such as accessibility and testing are
          particularly important to me.
        </span>
        <br />
        <span>
          I joined{" "}
          <a href="https://github.com/LeonErath" target="_blank">
            Github
          </a>{" "}
          <b>{moment(createdAt).fromNow()}</b> and commited <b>{commits}</b>{" "}
          times in <b>{repos}</b> different repositories this year.
        </span>
      </div>
    </div>
  );
};

export default Github;
