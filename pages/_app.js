import App from "next/app";
import * as Sentry from "@sentry/browser";
import Page from "../components/Page";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createHttpLink } from "apollo-link-http";
import fetch from "node-fetch";

if (process.env.NODE_ENV !== "development") {
	Sentry.init({
		dsn: "https://6c61dd2c70a4401ebce9ba477fcd6542@sentry.io/1539721"
	});
}

const cache = new InMemoryCache();
const GITHUB_BASE_URL = "https://api.github.com/graphql";

const client = new ApolloClient({
	link: createHttpLink({
		uri: GITHUB_BASE_URL,
		headers: {
			authorization: `Bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`
		},
		fetch: fetch
	}),
	cache
});

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<ApolloProvider client={client}>
				<Page>
					<Component />
				</Page>
			</ApolloProvider>
		);
	}
}

export default MyApp;
