var webpack = require('webpack');
var path = require('path');
var _ = require('lodash');
var defaultConfig = require('./webpack.default.config');

var prodConfig = _.extend({}, defaultConfig, {
    name: 'Production Webpack',
    devtool: 'source-map',
    entry: path.resolve(__dirname, '../', 'src', 'client', 'index.js'),
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: false
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify({
                BROWSER: true,
                NODE_ENV: 'production'
            })
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true
        })
    ]
});

prodConfig.plugins = defaultConfig.plugins.concat(prodConfig.plugins);

module.exports = prodConfig;