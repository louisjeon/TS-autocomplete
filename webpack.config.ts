const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env: any, options: any) => {
  return {
    entry: "./src/app.ts",
    module: {
      rules: [
        {
          test: /\.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
        {
          test: /.s?css$/,
          use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    },
    output: {
      filename: "app.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
      clean: true,
    },
    plugins: [
      new HtmlPlugin({
        template: "./src/index.html",
      }),
    ],
    devServer: {
      port: 8080,
      open: true,
      historyApiFallback: true,
    },
  };
};
