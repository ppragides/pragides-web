"use strict";

var configs = {
	logger: {
		general: {
			transports: [
				{
					type: 'Console',
					options: {
						level: 'debug'
					}
				},
				{
					type: 'File',
					options: {
						filename: '/var/log/shaw-music/shaw-music.log',
						level: 'silly',
						json:false
					}
				}
			]
		},
		splunk: {
			transports: [
				{
					type: 'Console',
					options: {
						level: 'info'
					}
				}
			]
		}
	},
	host: 'localhost',
	listenport: '1440'
};

module.exports = {
	configs: configs
};