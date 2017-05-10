"use strict";
var self;
// Constructor for our Server object.
var PragidesRouter = function(config) {
	this.config         = config.configs;
	this.routes 		= config.routes || {};

	self = this;

	return this;

};

PragidesRouter.prototype = {

	constructor: PragidesRouter,

	/*
	 * Function that handles the routing for incoming requests
	 *
	 */
	route: function (pathname, response, request) {

		// Let's look for a handler based on the pathname
		for (var route in this.routes) {
			var match = this.routes[route].re.exec(pathname);
			if (match) {
				var method = this.routes[route].handlers[request.method.toUpperCase()];
				return method(request, response);
			}
		}

	    console.log("No request handler found for " + pathname);
	    var content = "file not found";
	    response.writeHead(404, {"Content-Type": "text/html"});
	    response.write(content);
	    response.end();
	},

	setHandler: function(method, path, handler) {

		// Get existing route entries or create new ones.
		var route = (this.routes[path]) ? this.routes[path] : {};
		var handlers = (route.handlers) ? route.handlers : {};

		// Pre Compile the regex
		if(typeof(route.re === 'undefined')) {route.re = new RegExp(path);}

		// Set the handler on the route
		handlers[method.toUpperCase()] = handler;
		route.handlers = handlers;

		// Add the route to the routes.
		this.routes[path] = route;
	}

};
module.exports = {
	PragidesRouter: PragidesRouter
};