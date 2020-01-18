// next.config.js#// next.config.js
require("dotenv").config();

const withCSS = require("@zeit/next-css");
const withOffline = require("next-offline");

const nextConfig = {};

module.exports = withOffline(withCSS(nextConfig));
