const Discord = require('discord.js-commando');

class Drips extends Discord.Command {
  constructor(client) {
    super(client, {
      name: 'drips',
      group: 'guild',
      memberName: 'drips',
      description: 'Pick a new main'
    });
  }

  async run(message, args) {
    var classList = ["Beast Mastery Hunter", "Marksmanship Hunter", "Survival Hunter",
            "Frost Mage", "Fire Mage", "Arcane Mage",
            "PUBG",
            "Destruction Warlock", "Affliction Warlock", "Demonology Warlock",
            "Holy Priest", "Discipline Priest", "Shadow Priest",
            "PUBG",
            "Arms Warrior", "Protection Warrior", "Fury Warrior",
            "Holy Paladin", "Protection Paladin", "Retribution Paladin",
            "PUBG",
            "Restoration Shaman", "Enhancement Shaman", "Elemental Shaman",
            "Restoration Druid", "Feral Druid", "Balance Druid", "Guardian Druid",
            "PUBG",
            "Vengeance Demon Hunter", "Havoc Demon Hunter",
            "Frost Death Knight", "Unholy Death Knight", "Blood Death Knight",
            "PUBG",
            "Assassination Rogue", "Subtlety Rogue", "Outlaw Rogue",
            "Brewmaster Monk", "Windwalker Monk", "Mistweaver Monk",
            "PUBG"
        ];

    var classIcons = [
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/3/3e/Hunter_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/0/04/Mage_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/5e/Warlock_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/50/Priest_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/4/4f/Warrior_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/8/82/Paladin_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/d/d2/Shaman_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/e/ec/Druid_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/0/00/Demon_Hunter_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/5/5d/Death_Knight_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/0/02/Rogue_Crest.png",
      "https://d1u5p3l4wpay3k.cloudfront.net/wowpedia/a/a4/Pandaren_Crest.png",
      "https://i.imgur.com/nG6YrSP.jpg"
    ];

    var randomNum = Math.floor(Math.random() * classList.length);

    var text = classList[randomNum];
    var photo;

    if ([0,1,2].indexOf(randomNum) !== -1) {
      photo = classIcons[0];
    } else if ([3,4,5].indexOf(randomNum) !== -1) {
      photo = classIcons[1];
    } else if ([7,8,9].indexOf(randomNum) !== -1) {
      photo = classIcons[2];
    } else if ([10,11,12].indexOf(randomNum) !== -1) {
      photo = classIcons[3];
    } else if ([14,15,16].indexOf(randomNum) !== -1) {
      photo = classIcons[4];
    } else if ([17,18,19].indexOf(randomNum) !== -1) {
      photo = classIcons[5];
    } else if ([21,22,23].indexOf(randomNum) !== -1) {
      photo = classIcons[6];
    } else if ([24,25,26,27].indexOf(randomNum) !== -1) {
      photo = classIcons[7];
    } else if ([29,30].indexOf(randomNum) !== -1) {
      photo = classIcons[8];
    } else if ([31,32,33].indexOf(randomNum) !== -1) {
      photo = classIcons[9];
    } else if ([35,36,37].indexOf(randomNum) !== -1) {
      photo = classIcons[10];
    } else if ([38,39,40].indexOf(randomNum) !== -1) {
      photo = classIcons[11];
    } else {
      photo = classIcons[12];
    }

    const embed = {
      "color": 2863615,
      "footer": {
        "text": "By Dribbles"
      },
      "thumbnail": {
        "url": photo
      },
      "fields": [
        {
          "name": "YOU SHOULD PLAY",
          "value": text
        }
      ]
    };
    message.channel.send({ embed });
    console.log(message.createdAt + " -> I successfully replied with class: " + text);
  }
}

module.exports = Drips;
