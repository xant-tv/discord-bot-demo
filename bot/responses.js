// Discord
const Discord = require("discord.js");

// Logger
const Logger = require("../utils/logger.js");
const logger = Logger.create("DiscordBot");

// Login
function login() {
    logger.log("Logged in!");
};

// Uptime
function uptime(msg) {
    msg.channel.send(process.uptime());
};

// Whois
function whois(msg) {
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
    "uptime": uptime,
    "whois": whois
};