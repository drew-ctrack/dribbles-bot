const Discord = require('discord.js-commando');
const client = new Discord.Client();
const botSettings = require("./botSettings.json");
const prefix = botSettings.prefix;


client.registry.registerGroup('basic', 'Basics');
client.registry.registerGroup('music', 'Music');
client.registry.registerGroup('dnd', 'DnD');
client.registry.registerGroup('guild', 'Guild');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands");

client.login(botSettings.token);

client.on('ready', () => console.log("I'm awake."));

var servers = {};

client.on('error', console.error);

client.on('message', async message => {
  if (message.content.startsWith(prefix)) {
    console.log(message.createdAt + " -> " + message.author.username + " said: " + message.content);
  }

  if (message.author.equals(client.user)) return;
  if (!message.content.startsWith(prefix)) return;

  var args = message.content.replace(/\s+/, '\x01').split('\x01');
  var argsCommand = args[0];

  switch (argsCommand.toLowerCase()) {
    case "!restart":
      client.destroy();
      client.login(botSettings.token);
      break;


  }
});
