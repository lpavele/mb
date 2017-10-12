const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pug = require('./webpack/pug');
const devserver = require('./webpack/devserver');
const sass = require('./webpack/sass');
const css = require('./webpack/css');
const extractCss = require('./webpack/css.extract');
const uglifyJs = require('./webpack/js.uglify');
const optimizeCss = require('./webpack/css.optimize');
const images = require('./webpack/images');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

const common = merge({
        entry: {
            index: PATHS.source + '/pages/index/index.js',
            contact: PATHS.source + '/pages/contact/contact.js',
            graviy: PATHS.source + '/pages/products/graviy/graviy.js',
            // products: PATHS.source + '/pages/products/products.js',
            vendors: ["bootstrap"]
        },
        output: {
            filename: 'js/[name].js',
            path: PATHS.build
        },
        resolve: {
            modules: [
                'node_modules',
                'src'
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index', 'vendors'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'contact.html',
                chunks: ['contact', 'vendors'],
                template: PATHS.source + '/pages/contact/contact.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'graviy_beton.html',
                chunks: ['graviy', 'vendors'],
                template: PATHS.source + '/pages/products/graviy/graviy.pug'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
                Popper: ['popper.js', 'default'],
                // In case you imported plugins individually, you must also require them here:
                Util: "exports-loader?Util!bootstrap/js/dist/util",
                Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown",
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendors'
            })
        ]
    },
    pug(),
    images(),
    fonts()
);

module.exports = function(env) {
    if (env === 'production'){
        return merge([
            common,
            extractCss(),
            uglifyJs(),
            optimizeCss()
        ]);
    }
    if (env === 'development'){
        return merge([
            common,
            devserver(),
            sass(),
            css()
        ])
    }
};