const webpack = require("webpack");
const path = require("path");
const glob = require("glob");

// -- Webpack blocks
const {
	sourceMaps,
	createConfig,

	// Feature blocks
	typescript,

	// Shorthand setters
	customConfig,
	setEnv,
	env,
	entryPoint,
	uglify
} = require("webpack-blocks");

// -- Custom Blocks
const utils = require("./utils");
const config = require("./config");

// -- Config
module.exports = createConfig([
	entryPoint(utils.toObject(glob.sync("src/**/*.[ts|js]*"), config.noEnv.pathsToIgnore)),
	utils.setOut(),

	typescript(),

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
