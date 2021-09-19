const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const resolvePath = (url) => path.resolve(__dirname, url)
module.exports = {
  entry: resolvePath('../main.ts'),
  output: {
    path: resolvePath('../docs'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js', '.json'],
    alias: {
      '@': resolvePath('../../packages'),
      story: resolvePath('..')
    }
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath('../index.html')
    })
  ]
}
