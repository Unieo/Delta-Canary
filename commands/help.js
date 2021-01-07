const Discord = require("discord.js");
const config = require("../data/config.json");
const { fun, utility, action, game } = require("../data/help.json");

module.exports = {
  name: "help",
  cooldown: 20,
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Help is here!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("Fun:", fun)
      .addField("Utility:", utility)
      .addField("Actions:", action)
      .addField("Games:", game)
      .setDescription("**Type `dc!about` to get more info on the bot**")
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
    message.channel.send({ embed });
  },
};
