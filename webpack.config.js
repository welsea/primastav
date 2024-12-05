const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico|woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/[name][ext]', // Output directory for assets
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Processes CSS files
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './assets', // Source directory for static assets
          to: 'assets', // Destination directory in dist
        },
      ],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: './dist',
    port: 8080,
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};