const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'rank',
    description: "rank",
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
    async execute(client, message, args) {
        if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
        const target = message.mentions.members.first();
        if(!target) return message.channel.send({embed: {
                color: "RED",
                description: "You did not mention anyone!"
            }})
        const reactionRoles = {
            "1️⃣": "Apprentice Editor",
            "2️⃣": "Editor",
            "3️⃣": "Apprentice Reporter",
            "4️⃣": "Reporter",
            "5️⃣": "Senior Reporter",
            "6️⃣": "Apprentice Author",
            "7️⃣": "Author",
            "8️⃣": "Senior Author"
        }
        const shorthandRoles = {
            "ae": "Apprentice Editor",
            "e": "Editor",
            "ar": "Apprentice Reporter",
            "r": "Reporter",
            "sr": "Senior Reporter",
            "aa": "Apprentice Author",
            "a": "Author",
            "sa": "Senior Author"
        }
  

            
        let embed = new MessageEmbed()        
            .setColor('#f5b318')
            .setTitle('React to rank a Writer')
            .setFooter(target.user.username)
            .setDescription('React below \n\n' + Object.entries(reactionRoles).map((key) => key.join(" ")).join("\n"));
        let messageEmbed = await message.channel.send(embed);
        Object.keys(reactionRoles).forEach(emoji => {
            try {
                messageEmbed.react(emoji)
            } catch (err) {}
        })
        const filter = (reaction, user) => Object.keys(reactionRoles).includes(reaction.emoji.name) && user.id === message.author.id
        messageEmbed.awaitReactions(filter, { time: 30000, max: 1 })
        .then(async collected => {
            if(!collected?.first()) return message.channel.send('You did not react in time!')
            let response = collected.first().emoji.name
            let role = message.guild.roles.cache.find(role => role.name === reactionRoles[response]);
            if(!target.roles.cache.has(role.id)) {
                target.roles.add(role)
                let msg = await message.channel.send(`**role *${reactionRoles[response]}* added to** ${target.toString()}`);
                messageEmbed.delete({timeout: 5000})
                msg.delete({timeout: 5000})
            } else {
                target.roles.remove(role)
                let msg = await message.channel.send(`**role *${reactionRoles[response]}* removed from** ${target.toString()}`);
                messageEmbed.delete({ timeout: 5000 })
                msg.delete({timeout: 5000})
            }
        })
    }
}