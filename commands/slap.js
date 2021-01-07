const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "slap",
  cooldown: 5,
  async execute(client, message, args) {
    let replies = [
      "You Serious!",
      "Im dirty, wash me, then do it, lol",
      "Wash your hands first, lol",
      "I will make U pass out if you slap me!",
      "Im busy, dnd",
      "Ok just slap gentle, lol",
      "No, I dont want you to dirty my silver steel face again!",
      "U think Ima Toy? Well Ima kick ur ass!",
      "I don't have cheeks kiddo",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send("You need to mention someone to slap them");
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send("You slapped yourself, **lol** :)");

    const { body } = await superagent.get("https://nekos.life/api/v2/img/slap");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(
        `${message.author.username}, you slapped ${user.username} :eyes:`
      )
      .setImage(body.url)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
