const HtmlWebpackPlugin = require("html-webpack-plugin"),
	MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
	return {
		mode: env.production ? "production" : "development",
		target: env.production ? "browserlist" : "web",
		devtool: env.production ? "sorce-map" : "eval-cheap-module-source-map",

		entry: "./src/index.js",

		output: {
			assetModuleFilename: "public/[name][ext][query]",
			clean: true,
		},

		devServer: {
			static: "./dist",
			hot: true,
		},
		optimization: {
			splitChunks: {
				chunks: "all",
			},
			minimize: argv.mode === "production",
			moduleIds: "named",
		},

		module: {
			rules: [
				{
					test: /\.html$/i,
					loader: "html-loader",
				},
				{
					test: /\.(ico|png|svg|jpe?g|gif|webp)$/i,
					type: "asset/resource",
				},
				{
					test: /\.(s[ac]|c)ss$/i,
					use: [
						argv.mode === "production"
							? MiniCssExtractPlugin.loader
							: "style-loader",
						"css-loader"
					],
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				title: "Portfolio",
				template: "./src/index.html"
			}),
			new MiniCssExtractPlugin({
				filename: "style.css",
			}),
		],
	};
};
