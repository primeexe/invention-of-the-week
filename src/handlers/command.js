const fs = require('fs')
const logger = require('../misc/logger')
const chalk = require('chalk')

module.exports = (client) => {
    for (const folder of client.categories) {
        if (folder === 'context') continue

        const commandFiles = fs.readdirSync(`./src/commands/${folder}`).filter(file => file.endsWith('js') || file.endsWith('ts')) // extra typescript support
        logger('Load', 'Loading ' + chalk.underline.white(folder) + ' ' + 'commands...\n' )
        for (const file of commandFiles) {
            const command = require(`../commands/${folder}/${file}`)
            client.commands.set(command.name, command)
            logger('Command', chalk.magenta`${file}` + ' ' + 'has been loaded!')
        }
    }
}
