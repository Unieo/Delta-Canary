const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const config = require("../data/config.json");

module.exports = {
  name: "anime",
  cooldown: 10,
  execute(client, message, args) {
    randomPuppy("AnimeART").then((url) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Here's Your Anime")
        .setImage(url)
        .setColor(Math.floor(Math.random() * 16777215))
        .setFooter(`${config.copyright}`)
        .setTimestamp();
      return message.channel.send({ embed });
    });
  },
};
