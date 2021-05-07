const { Client, Message, MessageEmbed } = require('discord.js')
module.exports = {
    name: 'avatar',
    description: "Sends your avatar",
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
            const taggedUser = message.mentions.users.first();
            let embed = new MessageEmbed()
            .setColor('#f5b318')
            .setFooter('Made by RodgerRodger13')
            .setTimestamp()
            if (!message.mentions.users.size){
                embed.setImage(message.author.displayAvatarURL({dynamic: true}))
                    .setTitle(message.author.username)
                return message.channel.send(embed);
            }
            embed.setImage(taggedUser.displayAvatarURL({dynamic: true}))
                .setTitle(taggedUser.username)
            message.channel.send(embed)
        }
}













