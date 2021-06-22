const { VueLoaderPlugin } = require('vue-loader'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  path = require('path'),
  resolvePath = url => path.resolve(__dirname, url)

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: resolvePath('../main.ts'),
  output: {
    path: resolvePath('../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '.ts', '.vue', '.js', '.json' ],
    alias: {
      '@': resolvePath('packages'),
      'stroy': resolvePath('stroy')
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
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|otf|ttf|woff|eot|gif|png)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(scss|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolvePath('../template.html')
    })
  ]
}
