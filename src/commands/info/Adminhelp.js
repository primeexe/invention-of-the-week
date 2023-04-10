const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'adminhelp',
    description: 'See all of the admin commands',
    aliases: ['ah'],
    category: 'info',
    permissions: 'moderator',
    async run(client, message, args) {
        let adminhelpEmbed = new MessageEmbed() // refactor this
            .setColor('#fcd93a')
            .setThumbnail("https://cdn.discordapp.com/attachments/915002868451381291/939681957263077436/S.gif")
            .setTitle('Commands')
            .setDescription('This is the full list of admin commands the bot can run. The prefix for the bot is - ')
            .setThumbnail("https://cdn.discordapp.com/attachments/957590766165827634/958499197315874876/S.gif")
            .addFields({ name: '-Live', value: 'Pings everyone to notify that Banan has gone live' }, { name: '-clearchat (amount)', value: 'Deletes the amount set as long as they were sent within 14 days. Aliases: [cc]' }, { name: '-kick (user)', value: 'Kicks the specified user from the server' }, { name: '-ban (user)', value: 'Bans the specified user from the server' },


            )
            .setFooter({ text: "Michael Masi V2 Live now! Developed by tonyG and Curious George" })


        message.channel.send({ embeds: [adminhelpEmbed] });
    }
}