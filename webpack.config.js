const path = require('path');

let resolveCalls = 0;
class NoopResolver {
  apply(resolver) {
    resolver.plugin('resolve', (request, callback) => {
      resolveCalls++;
      console.log(`resolving #${resolveCalls}`, request.request);
      return callback();
    });
  }
}

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
  },
  resolve: {
    plugins: [
      new NoopResolver(),
    ],
  },
};
