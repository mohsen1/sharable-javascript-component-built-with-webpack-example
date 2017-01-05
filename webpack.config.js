var webpack = require('webpack')
var path = require('path');

/** @type {webpack.Configuration} */
var config = {
    entry: './index.js',
    module: {
        loaders: [
            {
                test: /\.png$/,
                loader: 'file-loader',
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: 'dist',
        libraryTarget: 'commonjs2',
    },
    externals(context, request, callback) {
        if (/\.png$/.test(request)) {
            var absoluteFilePath = path.resolve(context, request);
            var distFolder = path.resolve(__dirname, 'dist');
            callback(null, path.relative(distFolder, absoluteFilePath));
        } else {
            callback(null);
        }
    }
}

module.exports = config;