const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const commonPaths = require("./paths");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", commonPaths.entryPath],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader"],
      },
      {
        test: /\.(woff2|ttf|woff|eot)$/,
        type: "asset/resource",
        generator: {
          filename: `${commonPaths.fontsFolder}/[hash].[ext]`,
        },
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[hash].[name].[ext]",
              outputPath: commonPaths.imagesFolder,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".css", ".scss"],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new HtmlWebpackPlugin({
      // new update props
      // check https://github.com/jantimon/html-webpack-plugin#options
      template: commonPaths.templatePath,
      scriptLoading: "module",
      inject: true,
      meta: {
        "theme-color": "#ffffff",
        description: "*",
        "og:type": "website",
        "og:site_name": "React PWA Boilerplate Example",
        "og:url": "http://localhost:9002",
        "og:image":
          "https://lumiere-a.akamaihd.net/v1/images/og-dt-b_42666fa8.jpeg?region=0%2C0%2C400%2C400",
      },
      minify: true,
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: commonPaths.favIco, to: commonPaths.imagesFolder },
        { from: commonPaths.appleIcon, to: commonPaths.imagesFolder },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
  ],
};
