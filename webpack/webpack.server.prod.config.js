var path = require('path');
var fs = require('fs');
var webpack = require('webpack');
var _ = require('lodash');
var defaultConfig = require('./webpack.default.config');
var buildPath = path.resolve(__dirname, '../', 'dist');
var mainPath = path.resolve(__dirname, '../', 'src', 'server', 'index.js');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });


module.exports = _.extend({}, defaultConfig, {
    target: 'node',
    libraryTarget : 'commonjs',
    context: __dirname,
    node: {
        __filename: true,
        __dirname: true
    },
    devtool: 'source-map',
    entry: mainPath,
    output: {
        path: buildPath,
        publicPath: '/build/',
        filename: 'server.js'
    },
    externals: nodeModules,
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
});