const webpack = require('webpack');
const webpackVersion = require('webpack/package.json').version;
const config = require('./webpack.config');

const compiler = webpack(config);
console.log(`Building w/ webpack@${webpackVersion}`)
compiler.run(() => {
  compiler.run(() => {

  });
});
