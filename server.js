var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var chalk = require('chalk')
var config = require('./config/webpack.config.dev')

var port = 3000
var host = 'localhost'
var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  noInfo: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {
    colors: true
  }
})

server.listen(port, host, function errorCallback(err) {
  if (err) {
    console.error(err);
  }

  console.log(chalk.green('==> 🚧  Webpack deve server running on ' + host + ':' + port));
})
