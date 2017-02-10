var webpack = require('webpack');
module.exports = {
	entry: {
		index: './src/index'
	},
	output: {
		path: 'dist/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.jsx', '.js']
	},
	module: {
		rules: [
			{				
                test: /\.js?/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
		]
	},
	resolve: {
		extensions: [".jsx", ".js"]
	},
	devtool: "source-map",
	target: "web"
}