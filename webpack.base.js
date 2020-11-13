module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[local]'
            }
        },
            {loader: 'sass-loader'
        }
        ]
    },
    ]
  }
};
