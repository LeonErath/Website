import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { createHttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const GITHUB_BASE_URL = "https://api.github.com/graphql";

export const apolloClient = new ApolloClient({
  link: createHttpLink({
    uri: GITHUB_BASE_URL,
    headers: {
      authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
    fetch: fetch,
  }),
  cache,
});
