const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "info",
  cooldown: 5,
  execute(client, message, args) {
    let about = "This bot was made for the purpose of fun and entertainment.";
    let credit =
      "A big thank you to my friend **Lookin** in helping me solve bugs etc.";
    let licence = "MIT";
    const embed = new Discord.MessageEmbed()
      .setTitle("Bot Info")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("About:", about)
      .addField("Credit:", credit)
      .addField("Licence:", licence)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    message.channel.send({ embed });
  },
};
