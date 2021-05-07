const { Client, Message } = require('discord.js')

module.exports = {
    name: 'unmute',
    description: "Unmutes a member",
    aliases: [],
    usage: '@user',
    category: 'Admin',
    /**
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     */
    execute(client, message, args){
        const target = message.mentions.users.first();
        if(!target) return message.channel.send('**I cannot find that member**')
        let mainRole = message.guild.roles.cache.find(role => role.name === 'Reader');
        let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
        let memberTarget= message.guild.members.cache.get(target.id);
        memberTarget.roles.remove(muteRole.id);
        memberTarget.roles.add(mainRole.id);
        message.channel.send(`<@${memberTarget.user.id}> **has been unmuted**`)
        .catch();
    }
}