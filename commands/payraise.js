const { Client, Message } = require('discord.js')

module.exports = {
    name: 'payraise',
    description: 'Requests a payraise',
    category: 'Writer',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    execute(client, message, args) {
        message.channel.send(`**payment denied cause i am poor**`)
    },    
};