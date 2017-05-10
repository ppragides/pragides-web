"use strict";

var program = require('commander');

program
	.option('-c, --config <path>', 'set config path [./config/config.js]','./config/config.js')
	.option('-p, --port <n>', 'Server listen port', parseInt)
	.parse(process.argv);

var configs = require(program.config);

if ( program.port !== undefined ) {
	configs.configs.listenport = program.port;
}

module.exports = configs;