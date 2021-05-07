const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
    name: 'person',
    description: 'warn a member',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    async execute(client, message, args) {
        const UserId = message.member.id
        const Reason = args[1].join(' ')
        let User = message.mentions.users.first()
        const author = message.author
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            if (UserId === message.author.Id){
               message.channel.send('**You Cannot Warn Yourself**')
            } else{
                try{
                    member = await message.guild.members.find(message.mentions.users.first())
                }catch(err){
                    let warnEmbed = new MessageEmbed()
                    .setTitle("**Promotion/demotion**")
                    .setColor('#f5b318')
                    .addFields(
                        {name: 'User', value: User },
                        {name: 'Reason', value: Reason},
                        {name: 'From', value: author} 
                    )
                    .setTimestamp()
                    
                }
                try{
                    User.send(warnEmbed)
                    message.channel.send(warnEmbed)
                }
                catch(err){
                    return(message.reply('You must format the command <@mention> <reason>'))
                }}
        } else {
            message.channel.send('only admin can warn members')
        }
    }
}