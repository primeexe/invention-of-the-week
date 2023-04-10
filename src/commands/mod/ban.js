const { MessageEmbed } = require("discord.js");

module.exports = {

    name: 'ban',
    description: 'ban the pinged memeber from the server',
    aliases: ['ban'],
    category: 'admin',
    permissions: 'moderator',
    async run(client, message, args) {

        if (message.mentions.members.first()) {
            try {
                message.mentions.members.first().ban();

            } catch {
                let banembed = new MessageEmbed()
                    .setTitle(`Banned a memeber`)
                    .addFields(`@` + $message.mentions.members.first() + `Was banned from the server`)
                    .setTimestamp
                message.channel.send({ embeds: [banembed] })
            }
        }
    }
}