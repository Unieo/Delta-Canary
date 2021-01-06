const Discord = require("discord.js");
const config = require("../data/config.json");
const help = require("../data/help.json");

module.exports = {
  name: "help",
  execute(message) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Help is here!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Fun:", help.fun)
      .addField("Utility:", help.utility)
      .addField("Actions:", help.action)
      .addField("Games:", help.game)
      .setDescription("**Type `dc!about` to get more info on the bot**")
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
    message.channel.send({ embed });
  },
};
