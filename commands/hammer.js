const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "hammer",
  aliases: ["ham, throw"],
  cooldown: 5,
  execute(client, message, args) {
    let replies = [
      "Ima robot, leave me alone :persevere:",
      "Your Barbecue to fight against me, lol",
      "Every seen my muscles? No?! I'll show U! U ded now :)",
      "Wait, Im not ready!",
      "I dont like violence",
      "I killed U, ur face be like :zany_face:",
      "Who do think you are u r, I win lol",
      "I Forfit, I have other things to do :sweat_smile:",
    ];
    let result = Math.floor(Math.random() * replies.length);
    let user = message.mentions.users.first();
    if (!user)
      return message.channel.send(
        "Mention someone to throw the hammer at, **Dummy!**"
      );
    if (user.id == config.botid) return message.channel.send(replies[result]);
    if (user.id == message.author.id)
      return message.channel.send(`*Bruh*, ${user.username} suicided`);

    const embed = new Discord.MessageEmbed()
      .setTitle("Hammer Time!")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField(
        `${message.author.username} threw a hammer at ${user.username}. :hammer:  :eyes: **BAM**, lol`
      )
      .setTimestamp()
      .setFooter(`${config.copyright}`);
    message.channel.send({ embed });
  },
};
