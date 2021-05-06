module.exports = {
    name: 'ae.rank',
    description: "rankrole",
    execute(message, args) {
        const target = message.mentions.users.first();
        if (target) {
            if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Reader');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Apprentice Editor');
 
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`**Role *Apprentice Editor* has been added to <@${memberTarget.user.id}>**`);
                return
            }
        } else {
            message.channel.send('**Please mention a member**');
        }
    }
}