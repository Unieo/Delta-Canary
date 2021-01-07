const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "smack",
  cooldown: 5,
  execute(client, message, args) {
    let replies = [
      "Ima robot, leave me alone :persevere:",
      "Owwwie, you hurt me! :tired_face:",
      "Owwwie, that hurt me! :tired_face:",
      "Who do think you are u r, I win lol",
      "I give up, I have other things to do :sweat_smile:",
      "I dont like violence",
      "I do not tolerate violence, but I do sometimes :sweat_smile:.",
      "I killed U, ur face be like :zany_face:",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();

    if (!user)
      return message.channel.send("You need to mention someone to smack them");
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send("You smacked yourself, **lol** :)");

    const embed = new Discord.MessageEmbed()
      .setColor(Math.floor(Math.random() * 16777215))
      .setTitle(`${message.author.username} smacked ${user.username} lol`)
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
