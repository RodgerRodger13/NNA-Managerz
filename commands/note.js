const Discord = require('discord.js')


module.exports = {
    name: 'note',
    description: "information",
    execute (message, args){
        const suggestion = args.join(" ");
        const channel = message.guild.channels.cache.find(channel => channel.name === "paragraphs")
        if(!args.length){
            return message.reply('No information given!')
        }
        const embed = new Discord.MessageEmbed()
            .setColor('#f5b318')
            .setTitle(`New note`)
            .setFooter('By RodgerRodger13 and SquawkaZ')
            .setTimestamp()
            .addFields(
                {name: "Information", value: suggestion },
                {name: "From:", value: message.author.tag }
            )
        channel.send(embed)
        message.reply("Note has been sent")
    }
} 