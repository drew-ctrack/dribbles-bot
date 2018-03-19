const Discord = require('discord.js-commando');

class Goodnight extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'goodnight',
      group: 'basic',
      memberName: 'goodnight',
      description: 'Say goodnight'
    });
  }

  async run(message, args) {
    message.channel.send("Goodnight " + message.author + "! Don't let the bed bugs bite.");
  }

}

module.exports = Goodnight;
