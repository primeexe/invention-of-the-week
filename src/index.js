require("dotenv").config();
const config = require('../config.json')
const fs = require("fs");
const { Client, Intents, Message, Collection } = require('discord.js');
const moment = require('moment-timezone');


const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_BANS,
        Intents.FLAGS.GUILD_INTEGRATIONS,
        Intents.FLAGS.GUILD_INVITES,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_PRESENCES
    ],
    allowedMentions: { parse: ["roles", "users", "everyone"] },
    partials: ['USER', 'CHANNEL', 'GUILD_MEMBER', 'MESSAGE', 'REACTION'],
    presence: {
        activities: [{
            name: `F1 races`,
            type: 're-watching'
        }]
    }
})

const sendMessagesaturday = () => {
    const nowsat = moment.utc();
    if (nowsat.day() === 6 && nowsat.hour() === 10) {
        const channel = client.channels.cache.get('1092889845040435362');
        if (channel) {
            channel.send('This is a test saturday reminder to vote for the most progress made on the inventions!');
        }
    }
};
const interval1 = 60 * 1000; // 1 minute
setInterval(sendMessagesaturday, interval1);

const sendMessagesunday = () => {
    const nowsun = moment.utc();
    if (nowsun.day() === 7 && nowsun.hour() === 00 && nowsun.minute() === 35) {
        const channel = client.channels.cache.fetch('1092889845040435362');
        if (channel) {
            channel.send('This is a test sunday reminder to vote for the most progress made on the inventions!');
            console.log(`message has hopefully been sent`)
        }
    }
};
const interval2 = 60 * 1000; // 1 minute
setInterval(sendMessagesunday, interval2);

const sendMessagethursday = () => {
    const nowthur = moment.utc();
    if (nowthur.day() === 4 && nowthur.hour() === 10) {
        const channel = client.channels.cache.get('1092889845040435362');
        if (channel) {
            channel.send('This is a test thursday reminder to vote for the most progress made on the inventions!');
        }
    }
};

const interval3 = 60 * 1000; // 1 minute
setInterval(sendMessagethursday, interval3);

//commands
client.commands = new Collection()

// collection of the command categories which are the folders in the commands folder
client.categories = fs.readdirSync('./src/commands')

// loads the commands
require('./handlers/command')(client)

// loads the events
require('./handlers/event')(client)

client.login(config.token);