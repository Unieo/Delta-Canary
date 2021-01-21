const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "tickle",
  aliases: ["tkl"],
  cooldown: 5,
  async execute(client, message, args) {
    let user = message.mentions.users.first();

    if (!user)
      return message.reply("You need to mention someone to tickle them");
    if (user.id === config.botid)
      return message.reply("No thanks, I'll skip!");
    if (user.id == message.author.id)
      return message.channel.send("Your dying from your own ticklesome laughter, lmao");
    const { body } = await superagent.get("https://nekos.life/api/v2/img/tickle");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(`${user.username}, you got tickled by ${message.author.username}`)
      .setTimestamp()
      .setImage(body.url)
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
