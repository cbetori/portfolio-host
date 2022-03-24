const { ModuleFederationPlugin } = require('webpack').container
const HtmlWebPackPlugin = require('html-webpack-plugin')
const path = require('path')
const deps = require('./package.json').dependencies

module.exports = (_, argv) => {
  console.log(argv)
  return {
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
          resume:
            argv.mode === 'development'
              ? 'resume@https://svelte-resume-8qlv8qcrj-cbetori.vercel.app/remoteEntry.js'
              : 'resume@https://svelte-resume-8qlv8qcrj-cbetori.vercel.app/remoteEntry.js',
          pokemon:
            argv.mode === 'development'
              ? 'pokemon@http://localhost:3000/remoteEntry.js'
              : 'pokemon@https://pokemon-battle-cb.herokuapp.com/remoteEntry.js',

          covid:
            argv.mode === 'development'
              ? 'covid@http://localhost:3003/remoteEntry.js'
              : 'covid@https://sars-cov-2-cb.herokuapp.com/remoteEntry.js',
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
}
