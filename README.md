This repo is meant to reproduce what I think is a bug in webpack 3.

The problem is basically that resolvers don't get rerun in webpack 3, but they do in 4. I believe that they should run for every build, as the UnsafeCache resolver plugin should make resolving a second time very fast.


Steps to reproduce the problem:

```
git clone git@github.com:gdborton/webpack-resolver-reproduction.git
cd webpack-resolver-reproduction
npm install webpack@3.11.0
node build
npm install webpack@4
node build
```

The (I think incorrect) output from webpack@3.11.0:
```
resolving #1 /Users/gary_borton/code/webpack-resolver-reproduction/src/index.js
resolving #2 ./other
resolving #3 /Users/gary_borton/code/webpack-resolver-reproduction/src/index.js
```

The (I think correct) output from webpack@4.2.0
```
resolving #1 /Users/gary_borton/code/webpack-resolver-reproduction/src/index.js
(node:84641) DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead
resolving #2 ./other
resolving #3 /Users/gary_borton/code/webpack-resolver-reproduction/src/index.js
resolving #4 ./other
```

You can see that the resolver was rerun for `./other` in webpack 4, but not 3.
