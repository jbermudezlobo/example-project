module.exports = {
  entry: './src/App.js',
  output: {
    path: './public/js/',
    filename: 'bundle.js' },
    module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      }
    ]
  }
};
