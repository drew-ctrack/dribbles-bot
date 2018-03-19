const Discord = require('discord.js-commando');
const fs = require('fs');
const ytdl = require('ytdl-core');
const streamOptions = { seek: 0, volume: 0.15 };

class Play extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'play',
      group: 'music',
      memberName: 'play',
      description: 'Play music from the following link.'
    });
  }

  async run(message, args) {
    message.member.voiceChannel.join()
      .then(connection => {
        const stream = ytdl(args, { filter : 'audioonly'});
        const dispatcher = connection.playStream(stream, streamOptions);
      })
      .catch(console.error);

  }

}

module.exports = Play;
