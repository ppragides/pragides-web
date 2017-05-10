"use strict";

var self;
//var consul	     	= require('../clients/consul');
var ejs				= require("ejs");

// Constructor for our ShawMusic object.
var SiteHandler = function(config) {
	this.config         = config.configs;
	//this.consulClient	= new consul.ConsulClient(config);
	self = this;

	return this;

};

SiteHandler.prototype = {

	constructor: SiteHandler,

	// Let's handle the requests to our /player endpoint
	handleRequest: function(req, res, next) {

		var pageTemplate = __dirname + "/../templates/basicPage.ejs";

		ejs.renderFile(playerTemplate, data, options, function(err, str) {

			if (err) {
				console.log("An error occured writing out player HTML");
				res.writeHead(500);
				res.end();
			}
			else {
				console.log("Successfully built out HTML player code.");
				res.writeHead(200, {'Content-Type': 'text/html'});
				res.write(str);
				res.end();
			}
		});
		return;
	}

};

module.exports = {
	SiteHandler: SiteHandler
};