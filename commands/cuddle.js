const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "cuddle",
  aliases: ["cud"],
  async execute(message) {
    let replies = [
      "*Aww!* cuddles you.",
      "Your Cute, ok I'll cuddle you",
      "OK, lol",
      "IDK you, so no",
      "You Serious? Get away!",
      "I'm not cuddling a COVID patient",
      "I hate cuddling clowns like you",
      "Nope.",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to cuddle them, **Dummy!**");
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't cuddle yourself, **lol** :)"
      );

    const { body } = await superagent.get(
      "https://nekos.life/api/v2/img/cuddle"
    );

    const embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} cuddled ${user.username} OwO`)
      .setColor(Math.floor(Math.random() * 16777215))
      .setTimestamp()
      .setImage(body.url)
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
