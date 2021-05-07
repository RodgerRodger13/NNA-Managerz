const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'group',
    description: "Gives the NNA Roblox grop link",
    category: 'Server Setup',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setTitle('NNA Roblox Group')
            .setURL('https://www.roblox.com/groups/8429016/Northern-Newspaper-Association#!/about')
            .setThumbnail(message.guild.iconURL())
            .setDescription('Please join the NNA Roblox group!')
            .setColor('#f5b318')
            .setFooter(message.author.username)
        return message.channel.send(embed);
    }
}