const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const config = require("../data/config.json");

module.exports = {
  name: "bird",
  cooldown: 10,
  execute(client, message, args) {
    let reddit = [
      "birds",
      "birdpics",
      "birding",
      "birdstakingthetrain",
      "birdsofprey",
    ];

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then((url) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Here's Your Bird")
        .setImage(url)
        .setColor(Math.floor(Math.random() * 16777215))
        .setFooter(`${config.copyright}`)
        .setTimestamp();
      return message.channel.send({ embed });
    });
  },
};
