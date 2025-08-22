// Import required modules
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// All Webpack configurations go inside module.exports
module.exports = {
  mode: "development", // or 'production'

  // Entry point of the app
  entry: "./src/index.ts",

  // Output settings
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // Disable arrow functions for older browser support
    },
  },

  // Module rules
  module: {
    rules: [
      {
        test: /\.ts$/, // Apply to .ts files
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    corejs: "3",
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        exclude: /node_modules/,
      },

      // Handle .less files
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },

  // Plugins
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/index.html",
    }),
  ],

  // Module resolution
  resolve: {
    extensions: [".ts", ".js"], // So you can import files without specifying extensions
  },
};