const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "dog",
  cooldown: 5,
  async execute(client, message, args) {
    const { body } = await superagent.get(
      "https://dog.ceo/api/breeds/image/random"
    );

    const embed = new Discord.MessageEmbed()
      .setTitle("Here's Your Dog")
      .setColor(Math.floor(Math.random() * 16777215))
      .setImage(body.message)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
