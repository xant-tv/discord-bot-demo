// Node
const dotenv = require("dotenv");
dotenv.config();

// Bot
const Bot = require("./bot/bot.js");

// Application
const App = require("./server/app.js");

// This is where the actual bot code should go.
// However, it is important to hook the server run at some point.
App.run();
Bot.run();