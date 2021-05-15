const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'reactionrolecolo',
    description: "Gives reaction-role options members",
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
            '🧍': 'Colonist',
            '🔫': 'Hudson Bay Company'
        }
        let embed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle('React to get access to chats and to be given roles')
            .setDescription('React to the message to get roled \n\n'
                + Object.entries(roles).map((key) => key.join(" for ")).join("\n"));
        let msg = await message.channel.send(embed);
        Object.keys(reactionRoles).forEach(async emoji => {
            try {
                await msg.react(emoji)
            } catch (err) {}
        })
    }
}
