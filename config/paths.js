// TODO: we can split this file into several files (pre-eject, post-eject, test)
// and use those instead. This way we don't need to branch here.

var path = require('path');

function resolveApp(relativePath) {
  return path.resolve(relativePath);
}

module.exports = {
  appBuild: resolveApp('build'),
  appHtml: resolveApp('app/index.html'),
  appFavicon: resolveApp('app/favicon.ico'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('app'),
  appNodeModules: resolveApp('node_modules'),
  ownNodeModules: resolveApp('node_modules')
};
