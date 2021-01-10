const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "version",
  aliases: ["v", "build"],
  cooldown: 5,
  execute(client, message, args) {
    const embed = new Discord.MessageEmbed()
      .setTitle("Current Version/Build")
      .setDescription(`${config.version}`)
      .setColor(Math.floor(Math.random() * 16777215))
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
