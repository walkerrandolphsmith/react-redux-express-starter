var webpack = require('webpack');
var _ = require('lodash');
var defaultConfig = require('./webpack.default.config');

var devConfig = _.extend({}, defaultConfig, {
    name: 'Development Webpack',
    cache: true,
    devtool: 'eval-source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3001/',
        'webpack/hot/only-dev-server',
        './src/client'
    ],
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});



devConfig.plugins = defaultConfig.plugins.concat(devConfig.plugins);

module.exports = devConfig;
