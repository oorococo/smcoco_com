const path = require('path')
const webpack = require("webpack");

const src = path.resolve(__dirname, './src')
const dst = path.resolve(__dirname, './dist')

const config = {
    devtool: "cheap-module-eval-source-map",
    entry: {
        index: `${src}/index.js`
    },
    output: {
        path: `${dst}`,
        filename: "[name].js",
        publicPath: "/"
    },
    resolve: {
        extensions: ["", ".js", ".jsx", ".less"],
        modulesDirectories: ["src/frontend/", "node_modules"],
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'stage-2', 'react'],
                    plugins: []
                }
            },
            {
                test: /\.less$/,
                loader: "style!css?-minimize&sourceMap!postcss!less?sourceMap"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'file?name=images/[name].[ext]'
            },
            {
                test: /\.(eot|ttf|svg|woff|woff2)$/,
                loader: 'file?name=fonts/[name].[ext]'
            }
        ]
    },
    postcss: [
        // require('postcss-custom-media'),
        // require('cssnano')({
        //     autoprefixer: {
        //         add: true,
        //         remove: true,
        //         browsers: ['last 2 versions', 'ie 9']
        //     },
        //     discardComments: {
        //         removeAll: true
        //     },
        //     discardUnused: false,
        //     mergeIdents: false,
        //     reduceIdents: false,
        //     safe: true,
        //     sourcemap: true
        // }),
        // require('postcss-reporter')
    ]
}

module.exports = config;
