const path = require('path');
const HtmlInsertScriptPlugin = require('./lib/html-insert-script-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const uglify = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require("copy-webpack-plugin");


const VIEWS_PATH = './src/webapp/views/';

module.exports = {
    entry: {
        index: path.join(__dirname,VIEWS_PATH,'index/books.js')
    },
    output: {
        path: path.join(__dirname, './build/assets/'),
        publicPath: './',
        filename: 'scripts/[name].bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "es2015"
                        ]
                    }
                },
                exclude:/node_modules/
            }
        ]
    },
    plugins: [
        // new uglify(),

        new HtmlWebpackPlugin({
            filename: '../views/index/pages/index.html',
            template: path.join(__dirname, VIEWS_PATH, 'index/pages/books.html'),
            inject: false,
            chunks: ["index"]
        }),
        new HtmlInsertScriptPlugin({

        }),
        new CopyWebpackPlugin([{
            from: path.join(__dirname, VIEWS_PATH, 'layout.html'),
            to: path.join(__dirname, '/build/views/layout.html'),
        },
            {
                from: path.join(__dirname, '/src/webapp/widgets/'),
                to: path.join(__dirname, '/build/widgets/'),
                ignore: ['*.js', '*.css']
            }, {
                from: path.join(__dirname, './package.json'),
                to: path.join(__dirname, './build/package.json')
            },{
                from: path.join(__dirname, './app.js'),
                to: path.join(__dirname, './build/app.js')
            }
        ])

    ]
};


























