const {resolve}=require('path')
const webpack = require('webpack')
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin =require('html-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin=require('optimize-css-assets-webpack-plugin')

const cesiumSource = 'node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports={
    entry:'./src/index.js',
    output:{
        filename:"js/built.js",
        path:resolve(__dirname,'build')
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },    
    module:{
        rules:[
            {
                test:/\.(js)$/,
                exclude:/node_modules/,
                enforce:'pre',
                loader:'eslint-loader',
                options:{
                    globals:[
                        "document",
                        "localStorage",
                        "window"  
                    ],
                    fix:true
                }
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configFile: resolve(__dirname, './tslint.json'),
                    typeCheck: true,
                    failOnHint: true,
                    fix:true
                }

            },
            {
                oneOf:[
                    {
                        test: /\.tsx?$/,
                        use: [
                            {
                                loader: 'ts-loader',
                                options: {
                                    // 指定特定的ts编译配置，为了区分脚本的ts配置
                                    configFile: resolve(__dirname, './tsconfig.json'),
                                },
                            },
                        ],
                        exclude: /node_modules/,
                    },
                    {
                        test:/\.js$/,
                        exclude:/node_module/,
                        loader:'babel-loader',
                        options:{
                            presets:[
                                [
                                    '@babel/preset-env',
                                    {
                                        useBuiltIns:'usage',
                                        corejs:{
                                            version:3
                                        },
                                        targets:{
                                            chrome:'60',
                                            firefox:'50',
                                    
                                            ie:'9',
                                            safari:'10',
                                            edge:'17'
                                        }
                                    }
                                ]
                            ],
                            cacheDirectory: true
                        }
                    },
                    {
                        test:/\.less$/,
                        use:[MiniCssExtractPlugin.loader,
                            'css-loader',
                            'less-loader']
                    },
                    {
                        test:/\.css$/,
                        use:[MiniCssExtractPlugin.loader,
                            'css-loader']
                    },
                    {
                        test:/\.(jpg|png|gif|bmp)$/,
                        loader:'url-loader',
                        options:{
        
                            limit:8*1024,
                            name:'[hash:10].[ext]',
                            esModule:false,
                            outputPath:'images'
                        }
                    },
                    {
                        test:/\.html$/,
                        loader:'html-loader'
                    },
                    {
                        exclude:/\.(html|js|css|less|jpg|png|gif|bmp)$/,
                        loader:'file-loader',
                        options:{
                            name:'[hash:10].[ext]',
                            esModule:false,
                            outputPath:'files'
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename:'css/main.css'
        }),
        new OptimizeCssAssetsPlugin(),
    ],
    optimization:{
        splitChunks:{
            chunks:"all"
        }
    },
    mode:"development",
    devServer:{
        contentBase:resolve(__dirname,"build"),
        compress:true,
        port:3000,
        open:true
    },
    devtool:'source-map'
}