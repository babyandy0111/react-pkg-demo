const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const devConfig = {
    mode: 'development', // 開發
    entry: path.join(__dirname, "../demo/src/index.jsx"), // 入口，處理資源文件的依賴關係
    output: {
        path: path.join(__dirname, "../demo/src/"),
        filename: "dev.js",
    },
    module: {
        rules: [
            {
                test: /.s[ac]ss$/,
                exclude: /.min.css$/,
                use: [
                    { loader: 'style-loader' },
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
            },
            {
                test: /.min.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, '../demo/src/'),
        compress: true,
        host: '127.0.0.1',
        port: 8080, // 啟動的port號
        open: true // 打開瀏覽器
    },
};
module.exports = merge(devConfig, baseConfig);
