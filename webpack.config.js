const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	// removes duplication and create a vendor bundle.
	// optimization: {
	// 	splitChunks: {
	// 		chunks: 'all',
	// 	},
	// },
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000,
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|jpeg)$/,
				loader: 'url-loader',
			},
		],
	},
	plugins: [new HtmlWebpackPlugin()],
};
