const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "neko",
  async execute(message) {
    const { body } = await superagent.get("https://nekos.life/api/neko");
    let link = body.neko;

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("Here's Your Neko OwO")
      .setImage(link)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
