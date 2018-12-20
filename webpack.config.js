'use strict';

const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    entry: {
        app: ['./src/index.js'],
        'production-dependencies': ['phaser']
    },

    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'project.bundle.js'
    },

    module: {
        rules: [
            {
                test: [/\.vert$/, /\.frag$/],
                include: path.resolve(__dirname, 'src/'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }
        ]
    },

    devServer: {
        publicPath: '/build/',
        contentBase: path.resolve(__dirname, 'build'),
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'index.html'),
                to: path.resolve(__dirname, 'build')
            },
            {
                from: path.resolve(__dirname, 'assets', '**', '*'),
                to: path.resolve(__dirname, 'build')
            }
        ]),
        new webpack.DefinePlugin({
            'CANVAS_RENDERER': JSON.stringify(true),
            'WEBGL_RENDERER': JSON.stringify(true)
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'production-dependencies',
            filename: 'production-dependencies.bundle.js'
        })
    ]

};
