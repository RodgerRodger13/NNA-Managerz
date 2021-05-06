module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Reader');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Mute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> **has been unmuted**`)
            .catch();
        } else{
            message.channel.send('**I cannot find that member**')
            .catch();
        }
    }
}