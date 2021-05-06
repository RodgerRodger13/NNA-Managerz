module.exports = {
    name: 'ar.remove',
    description: "removes role",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Apprentice Reporter');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`**role *Apprentice Reporter* has been removed from <@${memberTarget.user.id}>**`);
        } else{
            message.channel.send('**Please mention a member**');
        }
    }
}