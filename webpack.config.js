const path = require('path');

module.exports = {
  entry: './app/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.(jsx?$)/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/dist',
  },
  devtool: 'eval-source-map',
};
