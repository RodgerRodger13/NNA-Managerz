const Discord = require("discord.js");
module.exports = {
    name: 'avatarlink',
    description: "Avatar link",
    execute (message, args){
        if (!message.mentions.users.size) {
            return message.channel.send(`**Your avatar:** <${message.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    
        const avatarList = message.mentions.users.map(user => {
            return `**${user.username}'s avatar:** <${user.displayAvatarURL({ format: "png", dynamic: true })}>`;
        });
        message.channel.send(avatarList);
    }
}



















