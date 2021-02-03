// Node
const express = require('express');
const app = express();

// Router
const Router = require('./router.js');
const router = Router.create();
app.use('/', router);

// Logger
function log(port) {
    console.log(`Server running on port ${port}`);
}

// Run
function run(override_port) {
    const port = override_port || process.env.SERVER_PORT || 3000;
    let server = app.listen(port, log(port));
    return server;
};

// Export
module.exports = {
    "run": run
}