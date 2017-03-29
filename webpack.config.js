const path = require('path');

module.exports = {
  context: path.resolve(__dirname),
  entry: {
    app: './assets/js/components/index',
  },

  output: {
    publicPath: '/static/bundles/',
    path: path.resolve('./static/bundles/'),
    filename: '[name].js',
  },
  devtool: 'inline-eval-cheap-source-map',

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, './assets/js/'),
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, 'node_modules')],
  },
};
