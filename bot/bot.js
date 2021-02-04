// Discord
const discord = require('discord.js');

// Events
const events = require('./events.js');

// Run
function run(override_token) {
    const token = override_token || process.env.DISCORD_TOKEN;
    const bot = new discord.Client();
    bot.login(token);
    bot.on('ready', events.ready(bot));
    bot.on('message', (msg) => events.message(msg));
    return bot;
};

module.exports = {
    "run": run
};