const moment = require('moment');

module.exports = {
    name: 'oldday',
    description: 'the old day command',
    aliases: [''],
    category: 'misc',
    async run(client, message, args) {
        const currentDay = moment().format('dddd');
        message.channel.send(`Today is ${currentDay}.`);
    }

}