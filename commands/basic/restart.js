const Discord = require('discord.js-commando');

class Restart extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'restart',
      group: 'basic',
      memberName: 'restart',
      description: 'Restart me'
    });
  }

  async run(message, args) {
    message.channel.send("Restarting...");
  }

}

module.exports = Restart;
