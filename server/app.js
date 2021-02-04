// Node
const express = require('express');
const app = express();

// Router
const Router = require('./router.js');
const router = Router.create();
app.use('/', router);

// Logger
const Logger = require('../utils/logger.js');
const logger = Logger.create("AppServer");

// Run
function run(override_port) {
    const port = override_port || process.env.SERVER_PORT || 3000;
    let server = app.listen(port, logger.log("Exposing keepalive endpoint."));
    return server;
};

// Export
module.exports = {
    "run": run
};