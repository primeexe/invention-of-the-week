const { MessageEmbed } = require("discord.js");

module.exports = {

    name: 'kick',
    description: 'kicks the pinged memeber from the server',
    aliases: ['kick'],
    category: 'admin',
    permissions: 'moderator',
    async run(client, message, args) {

        if (message.mentions.members.first()) {
            try {
                message.mentions.members.first().kick();

            } catch {
                let kickembed = new MessageEmbed()
                    .setTitle(`Kicked a memeber`)
                    .addField(`@` + $message.mentions.members.first() + `was kicked from the server`)
                    .setTimestamp
                message.channel.send({ embeds: [kickembed] })
            }
        }
    }
}