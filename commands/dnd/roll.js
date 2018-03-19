const commando = require('discord.js-commando');

class Roll extends commando.Command {
  constructor(client) {
    super(client, {
      name: 'roll',
      group: 'dnd',
      memberName: 'roll',
      description: 'Rolls a die'
    });
  }

  async run(message, args) {
    var num = parseInt(args);
    var roll = Math.floor(Math.random() * num) + 1;

    if (!isNaN(roll)) {
      message.channel.send(":game_die: **Roll**: " + roll);
    } else {
      message.channel.send("That wasn't a numeral.");
    }
  }
}

module.exports = Roll;
