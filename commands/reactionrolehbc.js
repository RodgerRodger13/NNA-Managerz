const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'reactionrolehbc',
    description: "Gives reaction-role options for HBC members and their divisions",
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
            '⬜': 'Hudsons Highlanders',
            '💂': 'Grenadier Guardsmen',
            '🕵': 'MFP',
            '🥁': 'DFC',
            '🟪': '6th Company',
            '🟥': '5th Company',
            '🟫': '4th Company',
            '🟦': '3rd Company',
            '🟩': '2nd Company',
            '🟨': '1st Company'
        }
        let embed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle('React to get roled in your division!')
            .setDescription('React to get your HBC division role. This will give you access to its chats and voice channels \n\n'
                + Object.entries(roles).map((key) => key.join(" for ")).join("\n"));
        let msg = await message.channel.send(embed);
        Object.keys(reactionRoles).forEach(emoji => {
            try {
                await msg.react(emoji)
            } catch (err) {}
        })
    }
}  