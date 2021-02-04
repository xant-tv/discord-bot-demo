// Logger
const Logger = require('../utils/logger.js');
const logger = Logger.create("DiscordBot");

// Login
function login() {
    logger.log("Logged in!");
};

// Uptime
function uptime(msg) {
    msg.channel.send(process.uptime());
};

// Tag
function tag(msg) {
    if (msg.mentions.users.size) {
        const tagged = msg.mentions.users.first();
        msg.channel.send(`Tagging ${tagged.username} in this reply.`);
    } 
    else {
        msg.reply('Please tag a valid user!');
    };
};

module.exports = {
    "login": login,
    "uptime": uptime,
    "tag": tag
};