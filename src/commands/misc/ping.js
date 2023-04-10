const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'ping',
    description: 'Check the bot\'s latency',
    aliases: [''],
    category: 'misc',
    async run(client, message, args) {

        message.channel.send('Pinging...')
            .then(m => {
                const latency = m.createdTimestamp - message.createdTimestamp
                const apiLatency = Math.round(client.ws.ping)


                const embed = new MessageEmbed()
                    .setTitle('Pong!')

                .addFields('Latency', `\`${latency}\`ms`)
                    .addFields('API Latency', `\`${apiLatency}\`ms`)
                    .setColor('RANDOM')

                m.edit({ content: null, embeds: [embed] })
            })

    }
}