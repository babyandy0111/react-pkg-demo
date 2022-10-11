module.exports = {
    resolve: {
        // 定義 import 時可省略的副檔名
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [
            {
                // 編譯處理 js 和 jsx 文件
                test: /(\.js(x?))|(\.ts(x?))$/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
                exclude: /node_modules/, // 只解析 src 目录下的文件, node_modules不解析
            }
        ]
    },
};
