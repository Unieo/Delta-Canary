const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "birb",
  cooldown: 10,
  async execute(client, message, args) {
    const { body } = await superagent.get(
      "https://some-random-api.ml/img/birb"
    );

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("Here's Your Birb")
      .setImage(data.link)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
