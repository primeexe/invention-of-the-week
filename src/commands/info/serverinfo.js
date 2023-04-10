const { MessageEmbed, Emoji } = require('discord.js')

module.exports = {
    name: 'serverinfo',
    description: 'See information about the server',
    aliases: ['si'], // optional
    category: 'info',
    async run(client, message, args) {

        let textChannels = message.guild.channels.cache.filter(ch => ch.type === 'GUILD_TEXT')
        let categoryChannels = message.guild.channels.cache.filter(ch => ch.type === 'GUILD_CATEGORY')
        let voiceChannels = message.guild.channels.cache.filter(ch => ch.type === 'GUILD_VOICE')

        let emojis = message.guild.emojis.cache.size
        let roles = message.guild.roles.cache.size

        let verificationLevel = message.guild.verificationLevel


        let timestampCreated = Math.round(message.guild.createdTimestamp / 1000)

        let serverIcon = message.guild.iconURL()


        let InfoEmbed = new MessageEmbed()
            .setColor('#fcd93a')
            .setTitle(`Server info for ${message.guild.name}`)
            .addFields('Guild owner', `<@${message.guild.ownerId}> (${message.guild.ownerId})`)
            .addFields(`Current guild members `, `${message.guild.memberCount}`)
            .addFields('Channel count ', `Text Channels: ${textChannels.size}\nCategories: ${categoryChannels.size}\nVoice Channels: ${voiceChannels.size}`)
            .addFields('Created at', `<t:${timestampCreated}:D>`)
            .addFields('Roles', `${roles.toString()}`, true)
            .addFields('Emojis', `${emojis.toString()}`, true)
            .addFields('Verification level', `${verificationLevel}`, true)
            .setThumbnail(serverIcon)





        message.channel.send({ embeds: [InfoEmbed] })
    }
}