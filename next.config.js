// next.config.js#// next.config.js
require("dotenv").config();

const nextConfig = {
  productionBrowserSourceMaps: true,
  env: {
    REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN:
      process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
