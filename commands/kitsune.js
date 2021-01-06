const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "kitsune",
  aliases: ["ks"],
  async execute(message) {
    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/fox_girl"
    );

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("OwO, Here's your Fox Girl")
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
