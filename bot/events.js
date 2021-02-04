// Responses
const responses = require('./responses.js');

// Ready
function ready(bot) {
    responses.login(bot);
};

// Message
function message(msg) {
    const prefix = "!";
    if (msg.content === prefix.concat("ping")) {
        responses.uptime(msg);
    } 
    else if (msg.content.startsWith(prefix.concat("tag"))) {
        responses.tag(msg);
    }
};

module.exports = {
    "ready": ready,
    "message": message
};