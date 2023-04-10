const Discord = require('discord.js');
const moment = require('moment-timezone');

module.exports = {
    name: 'saturday reminder',
    run(client) {

        const sendMessage = () => {
            const now = moment.utc();
            if (now.day() === 6 && now.hour() === 10) {
                const channel = client.channels.cache.get('1092889845040435362');
                if (channel) {
                    channel.send('This is a test saturday reminder to vote for the most progress made on the inventions!');
                }
            }
        };

        const interval = 60 * 1000; // 1 minute
        setInterval(sendMessage, interval);
    }
}