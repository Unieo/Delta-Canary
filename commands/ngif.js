const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "ngif",
  cooldown: 5,
  async execute(client, message, args) {
    const { body } = await superagent.get("https://nekos.life/api/v2/img/ngif");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(`OwO, Heres your Neko Gif`)
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
