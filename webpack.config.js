var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	devtool: 'sourcemap',
	entry: {
		main: path.resolve(__dirname, 'index'),
	},
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
		filename: '[name].js',
	},
	plugins: [
		// Create HTML file that includes reference to bundled JS.
		new HtmlWebpackPlugin({
			template: 'index.html',
			inject: true,
		}),
	],
	module: {
		loaders: [
			{ test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
		],
	},
};
