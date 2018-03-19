const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

class Skip extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'skip',
      group: 'music',
      memberName: 'skip',
      description: 'Skip the current song in the queue.'
    });
  }

  async run(message, args) {

  }
}

module.exports = Skip;
