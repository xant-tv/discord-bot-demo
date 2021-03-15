// Discord
const Discord = require("discord.js");

// Logger
const Logger = require("../utils/logger.js");
const logger = Logger.create("DiscordBot");

// Hold
let monitorId = null;

// Login
function login(bot) {
    logger.log("Logged in!");
};

// Monitor
function monitor(msg) {
    logger.log("Responding to monitor command.");
    // Definitely won't be race conditions issues here.
    if (monitorId) {
        clearInterval(monitorId);
        monitorId = null;
    }
    else {
        monitorId = setInterval(dummy, 5000, msg);
    }
};

function dummy(msg) {
    msg.channel.send("Have you played Destiny 2 lately?");
};

// Uptime
function uptime(msg) {
    logger.log("Responding to uptime command.");
    msg.channel.send(process.uptime());
};

// Whois
function whois(msg) {
    logger.log("Responding to identity command.");
    let user = msg.author;
    if (msg.mentions.users.size) {
        user = msg.mentions.users.first();
    }
    let member = msg.guild.member(user);
    const embed = new Discord.MessageEmbed()
        .setColor(member.displayHexColor)
        .setAuthor(user.tag, user.displayAvatarURL())
        .setThumbnail(user.displayAvatarURL())
        .setDescription("Information about this user.")
        .addField("Nickname:", member.nickname)
        .addField("Roles:", member.roles.cache.map(roles => `${roles}`).join(" | "))
        .setTimestamp();
    msg.channel.send(embed);
};

module.exports = {
    "login": login,
    "monitor": monitor,
    "uptime": uptime,
    "whois": whois
};