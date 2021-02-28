// Discord
const Discord = require("discord.js");

// Events
const events = require("./events.js");

// Create
function create() {
    const bot = new Discord.Client();
    bot.on('ready', events.ready);
    bot.on('message', events.message);
    return bot;
}

// Run
function run(override_token) {
    const token = override_token || process.env.DISCORD_TOKEN;
    const bot = create();
    bot.login(token);
    return bot;
};

module.exports = {
    "run": run
};