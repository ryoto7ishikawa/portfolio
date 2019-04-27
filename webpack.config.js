const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main.ts',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: path.resolve(__dirname, 'dist'),
    chunkFilename: '[name].bundle.js',
    // 出力ファイル名
    filename: 'main.js'
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // `vue-loader` オプション
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            //     'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
      }, {
        // 対象となるファイルの拡張子(cssのみ)
        test: /\.css$/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // スタイルシートをJSからlinkタグに展開する機能
          "style-loader",
          // CSSをバンドルするための機能
          "css-loader"
        ]
      },
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader'
      },
      {
        test: /\.scss$/,
        use: [{
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          }
        ],
      }, {
        test: /\.(jpg|png|gif|svg)$/,
        loader: 'file-loader?name=[path][name].[ext]'
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.js', '.ts'
    ],
    // Webpackで利用するときの設定
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: ["node_modules"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, 'src', 'assets'),
      to: path.resolve(__dirname, 'dist', 'assets'),
    }]),
    new VueLoaderPlugin()
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    historyApiFallback: true,
  },
  devtool: 'source-map',
};
