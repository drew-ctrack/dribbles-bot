const Discord = require('discord.js-commando');

class Goodbye extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'goodbye',
      group: 'basic',
      memberName: 'goodbye',
      description: 'Say goodbye'
    });
  }

  async run(message, args) {
    message.channel.send("Cya later " + message.author + "!");
  }

}

module.exports = Goodbye;
