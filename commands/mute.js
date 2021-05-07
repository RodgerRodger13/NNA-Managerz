const { Client, Message } = require('discord.js')
const ms = require('ms');

module.exports = {
    name: 'mute',
    description: "Mutes a member",
    usage: '@user',
    category: 'Admin',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    execute(client, message, args) {
        const target = message.mentions.users.first();
        if (target) {
            if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Reader');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
            let memberTarget = message.guild.members.cache.get(target.id);
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> **has been muted**`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **has been muted for ${ms(ms(args[1]))}**`);
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('**I cannot find that member**');
        }
    }
}