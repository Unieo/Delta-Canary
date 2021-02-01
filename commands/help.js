const Discord = require("discord.js");
const config = require("../data/config.json");
const helpMsg = require("../data/help.json");

module.exports = {
	name: "help",
	cooldown: 2,
	async execute(client, message, args) {
		let help = args.join(" ").toLowerCase();

		if (help === "") {
			const embed = new Discord.MessageEmbed()
				.setTitle("List of Delta's Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("💥 Reddit Commands", `\`${config.prefix}help reddit\``, true)
				.addField("🔘 Utility Commands", `\`${config.prefix}help utility\``, true)
				.addField("🐵 Animal Commands", `\`${config.prefix}help animal\``, true)
				.addField("🎲 Game Commands", `\`${config.prefix}help game\``, true)
				.addField("🔷 Other Commands", `\`${config.prefix}help other\``, true)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send({ embed });
		} else if (help === "reddit") {
			let reddit = new Discord.MessageEmbed()
				.setTitle("💥 Reddit Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("Reddit:", helpMsg.reddit)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send(reddit)
		} else if (help === "utility") {
			let utility = new Discord.MessageEmbed()
				.setTitle("🔘 Utility Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("Utility:", helpMsg.utility)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send(utility)
		} else if (help === "animal") {
			let animal = new Discord.MessageEmbed()
				.setTitle("🐵 Animal Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("Animals:", helpMsg.animal)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send(animal)
		} else if (help === "game") {
			let game = new Discord.MessageEmbed()
				.setTitle("🎲 Game Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("Games:", helpMsg.game)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send(game)
		} else if (help === "other") {
			let other = new Discord.MessageEmbed()
				.setTitle("🔷 Other Commands")
				.setColor(Math.floor(Math.random() * 16777215))
				.addField("Others:", helpMsg.other)
				.setTimestamp()
				.setFooter(`Delta is made by ${config.ownername} • ${config.copyright}`);
			message.channel.send(other)
		}
	},
};
