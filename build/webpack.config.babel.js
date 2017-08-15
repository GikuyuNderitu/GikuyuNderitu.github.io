import { resolve } from 'path'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractServiceWorker = new ExtractTextPlugin('sw.js');


const LAUNCH_COMMAND = process.env.npm_lifecycle_event

const isProduction = LAUNCH_COMMAND === 'production'
process.env.BABEL_ENV = LAUNCH_COMMAND

const PATH = {
	app: resolve(__dirname, 'src'),
	out: resolve(__dirname, '..'),
}

const HTMLPluginConfig = new HtmlWebpackPlugin({
	template: resolve(PATH.app, 'index.html'),
	filename: 'index.html',
	inject: 'body',
})

const productionPlugin = new webpack.DefinePlugin({
	'process.env': {
		NODE_ENV: JSON.stringify('production')
	}
})

const base = {
	entry: PATH.app,
	output: {
		path: PATH.out,
		filename: "bundle.js"
	},
	module: {
		rules: [
			{test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
			{test: /^sw\.js$/, use: extractServiceWorker.extract(['babel-loader'])},
			{test: /\.css$/, use: ['style-loader', 'css-loader', 'resolve-url-loader']},
			{test: /\.sass$/, use: ['style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'resolve-url-loader', 'sass-loader?indentedSyntax']},
			{test: /\.(png|jpg|gif|woff|svg|eot|ttf|woff2)$/, loader: ['url-loader?limit=1024&name=[name]-[hash:8].[ext]!image-webpack', 'resolve-url-loader']},
		],
	},
	resolve: {
		alias: {
			Components: resolve(PATH.app, 'app', 'components' ),
			Containers: resolve(PATH.app, 'app', 'containers'),
			Utils: resolve(PATH.app, 'app', 'utils'),
			State: resolve(PATH.app, 'app', 'state'),
		}
	}	
}

const devConfig = {
	devtool: 'cheap-module-inline-source-map',
	devServer: {
		historyApiFallback: true,
		contentBase: PATH.out,
		hot: true,
		inline: true,
	},
	plugins: [HTMLPluginConfig, extractServiceWorker, new webpack.HotModuleReplacementPlugin()],
}

const productionConfig = {
	devtool: 'cheap-module-source-map',
	plugins: [HTMLPluginConfig, extractServiceWorker, productionPlugin]
}

const remainder = isProduction === true ? productionConfig : devConfig

const config = {...base, ...remainder}

export default config