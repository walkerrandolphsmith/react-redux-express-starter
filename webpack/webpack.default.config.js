var path = require('path');
var HappyPack = require('happypack');
var buildPath = path.resolve(__dirname, '../', 'public', 'build');

module.exports = {
    target: 'web',
    output: {
        path: buildPath,
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loaders: ['react-hot-loader', 'babel-loader'], exclude: [/node_modules/] },
            { test: /\.less$/, loaders: ['style-loader', 'css-loader', 'less-loader'] },
            {
                test: /\.(jpg|jpeg|gif|png|ico|ttf|otf|eot|svg|woff|woff2)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=[path][name].[ext]'
            }
        ]
    },
    plugins: [
        new HappyPack({ loaders: ['babel-loader'] })
    ]
};
