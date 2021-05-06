const Discord = require("discord.js");
module.exports = {
    name: 'avatar',
    description: "Avatar",
    execute (message, args){
            const taggedUser = message.mentions.users.first();
            if (!message.mentions.users.size){
                const embed1 = new Discord.MessageEmbed()
                    .setImage(message.author.displayAvatarURL())
                    .setTitle(message.author.username)
                    .setColor('#f5b318')
                    .setFooter('Made by RodgerRodger13')
                    .setTimestamp()

                return message.channel.send(embed1);
            }
            const embed2 = new Discord.MessageEmbed()
                .setImage(taggedUser.displayAvatarURL())
                .setTitle(taggedUser.username)
                .setColor('#f5b318')
                .setFooter('Made by RodgerRodger13')
                .setTimestamp()
            message.channel.send(embed2)
        }
}













