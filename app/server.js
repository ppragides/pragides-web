"use strict";

// Bring in required modules
var http 		= require("http");
var url 		= require("url");
var self;

// Constructor for our Server object.
var PragidesServer = function(config) {
	this.config         = config.configs;
	self = this;

	return this;

};

PragidesServer.prototype = {

	constructor: PragidesServer,

	start: function (router) {

		var host = self.config.host;
 		var port = self.config.listenport;

		// Function to handle requests
 		function onRequest(request, response) {
			var pathname = url.parse(request.url).pathname;
			router.route(pathname, response, request);
		}

		http.createServer(onRequest).listen(port);
  		console.log("Server has started and listening on : "+ host +":"+ port );
	}
};

module.exports = {
	PragidesServer: PragidesServer
}