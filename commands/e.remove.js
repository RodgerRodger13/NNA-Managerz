module.exports = {
    name: 'e.remove',
    description: "removes editor",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Editor');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`**role *Editor* has been removed from <@${memberTarget.user.id}>**`);
        } else{
            message.channel.send('**Please mention a member**');
        }
    }
}