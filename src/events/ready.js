const logger = require('../misc/logger')
const chalk = require("chalk");


module.exports = {
    name: 'ready',
    run(client) {
        logger('Ready', 'Logged in as' + ' ' + chalk.bold.white(client.user.username) + ' ' + 'and ready to go!')

    }
}
