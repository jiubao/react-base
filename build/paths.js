const path = require("path");

const isProd = process.env.NODE_ENV === "production";

const ps = {
  html: path.resolve(__dirname, "../public/index.html"),
  src: path.resolve(__dirname, "../src/"),
  entry: path.resolve(__dirname, "../src/index.js"),
  dist: path.resolve(__dirname, "../dist/"),
  node_modules: path.resolve(__dirname, "../node_modules"),
  public: isProd ? "/web" : "/"
};

console.log(ps);

module.exports = ps;
