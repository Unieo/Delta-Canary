const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "meme",
  cooldown: 10,
  async execute(client, message, args) {
    const { body } = await superagent.get("https://some-random-api.ml/meme");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("Here's Your Meme")
      .setDescription(data.caption)
      .setImage(data.image)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
