// Responses
const responses = require('./responses.js');

// Ready
function ready(bot) {
    responses.login(bot);
};

// Message
function message(msg) {
    const prefix = "!";
    if (msg.content === prefix.concat("uptime")) {
        responses.uptime(msg);
    } 
    else if (msg.content.startsWith(prefix.concat("whois"))) {
        responses.whois(msg);
    }
};

module.exports = {
    "ready": ready,
    "message": message
};