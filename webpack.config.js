const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies
const web = require('webpack')
require('dotenv').config()

const mode = process.env.NODE_ENV || 'production'
const prod = mode === 'production'

module.exports = {
  entry: './src/index.js',
  devtool: 'hidden-source-map',
  resolve: {
    extensions: ['.js', '.json', '.css', '.png'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(png)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: 'consumer',
      filename: 'remoteEntry.js',
      remotes: {
        portfolio: prod
          ? 'portfolio@https://betori.herokuapp.com/remoteEntry.js'
          : 'portfolio@http://localhost:3003/remoteEntry.js',
      },
      shared: [
        {
          ...deps,
          react: {
            singleton: true,
            requiredVersion: deps.react,
          },
          'react-dom': {
            singleton: true,
            requiredVersion: deps['react-dom'],
          },
        },
      ],
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
    }),
    new web.DefinePlugin({
      REMOTE_RESUME: prod
        ? JSON.stringify('https://svelte-resume-phi.vercel.app/remoteEntry.js')
        : JSON.stringify('http://localhost:3000/remoteEntry.js'),
      REMOTE_POKEMON: prod
        ? JSON.stringify(
            'https://pokemon-battle-cb.herokuapp.com/remoteEntry.js'
          )
        : JSON.stringify('http://localhost:3001/remoteEntry.js'),
      REMOTE_COVID: prod
        ? JSON.stringify('https://sars-cov-2-cb.herokuapp.com/remoteEntry.js')
        : JSON.stringify('http://localhost:3002/remoteEntry.js'),
      REMOTE_PORTFOLIO: prod
        ? JSON.stringify('https://betori.herokuapp.com/remoteEntry.js')
        : JSON.stringify('http://localhost:3003/remoteEntry.js'),
      REMOTE_DASHBOARD: prod
        ? JSON.stringify(
            'https://aca-dashboard-go.herokuapp.com/remoteEntry.js'
          )
        : JSON.stringify('http://localhost:3004/remoteEntry.js'),
      REMOTE_AMAZON: prod
        ? JSON.stringify(
            'https://amazon-clone-teal-tau.vercel.app/remoteEntry.js'
          )
        : JSON.stringify('http://localhost:3005/remoteEntry.js'),
    }),
  ],
}
