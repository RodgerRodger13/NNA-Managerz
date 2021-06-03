const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'reactionrolefactions',
    description: 'Gives reaction-role options for faction members',
    category: 'Reaction-Role',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    async execute(client, message, args) {
        if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
        let roles = {
            '🟩': 'Irish Expeditionary Forces',
            '⭐': 'North Union',
            '👑': 'Le Cuirassé Mercenaires',
            '🐺': 'The Wolf Militia'
        }
        let embed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle('React to get roled in your Faction!')
            .setDescription('React to get your Faction Role. This will give you access to its chats and voice channels \n\n'
                + Object.entries(roles).map((key) => key.join(" for ")).join("\n"))
        let msg = await message.channel.send(embed);
        Object.keys(roles).forEach(async emoji => {
            try {
                await msg.react(emoji)
            } catch (err) {}
        })
    }
}  

