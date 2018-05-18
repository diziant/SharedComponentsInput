const { resolve } = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractText = new ExtractTextPlugin({ filename: 'styles.css', allChunks: true })

const plugins = [
  new HtmlWebPackPlugin({ template: 'index.html' }),
  extractText,
]

const ENV = process.env.NODE_ENV
const SRC_PATH = resolve('src')

module.exports = {
  context: SRC_PATH,
  entry: 'index.js',
  resolve: {
    modules: [SRC_PATH, 'node_modules'],
  },
  output: {
    filename: '[hash:8].js',
  },
  devtool: ENV === 'development' && '#cheap-module-eval-source-map',
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'], exclude: /node_modules/ },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractText.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[path][local]_[hash:base64:5]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(gif|png|jpg|jpeg|svg)?$/,
        loader: 'file-loader',
        options: {
          name: 'assets/img/[name].[ext]',
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
        options: {
          name: 'assets/fonts/[name].[ext]',
        },
      },
    ],
  },
  plugins,
  devServer: {
    overlay: {
      errors: true,
    },
    stats: 'minimal',
    host: '0.0.0.0',
  },
}
