var path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
      path: path.join(__dirname, "dist", "assets"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },
        {test: /\.css$/i, use: ["style-loader", "css-loader"]}]
    }
  };