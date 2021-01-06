const Discord = require("discord.js");
const randomPuppy = require("random-puppy");
const config = require("../data/config.json");

module.exports = {
  name: "meme",
  cooldown: 5,
  execute(client, message, args) {
    let reddit = [
      "meme",
      "animemes",
      "MemesOfAnime",
      "animememes",
      "AnimeFunny",
      "dankmemes",
      "dankmeme",
      "wholesomememes",
      "MemeEconomy",
      "techsupportanimals",
      "meirl",
      "me_irl",
      "2meirl4meirl",
      "AdviceAnimals",
    ];

    let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

    randomPuppy(subreddit).then((url) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Here's Your Meme")
        .setImage(url)
        .setColor(Math.floor(Math.random() * 16777215))
        .setFooter(`${config.copyright}`)
        .setTimestamp();
      return message.channel.send({ embed });
    });
  },
};
