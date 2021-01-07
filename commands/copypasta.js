const copypastas = require("../data/copypasta.json");

module.exports = {
  name: "copypasta",
  aliases: ["cp, copy"],
  cooldown: 5,
  execute(client, message, args) {
    args = args.join(" ");
    message.channel.send(
      `${copypastas[Math.floor(Math.random() * copypastas.length)]}`
    );
  },
};
