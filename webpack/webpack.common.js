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
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: "asset/resource",
      //   generator: {
      //     filename: `${commonPaths.fontsFolder}/[name].[ext]`,
      //   },
      // },
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
      title: 'Mac Calculator Clone',
      template: commonPaths.templatePath,
      filename: 'index.html',
      scriptLoading: "defer", // {'blocking'|'defer'|'module'}
      inject: true,
      minify: true,
      hash: true,
      cache: true,
      meta: {
        // 'Content-Security-Policy': { 'http-equiv': 'Content-Security-Policy', 'content': 'default-src https:' },
        // 'set-cookie': { 'http-equiv': 'set-cookie', content: 'name=value; expires=date; path=url' },
        "theme-color": "#ffffff",
        "description": "Mac Calculator Clone Using React Typescript, Redux, and unit test using Jest - RTL",
        "og:type": "website",
        "og:site_name": "Mac Calculator Clone",
        "og:url": "https://trusting-jepsen-7e7a9c.netlify.app",
        "og:image": "https://lumiere-a.akamaihd.net/v1/images/og-dt-b_42666fa8.jpeg?region=0%2C0%2C400%2C400",
      },
      // 'base': {
      //   'href': 'https://trusting-jepsen-7e7a9c.netlify.app/index.html',
      //   'target': '_blank'
      // }
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
