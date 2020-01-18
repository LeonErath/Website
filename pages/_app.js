import App from "next/app";
import * as Sentry from "@sentry/browser";
import Page from "../components/Page";

if (process.env.NODE_ENV !== "development") {
	Sentry.init({
		dsn: "https://892dfd2bab7342319ad690cef5779988@sentry.io/1886915"
	});
}

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
