const path = require("path"); //node 에 자동으로 깔려있다
// const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: "wordrelay-setting",
  mode: "development", //실서비스 : production
  devtool: "eval", //빠르게, 서비스시 hidden-source-map
  resolve: {
    extensions: [".js", ".jsx"], //아래 entry app에 확장자를 넣지 않아도 되게 한다.
  },

  entry: {
    app: ["./client"], //wordrelay.jsx를 client.jsx가 불러오기 때문에 이중으로 넣지 않는다.
  }, //입력

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"], //browserslist 참고
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [
            "react-refresh/babel",
          ],    
        },
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin()],

  output: {
    path: path.join(__dirname, "dist"), //__dirname 은 현재폴더
    filename: "app.js",
    publicPath: '/dist'
  }, //출력
  devServer: {
    devMiddleware: {publicPath: '/dist'},
    static: {directory: path.resolve(__dirname)},
    hot: true,
    liveReload:false
  }
};
