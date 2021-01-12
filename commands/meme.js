const Discord = require("discord.js");
const axios = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "meme",
  cooldown: 10,
  async execute(client, message, args) {
    const { image } = await axios.get("https://some-random-api.ml/meme");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle("Here's Your Meme")
      .setImage(image)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    return message.channel.send({ embed });
  },
};
