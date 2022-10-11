const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const prodConfig = {
    mode: 'production',
    entry: path.join(__dirname, "../src/index.tsx"),
    output: {
        path: path.join(__dirname, "../lib/"),
        filename: "index.js",
        libraryTarget: 'umd',
        libraryExport: 'default',
    },
    module: {
        rules: [
            {
                test: /.s[ac]ss$/,
                exclude: /.min.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: "global"
                            }
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            // 其他選項
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    { loader: 'sass-loader' }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.min.css" // 提取後的css的文件名
        })
    ],
    externals: { // 定義外部依賴，避免把react和react-dom包進去
        react: {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom"
        }
    },
};
module.exports = merge(prodConfig, baseConfig);
