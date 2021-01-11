const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const config = require("../data/config.json");

module.exports = {
  name: "bird",
  cooldown: 10,
  execute(client, message, args) {
    randomPuppy("birdpics").then((url) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Here's Your Bird")
        .setImage(url)
        .setColor(Math.floor(Math.random() * 16777215))
        .setFooter(`${config.copyright}`)
        .setTimestamp();
      return message.channel.send({ embed });
    });
  },
};
