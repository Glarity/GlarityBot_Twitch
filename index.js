const TMI = require("tmi.js");
const Commands = require("./commands.js");

var client = new TMI.client({
  options: {
    debug: true
  },
  connection: {
    reconnect: true
  },
  identity: {
    username: "GlarityBot",
    password: "hehexd"
  },
  channels: ["#sturgisgaming", "#glaritytv"]
});

client.on("chat", function (channel, userstate, message, self) {
  if (self) return;
  for (var i = 0; i < Commands.length; i++) {
    if (message === Commands[i].command) {
      client.say(channel, Commands[i].response);
    }
  }
});

client.on("ban", function (channel, username, reason) {
  client.say(channel, "L8r bowlcut @" + username);
});
client.connect();