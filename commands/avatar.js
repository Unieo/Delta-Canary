const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "avatar",
  aliases: ["ava"],
  execute(message) {
    let mentions = message.mentions.users;
    let user = mentions.first();
    let avatar = mentions.size
      ? mentions.first().avatarURL({ format: "png", dynamic: true, size: 2048 })
      : message.author.avatarURL({ format: "png", dynamic: true, size: 2048 });
    if (mentions.size > 0) {
      const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setTitle(`${user.username}'s Avatar:`)
        .setImage(`${avatar}`)
        .setTimestamp()
        .setFooter(`${config.copyright}`);
      message.channel.send({ embed });
    } else {
      const embed = new Discord.MessageEmbed()
        .setColor(Math.floor(Math.random() * 16777215))
        .setTitle(`${message.author.username}'s Avatar:`)
        .setImage(`${avatar + "?size=2048"}`)
        .setTimestamp()
        .setFooter(`${config.copyright}`);
      message.channel.send({ embed });
    }
  },
};
