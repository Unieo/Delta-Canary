const Discord = require("discord.js");
const pagination = require("discord.js-pagination");
const config = require("../data/config.json");
const help = require("../data/help.json");

module.exports = {
  name: "help",
  cooldown: 30,
  execute(client, message, args) {
    const intro = new Discord.MessageEmbed()
      .setTitle("Your help has arrived!")
      .setDescription(
        "Hello! Thanks for trying out Delta! It helps us out immensely. \n \n React with :rewind: to move back and :fast_forward: to move to the next page \n \n **Page 1:** :interrobang: Intro (This Page) \n **Page 2:** :partying_face: Fun Commands \n **Page 3:** :radio_button: Utility Commands \n **Page 4:** :man_gesturing_no: Action Commands \n **Page 5:** :mammoth: Animal Commands \n **Page 6:** :game_die: Game Commands \n \n Join our bot's [Support Server](https://discord.gg/BfwHnRf6bU) for bot updates, bug fixes and downtime reminders!"
      )
      .setColor(Math.floor(Math.random() * 16777215))
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const fun = new Discord.MessageEmbed()
      .setTitle(":partying_face: Fun Commands!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Fun:", help.fun)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const utility = new Discord.MessageEmbed()
      .setTitle(":radio_button: Utility Commands!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Utility:", help.utility)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const action = new Discord.MessageEmbed()
      .setTitle(":man_gesturing_no: Action Commands!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Actions:", help.action)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

		const animal = new Discord.MessageEmbed()
			.setTitle(":mammoth: Animal Commands!")
			.setColor(Math.floor(Math.random() * 16777215))
			.addField("Animals:", help.animal)
			.setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const game = new Discord.MessageEmbed()
      .setTitle(":game_die: Game Commands!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Games:", help.game)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    const pages = [intro, fun, utility, action, animal, game];

    const emojiList = ["⏪", "⏩"];

    const timeout = "120000";

    pagination(message, pages, emojiList, timeout);
  },
};
