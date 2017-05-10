"use strict";

// Let's require some node modules
var configs = require('./config');

// Kill the process on SIGINT
process.on('SIGINT', function () {
  //logger.error('Got SIGINT.  Shutting down.');
  process.exit();
});

//Handle uncaught exceptions, to prevent process from terminating.
process.addListener("uncaughtException", function (err) {
    //logger.error("Uncaught exception: " + err);
});

// Now let's bring in our custom modules
// Bring in our http server.
var server = require("./server");
var router = require("./router");
var handler = require("./handlers/SiteHandler");


var SiteHandler = new handler.SiteHandler(configs);
// Let's also instantiate a MusicRouter instance
var PragidesRouter 	= new router.PragidesRouter(configs);

// Set routes
PragidesRouter.setHandler("GET", "/", SiteHandler.handleRequest);

var PragidesServer = new server.PragidesServer(configs);

console.log("Server started...");

// Start our http server
PragidesServer.start(PragidesRouter);