const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies

const mode = process.env.NODE_ENV || 'development'
const prod = mode === 'production'

module.exports = {
  entry: './src/index.js',
  mode: 'development',
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
  devServer: {
    proxy: {
      '/api': prod
        ? 'https://sars-cov-2-cb.herokuapp.com/'
        : 'http://localhost:3002/',
    },
  },
}
