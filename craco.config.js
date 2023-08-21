/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
module.exports = {
  plugins: [
  
  ],
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@global": path.resolve(__dirname, "src/global"),
      "@lang": path.resolve(__dirname, "src/lang"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@redux": path.resolve(__dirname, "src/redux"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        "^@components(.*)$": "<rootDir>/src/components$1",
      },
    },
  },
};