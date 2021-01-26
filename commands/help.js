const Discord = require("discord.js");
const pagination = require("discord.js-pagination");
const config = require("../data/config.json");
const help = require("../data/help.json");

module.exports = {
  name: "help",
  cooldown: 2,
  execute(client, message, args) {
    const intro = new Discord.MessageEmbed()
      .setTitle("Your help has arrived!")
      .setDescription(
        "Hello! Thanks for trying out Delta! It helps us out immensely. \n \n React with ⬅️ to move back and ➡️ to move to the next page \n \n **Page 1:** ⁉️ Intro (This Page)  \n **Page 2:** 💥 Reddit Commands \n **Page 3:** 🔘 Utility Commands \n **Page 5:** 🐵 Animal Commands \n **Page 6:** 🎲 Game Commands \n **Page 7:** 🔷 Other Commands \n \n Join our bot's [Support Server](https://discord.gg/BfwHnRf6bU) for bot updates, bug fixes and downtime reminders!"
      )
      .setColor(Math.floor(Math.random() * 16777215))
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const reddit = new Discord.MessageEmbed()
      .setTitle("💥 Reddit Commands")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Reddit:", help.reddit)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const utility = new Discord.MessageEmbed()
      .setTitle("🔘 Utility Commands")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Utility:", help.utility)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const animal = new Discord.MessageEmbed()
      .setTitle("🐵 Animal Commands")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Animals:", help.animal)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const game = new Discord.MessageEmbed()
      .setTitle("🎲 Game Commands")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Games:", help.game)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const other = new Discord.MessageEmbed()
      .setTitle("🔷 Other Commands")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Other:", help.other)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const pages = [intro, reddit, utility, animal, game, other];

    const emojiList = ["⬅️", "➡️"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  },
};
