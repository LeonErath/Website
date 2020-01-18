// next.config.js#// next.config.js
require("dotenv").config();

const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = {
	env: {
		REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
			process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
	}
};

module.exports = withOffline(withCSS(nextConfig));
