const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'help',
    description: 'See all of the commands',
    aliases: ['h', 'commands'],
    category: 'info',
    async run(client, message, args) {
        let helpEmbed = new MessageEmbed() // refactor this
            .setColor('#34eb52')
            .setThumbnail("https://cdn.discordapp.com/attachments/957590766165827634/958499197315874876/S.gif")
            .setTitle('Commands')
            .setDescription('This is the full list of commands the bot can run. The prefix for the bot is - ')
            .setThumbnail("https://cdn.discordapp.com/attachments/957590766165827634/958499197315874876/S.gif")
            .addFields({ name: '-rules', value: 'Lists the server rules. Aliases: [r]' }, { name: '-serverinfo', value: 'See information about the server. Aliases: [si]' }, { name: '-ping', value: `Check the bot\'s latency.` }, )
            .setFooter({ text: "Inventor of the week Live now! Developed Curious George" })


        message.channel.send({ embeds: [helpEmbed] });
    }
}