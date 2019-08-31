import Head from "next/head";

const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<link rel="shortcut icon" href="/static/favicon.ico" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/static/apple-touch-icon.png"></link>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/static/favicon-32x32.png"></link>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/static/favicon-16x16.png"></link>
		<link rel="manifest" href="/static/site.webmanifest"></link>
		<link
			rel="mask-icon"
			href="/static/safari-pinned-tab.svg"
			color="#5bbad5"></link>
		<meta name="msapplication-TileColor" content="#da532c" />
		<meta name="theme-color" content="#ffffff" />
		<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
		<title>Leon Erath</title>
	</Head>
);

export default Meta;
