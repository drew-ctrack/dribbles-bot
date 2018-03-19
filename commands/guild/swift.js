const Discord = require('discord.js-commando');

class Swift extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'swift',
      group: 'guild',
      memberName: 'swift',
      description: 'Dispense a Swift quote'
    });
  }

  async run(message, args) {
    var swiftQuotes = ["Novo or no go, bro.", "UCE", "UCE BRUTHA", "FUCKOFFDOG", "Don't fuck me. I don't like being FUCKED.",
        "You don't know me, CUZZY!", "Umm, Illy, hello?", "Hello?", "Did someone say... PUBG?", "Go full leb-spec.",
        "Cao ni ma!", "Uhhhhhhhh China number one!", "You've oppressed my people for 400 years.", "Guys BRB. *2 hours later* Okay back!",
        "That's all!", "Awww chur", "Going Mercader spec", "If my grandma had balls, she'd be my grandpa", "Found an 8x scope... Guys, found another",
        "Illy, I promise we'll have Heroic Argus down before you leave", "Found a VS Yes"];
    var randomResponse = swiftQuotes[Math.floor(Math.random() * swiftQuotes.length)];


    const embed = {
      "color": 2863615,
      "footer": {
        "text": "By Dribbles"
      },
      "thumbnail": {
        "url": "https://cdn.discordapp.com/avatars/208067109060739073/c536ca09fd0cb09850c32de6c316d07c.png"
      },
      "fields": [
        {
          "name": "SWIFT SAYS:",
          "value": randomResponse
        }
      ]
    };
    message.channel.send({ embed });

  }

}

module.exports = Swift;
