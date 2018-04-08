const atl = require("awesome-typescript-loader");
const glob = require("glob");
const utils = require("./utils");
const config = require("./config");

// -- Webpack blocks
const {
	sourceMaps,
	createConfig,

	// Shorthand setters
	customConfig,
	setEnv,
	env,
	entryPoint,
	uglify
} = require("webpack-blocks");

// -- Config
module.exports = createConfig([
	entryPoint(utils.toObject(glob.sync("src/**/*.[ts]*"), config.noEnv.pathsToIgnore)),
	utils.setOut(),

	customConfig({
		resolve: {
			extensions: ['.ts', '.tsx']
		},
		module: {
			rules: [{
				test: /\.(ts|tsx)$/,
				loader: 'awesome-typescript-loader',
			}]
		},
		plugins: [
			new atl.CheckerPlugin(),
		]
	}),

	setEnv({
		NODE_ENV: process.env.NODE_ENV
	}),

	env("development", [
		sourceMaps(),
	]),

	env("production", [
		uglify(),
	])
]);
