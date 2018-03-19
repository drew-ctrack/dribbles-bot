const Discord = require('discord.js-commando');

class Kek extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'kek',
      group: 'guild',
      memberName: 'kek',
      description: 'Dispense a Kek quote'
    });
  }

  async run(message, args) {

    const embed = {
      "color": 2863615,
      "fields": [
        {
          "name": "KEK SAYS:",
          "value": "Get a kebab."
        }
      ]
    };
    message.channel.send({ embed });

  }

}

module.exports = Kek;
