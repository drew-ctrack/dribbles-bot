const Discord = require('discord.js-commando');

class Summon extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'summon',
      group: 'basic',
      memberName: 'summon',
      description: 'Summon me to a voice channel'
    });
  }

  async run(message, args) {
    if (message.member.voiceChannel) {
      message.member.voiceChannel.join()
        .then(connection => {
          return;
        })
        .catch(console.log("I joined a voice channel."));
    } else {
      message.reply('get in a voice channel first, ya dog.');
    }
  }
}

module.exports = Summon;
