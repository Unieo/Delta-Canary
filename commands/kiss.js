const Discord = require("discord.js");
const superagent = require("superagent");
const config = require("../data/config.json");

module.exports = {
  name: "kiss",
  async execute(message) {
    let replies = [
      "Ewww, no.",
      "Nope",
      "I have some oil u can chew on, :)",
      "Im dirty, wash me, then do it",
      "Get outta here!",
      "Get outta my sight!",
      "Im busy",
      "I think im Robot-Drunk, MMMuuuah, there u got ur wish...",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to kiss them, **Dummy!**");
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't kiss yourself, **lol** :)"
      );

    const { body } = await superagent.get("https://nekos.life/api/kiss");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(`${message.author.username} kissed ${user.username}  :eyes:`)
      .setImage(body.url)
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
