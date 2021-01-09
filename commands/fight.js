const Discord = require("discord.js");
const fights = require("../data/fights.json");
const config = require("../data/config.json");

module.exports = {
  name: "fight",
  cooldown: 20,
  execute(client, message, args) {
    let replies = [
      "*Seriously?* Delta won :wink:",
      "Owwwie, you hurt me! :tired_face:",
      "Owwwie, that hurt me! :tired_face:",
      "Who do think you are u r, I win lol",
      "I Forfit, I have other things to do :sweat_smile:",
      "I dont like violence",
      "I do not tolerate violence, but I do sometimes :sweat_smile:.",
      "I killed U, ur face be like :zany_face:",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send("Mention someone to feed them, **Dummy!**");
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send(
        "You know you can't fight yourself, **lol** :)"
      );

    const embed = new Discord.MessageEmbed()
      .setTitle("Fight Time!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField(
        `${message.author.username} is fighting ${user.username} :eyes:`,
        fights[Math.floor(Math.random() * fights.length)]
      )
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
