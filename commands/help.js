const { Client, Message, MessageEmbed, User, MessageReaction, Collection } = require('discord.js')
const { prefix } = require('../config.json')

module.exports = {
    name: 'help',
    description: "Sets up a reaction role message!",
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    async execute(client, message, args) {
        const reactionOptions = {
            "1️⃣": "Admin",
            "2️⃣": "General Bot",
            "3️⃣": "Reaction-Role",
            "4️⃣": "Server Setup",
            "5️⃣": "Writer"
        }
        let embed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle('React for bot commands')
            .setThumbnail(message.guild.iconURL())
            .setDescription('\n\n' + Object.entries(reactionOptions).map((key) => key.join(" for ") + " Commands").join("\n"))
        /**
         * @type {Message}
         */
        let messageEmbed = await message.channel.send(embed)
        Object.keys(reactionOptions).forEach(emoji => {
            try {
                messageEmbed.react(emoji)
            } catch (err) {}
        })
        /**
         * 
         * @param {MessageReaction} reaction 
         * @param {User} user 
         * @returns 
         */
         const filter = (reaction, user) => Object.keys(reactionOptions).includes(reaction.emoji.name) && user.id === message.author.id
        messageEmbed.awaitReactions(filter, { time: 30000, max: 1 })
        .then(async collected => {
            if(!collected?.first()) return message.channel.send('You did not react in time!')
            let response = collected.first().emoji.name
            /**
             * @type {Collection}
             */
            let cmds = client.commands.filter(command => command?.category == reactionOptions[response])
            let helpEmbed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle(`NNA Manager ${reactionOptions[response]} Commands`)
            .addField('\u200b', '\u200b')
            .setFooter('Made by RodgerRodger13');
            cmds.each(command => helpEmbed.addField(`${prefix}${command.name}${command.usage ? ` ${command.usage}` : ''}`, command.description))
            return message.channel.send(helpEmbed)
        })
    }
}