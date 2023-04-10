const { MessageEmbed, Emoji } = require('discord.js')

module.exports = {
    name: 'member',
    description: 'membercount of the server',
    aliases: ['members'],
    category: 'info',
    async run(client, message, args) {

        let timestampCreated = Math.round(message.guild.createdTimestamp / 1000)


        let MemberEmbed = new MessageEmbed()
            .setColor('#fcd93a')
            .setTitle(`member count for ${message.guild.name}`)
            .addFields(`Current guild members `, `${message.guild.memberCount}`)
            .addFields('Created at', `<t:${timestampCreated}:D>`)




        message.channel.send({ embeds: [MemberEmbed] })
    }
}