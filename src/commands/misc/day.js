const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'day',
    description: 'tells the date and time in your timezone',
    aliases: ['day'],
    category: 'misc',
    async run(client, message, args) {

        const locale = message.author.locale || 'en-US';
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        const formatter = new Intl.DateTimeFormat(locale, { timeZone, weekday: 'long' });
        const formatter2 = new Intl.DateTimeFormat(locale, { hour: 'numeric', minute: 'numeric' });
        const date = new Date();
        const options = { timeZone };
        const formattedTime = formatter2.format(date);
        const dayOfWeek = formatter.format(new Date());

        //message.channel.send(`it is currently ${dayOfWeek} in ${timeZone} and is currently ${formattedTime}`);
        const TimeEmbed = new MessageEmbed()
            .setTitle('The time')
            .addFields({ name: 'Day', value: `It is currently ${dayOfWeek} in ${timeZone}` }, { name: 'Time', value: `the time in ${timeZone} is currently ${formattedTime}` })

        message.channel.send({ embeds: [TimeEmbed] });

    }

}