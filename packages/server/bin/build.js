const path = require('path');
const Build = require('scripts/build');
const packageJson = require('../package.json');

const rootPath = path.resolve(__dirname, '..');

module.exports = new Build({
  rootPath,
  version: packageJson.version,
  isClient: false,
  entry: {
    app: path.resolve(rootPath, 'src', 'index'),
    sharedTypings: path.resolve(rootPath, 'src', 'shared-typings', 'index'),
  },
  outputDir: path.resolve(__dirname, '..', 'dist'),
});
