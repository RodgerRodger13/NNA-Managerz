const Discord = require("discord.js");
module.exports = {
    name: 'group',
    description: "group",
    execute (message, args){
            const taggedUser = message.mentions.users.first();
            if (!message.mentions.users.size){
                const embed1 = new Discord.MessageEmbed()
                    .setTitle('NNA Roblox Group')
                    .setURL('https://www.roblox.com/groups/8429016/Northern-Newspaper-Association#!/about')
                    .setThumbnail(message.guild.iconURL())
                    .setDescription('Please join the NNA Roblox group.')
                    .setColor('#f5b318')
                    .setFooter(message.author.username)
                return message.channel.send(embed1);
            }
        }
}


