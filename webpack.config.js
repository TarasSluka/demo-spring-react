var path = require('path');
var webpack = require('webpack');
// var ROOT = path.resolve(__dirname, 'src/main/resources/static');
var ROOT = path.resolve(__dirname, 'src/main/js');
// var DEST = path.resolve(__dirname, 'src/main/resources/static/dist');
var DIST = path.resolve(__dirname, 'build/resources/main/static');


module.exports = {
    devtool: 'cheap-source-map',
    entry: {
        app: ROOT + '/index.js'
    },

    resolve: {
        modules: [
            ROOT,
            'node_modules'
        ],
        extensions: ['.js', '.jsx', '*']
    },
    output: {
        path: DIST,
        filename: 'bundle.js',
        publicPath: '/dist/'
    },

    devServer: {
        contentBase: ROOT,
        publicPath: '/',
        historyApiFallback: true,

        host: 'localhost',
        port: 3000,

        proxy: {
            '/': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {presets: ['react', 'es2015', 'stage-2']}
                }
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};