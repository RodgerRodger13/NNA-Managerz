const { Client, Message } = require('discord.js')

module.exports = {
    name: 'avatarlink',
    description: "Sends your avatar's link",
    category: 'General Bot',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
     execute (client, message, args) {
        if (!message.mentions.users.size) return message.channel.send(`**Your avatar:** <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        const avatarList = message.mentions.users.map(user => {`**${user.username}'s avatar:** <${user.displayAvatarURL({ format: "png", dynamic: true })}>`});
        message.channel.send(avatarList.join('\n'));
    }
}