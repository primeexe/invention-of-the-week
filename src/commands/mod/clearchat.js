module.exports = {
    name: 'clearchat',
    description: 'Clears the specified amount of messages',
    aliases: ['cc'],
    category: 'admin',
    permissions: 'moderator',
    async run(client, message, args) {
        message.channel.send(`Deleting ${args} Messages...`)
            .then(m => {
                if (!args[0]) return message.reply('please specify and amount of messages to delete!');
                if (isNaN(args[0])) return message.reply('please specify and amount of messages to delete!');

                if (args[0] > 100) return message.reply('I cannot delete more than 100 messages at once');
                if (args[0] < 1) return message.reply('you have to delete at least 1 message');

                message.channel.bulkDelete(args[0], true);
            })





    }
}