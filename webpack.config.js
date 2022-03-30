const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies
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
  mode,
  plugins: [
    new ModuleFederationPlugin({
      name: 'consumer',
      filename: 'remoteEntry.js',
      remotes: {
        resume: prod
          ? 'resume@https://svelte-resume-phi.vercel.app/remoteEntry.js'
          : 'resume@http://localhost:3000/remoteEntry.js',

        pokemon: prod
          ? 'pokemon@https://pokemon-battle-cb.herokuapp.com/remoteEntry.js'
          : 'pokemon@http://localhost:3001/remoteEntry.js',

        covid: prod
          ? 'covid@https://sars-cov-2-cb.herokuapp.com/remoteEntry.js'
          : 'covid@http://localhost:3002/remoteEntry.js',

        portfolio: prod
          ? 'portfolio@https://betori.herokuapp.com/remoteEntry.js'
          : 'portfolio@http://localhost:3003/remoteEntry.js',
        dashboard: prod
          ? 'dashboard@https://aca-dashboard-go.herokuapp.com/remoteEntry.js'
          : 'dashboard@http://localhost:3004/remoteEntry.js',
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
  ],
}
