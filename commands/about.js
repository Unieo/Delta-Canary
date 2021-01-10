const Discord = require("discord.js");
const config = require("../data/config.json");

module.exports = {
  name: "about",
  aliases: ["info"],
  cooldown: 5,
  execute(client, message, args) {
    let about = "This bot was made for the purpose of fun and entertainment.";
    let credit =
      "A big thank you to my friend **Lookin** in helping me solve bugs etc.";
    let licence = "MIT";
    let sourceCode = `Click [here](${config.source}) to go to GitHub`;
    let version = `${config.version}`;
    let notes =
      "**Delta:** We recommend the official Delta bot for larger communities... [click here](https://discord.com/oauth2/authorize?client_id=786882695186874368&scope=bot&permissions=2147483647) to invite the bot!\n**Delta Beta:** Like Stable Builds but Awesome Features? Or do you just want to test out new feature's before anyone else? [click here](https://discord.com/oauth2/authorize?client_id=796231105665040414&scope=bot&permissions=2147483647) to invite the Beta version of Delta!";
    const embed = new Discord.MessageEmbed()
      .setTitle("Bot Info")
      .setColor(Math.floor(Math.random() * 16777215))
      .addField("About:", about)
      .addField("Version", version)
      .addField("Credit:", credit)
      .addField("Licence:", licence)
      .addField("Source Code:", sourceCode)
      .addField("Other Bots:", notes)
      .setTimestamp()
      .setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);

    message.channel.send({ embed });
  },
};
