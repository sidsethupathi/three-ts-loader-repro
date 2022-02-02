const path = require("path");

module.exports = {
  entry: {
    vanilla: "./src/vanilla.js",
    typescript: "./src/typescript.ts",
  },
  mode: "development",
  devtool: "source-map",
  devServer: {
    host: "0.0.0.0",
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  }
};
