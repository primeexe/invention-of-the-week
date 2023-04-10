
const {prefix, modRoleID} = require('../../config.json')

module.exports = {
    name: 'messageCreate',
    async run(message, client) {
        if (message.author.bot) return
        if (message.content.match(new RegExp('^<@!?' + client.user.id + '>'))) return message.reply(`My prefix for this server is \`${prefix}\`.`)

        if (!message.guild && message.content.startsWith(prefix)) return message.channel.send('Hey! At the time being, you can only run commands in servers! Sorry!')

        if (!message.content.startsWith(prefix) || message.author.bot) return

        const args = message.content.slice(prefix.length).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()

        // Run commands by alias
        const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && (typeof cmd.aliases === 'string' ? commandName === cmd.aliases : cmd.aliases.includes(commandName)))

        //Invalid command
        if (!command) return

        let { permissions } = command


        if ((permissions === 'moderator' || command.category === 'mod') && !message.member.roles.cache.some(role => role.id === modRoleID)) return message.channel.send('You do not have the Permissions to execute this command.')

        try {
            command.run(client, message, args)
           // console.log(`\nCommand Ran!\nCommand: ${command.name}\nUser: ${message.author.username}\nGuild: ${message.guild ? message.guild.name : 'None'}\n`)
        }
        catch (err) {
            console.error(`\nThere was an error running the command ${command.name}!\nError: ${err}`);

        }
    }
}
