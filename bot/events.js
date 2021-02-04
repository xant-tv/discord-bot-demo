const responses = require('./responses.js');

// Responses
responses = require('./responses.js');

// Ready
function ready(bot) {
    responses.login(bot);
};

// Message
function message(msg) {
    if (msg.content === '!ping') {
        responses.uptime(msg);
    } 
    else if (msg.content.startsWith('!tag')) {
        responses.tag(msg);
    }
};

module.exports = {
    "ready": ready,
    "message": message
};