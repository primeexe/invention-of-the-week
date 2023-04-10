const Discord = require('discord.js');
const channelID = '1092861841883013130';

module.exports = {
    name: 'inventor',
    description: 'Inventor of the week',
    aliases: [''],
    category: 'misc',
    async run(client, message, args) {

        // Reminder on Sunday and Thursday
        ('message', (message) => {
            const today = new Date().getDay();
            if (today === 2 || today === 4) {
                const day = today === 0 ? 'Tuesday' : 'Thursday';
                if (message.channel.id === channelID && message.content === '') {
                    message.channel.send(`Hey everyone, it's ${day}! Don't forget to post your progress pictures and videos in this channel.`);
                }
            }
        });

        // Restrict posting after Monday and Friday
        ('message', (message) => {
            const today = new Date().getDay();
            if ((today === 1 || today === 5) && message.channel.id === channelID) {
                if (!message.member.hasPermission('ADMINISTRATOR') && message.attachments.size > 0) {
                    message.delete();
                    message.author.send(`Sorry, you can only post progress pictures and videos on Monday and Friday. You can still send messages in this channel.`);
                }
            }
        });

        // Voting on Saturday and announcing the winner on Sunday
        ('message', async(message) => {
            const today = new Date().getDay();
            if (today === 6 && message.channel.id === channelID) {
                const messages = await message.channel.messages.fetch();
                const voteEmojis = ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣'];
                const votes = new Map();
                messages.forEach((m) => {
                    if (m.author.bot || m.attachments.size === 0) return;
                    const userID = m.author.id;
                    if (votes.has(userID)) {
                        votes.set(userID, votes.get(userID) + 1);
                    } else {
                        votes.set(userID, 1);
                    }
                    for (const emoji of voteEmojis.slice(0, votes.size)) {
                        m.react(emoji);
                    }
                });
                let winnerID, winnerVotes = 0;
                votes.forEach((v, k) => {
                    if (v > winnerVotes) {
                        winnerID = k;
                        winnerVotes = v;
                    }
                });
                const winner = message.guild.members.cache.get(winnerID);
                const role = message.guild.roles.cache.find((r) => r.name === 'Inventor of the Week');
                if (role && winner) {
                    await winner.roles.add(role);
                    message.channel.send(`Congratulations to <@${winnerID}> for winning Inventor of the Week with ${winnerVotes} votes!`);
                }
            }
        });

    }
}