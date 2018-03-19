const Discord = require('discord.js-commando');

class Hello extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'hello',
      group: 'basic',
      memberName: 'hello',
      description: 'Say hello'
    });
  }

  async run(message, args) {
    message.channel.send("Hello " + message.author + "!");
  }

}

module.exports = Hello;
