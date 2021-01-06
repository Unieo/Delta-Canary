const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./data/config.json");

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands/")
  .filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  client.commands.set(command.name, command);
}

client.on("ready", () => {
  console.log(`Delta is Alive!`);
  client.user.setActivity("d!help for help!", {
    type: "PLAYING",
  });
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  const args = message.content.slice(config.prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    client.commands.get("ping").execute(client, message);
  } else if (command === "8ball") {
    client.commands.get("8ball").execute(message, args);
  } else if (command === "about") {
    client.commands.get("about").execute(message);
  } else if (command === "advise") {
    client.commands.get("advise").execute(message);
  } else if (command === "avatar") {
    client.commands.get("avatar").execute(message);
  } else if (command === "cat") {
    client.commands.get("cat").execute(message);
  } else if (command === "cuddle") {
    client.commands.get("cuddle").execute(message);
  } else if (command === "dadjoke") {
    client.commands.get("dadjoke").execute(message, args);
  } else if (command === "dog") {
    client.commands.get("dog").execute(message);
  } else if (command === "meme") {
    client.commands.get("meme").execute(message);
  } else if (command === "feed") {
    client.commands.get("feed").execute(message);
  } else if (command === "neko") {
    client.commands.get("neko").execute(message);
  } else if (command === "kiss") {
    client.commands.get("kiss").execute(message);
  } else if (command === "fight") {
    client.commands.get("fight").execute(message);
  } else if (command === "hammer") {
    client.commands.get("hammer").execute(message);
  } else if (command === "help") {
    client.commands.get("help").execute(message, args);
  } else if (command === "kitsune") {
    client.commands.get("kitsune").execute(message, args);
  } else if (command === "uptime") {
    client.commands.get("uptime").execute(client, message);
  } else if (command === "owoify") {
    client.commands.get("owoify").execute(message, args);
  } else if (command === "coinflip") {
    client.commands.get("coinflip").execute(message);
  } else if (command === "copypasta") {
    client.commands.get("copypasta").execute(message, args);
  } else if (command === "ngif") {
    client.commands.get("ngif").execute(message);
  } else if (command === "pat") {
    client.commands.get("pat").execute(message);
  } else if (command === "poke") {
    client.commands.get("poke").execute(message);
  } else if (command === "roll") {
    client.commands.get("roll").execute(message);
  } else if (command === "rockpaperscissor") {
    client.commands.get("rockpaperscissor").execute(message, args);
  } else if (command === "serverinfo") {
    client.commands.get("serverinfo").execute(client, message);
  } else if (command === "shibe") {
    client.commands.get("shibe").execute(message);
  } else if (command === "slap") {
    client.commands.get("slap").execute(message);
  } else if (command === "smack") {
    client.commands.get("smack").execute(message);
  }
});

client.login(process.env.token);
