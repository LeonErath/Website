import App from "next/app";
import * as Sentry from "@sentry/browser";
import Page from "../components/Page";

class MyApp extends App {
	render() {
		const { Component } = this.props;
		return (
			<Page>
				<Component />
			</Page>
		);
	}
}

export default MyApp;
