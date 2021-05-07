const { Client, Message } = require('discord.js')

module.exports = {
    name: 'server',
    description: "Sends name and server count of the NNA",
    aliases: [],
    category: 'General Bot',
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    execute (client, message, args) {
        message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);
    },
};