module.exports = {
    name: 'server',
    description: "gives server name and stats",
    execute(message, args){
            message.channel.send(`**Server name:** ${message.guild.name}\n**Total members:** ${message.guild.memberCount}`);


    

    
    },



};


