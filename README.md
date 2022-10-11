
# 目錄結構介紹
```
├── config  # webpack設定
    ├── webpack.base.js # 公用設定
    ├── webpack.dev.config.js # 開發環境設定
    └── webpack.prod.config.js # 線上環境
├── demo # 開發時預覽用
    ├── src # 源碼目錄
        ├── index.jsx # 入口 jsx 文件
        ├── index.html # 入口 html 文件
        └── index.scss # 樣式
├── lib # build 结果
├── node_modules # 安裝依賴自動生成
├── src # 主要開發目錄
    └── index.tsx  # 源碼
├── .babelrc # babel 設定
├── .gitignore 
├── .npmignore # 指定發布 npm 的時候须要忽略的文件和文件夹
├── README.md
├── package-lock.json
└── package.json
```


# 安裝依賴
- 安裝React相關 `npm i react react-dom -D`
- 安裝webpack相關 `npm i webpack webpack-cli webpack-dev-server webpack-merge -D`
- 安裝css相關 `npm i postcss postcss-loader postcss-preset-env style-loader css-loader sass-loader node-sass mini-css-extract-plugin -D`
- 安裝babel相關 `npm i @babel/cli @babel/core @babel/preset-env @babel/preset-react babel-loader -D`
- 安裝ts相關 `npm i @types/react @types/react-dom ts-loader @babel/preset-typescript -D`


# 撰寫源碼


# 部署你的pkg
- `npm adduser`
- `npm publish`

# test
- `npx create-react-app my-app`
