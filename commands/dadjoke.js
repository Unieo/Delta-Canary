const dadjoke = require("../data/dadjoke.json");
const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "dadjoke",
  aliases: ["dj"],
  cooldown: 5,
  execute(client, message, args) {
    args = args.join(" ");

    const embed = new Discord.MessageEmbed()
      .setTitle("Here's your Dad Joke")
      .setColor(Math.floor(Math.random() * 16777215))
      .setDescription(
        `**${dadjoke[Math.floor(Math.random() * dadjoke.length)]}**`
      )
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
