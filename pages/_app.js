import App, { Container } from "next/app";
import * as Sentry from "@sentry/browser";
import Page from "../components/Page";

Sentry.init({
	dsn: "https://6c61dd2c70a4401ebce9ba477fcd6542@sentry.io/1539721"
});

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Container>
				<Page>
					<Component />
				</Page>{" "}
			</Container>
		);
	}
}

export default MyApp;
