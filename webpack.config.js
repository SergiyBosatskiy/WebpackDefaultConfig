const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const conf = {
	entry: './src/index.js',
	output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
  module: {
  	rules: [
    {
    	test: /\.js$/,
    	exclude: /node_modules/,
    	loader: "babel-loader"
    },
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
          //fallback: "style-loader",
          use: "css-loader"
        })
    /*  use: [
            'style-loader',
            'css-loader'
      ]*/
    }
  ]
  },
  devServer: {
  	overlay: true
  },
  plugins: [
    new ExtractTextPlugin("css/styles.css"),
  ]
};

module.exports = (env, options) => {
	let production = options.mode === 'production';

	conf.devtool = production ? false : 'eval-sourcemap';

	return conf;
}