// Node
const express = require('express');
const router = express.Router();

// Handler
const handler = require('./handler.js');

// Router
function create() {
    router.get('/', handler.ping);
    return router;
};

// Export
module.exports = {
    "create": create
};