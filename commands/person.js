
const Discord = require('discord.js');


module.exports = {
    name: 'person',
    description: 'warn a member',
    async execute(message, args , Discord){
        edited = message.content.slice(5);

        const guildID = message.guild.Discord
        const UserId = message.member.id
        const Reason = args.splice(1).join(' ')
        let User = message.mentions.users.first()
        const author = message.author


        if(message.member.hasPermission('MANAGE_MESSAGES')){
           if (UserId === message.author.Id){
               message.channel.send('**You Cannot Warn Yourself**')
           }
            else{
                try{
                    member = await message.guild.members.find(message.mentions.users.first())
                }catch(err){
                    var warnEmbed = new Discord.MessageEmbed()
                    .setTitle("**Promotion/demotion**")
                    .setColor('#f5b318')
                    .addFields(
                        {name: 'User', value: User },
                        {name: 'Reason', value: Reason},
                        {name: 'From', value: author} 
                    )
                    .setTimestamp()
                    
                }a
                try{
                    User.send(warnEmbed)
                    message.channel.send(warnEmbed)
                }
                catch(err){
                    return(message.reply('You must format the command <@mention> <reason>'))
                }}
            } 
            else{
                message.channel.send('only admin can warn members')
            }}}