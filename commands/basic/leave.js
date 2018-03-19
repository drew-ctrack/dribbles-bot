const Discord = require('discord.js-commando');

class Leave extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'leave',
      group: 'basic',
      memberName: 'leave',
      description: 'Ask me to leave my current channel'
    });
  }

  async run(message, args) {
    voiceChannel.leave();
    console.log("I left a voice channel.")
  }
}

module.exports = Leave;
