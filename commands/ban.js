module.exports = {
    name: 'ban',
    description: "bans a member",
    execute(message, args){

        if(!message.member.roles.cache.has('778339038812831775')) return message.channel.send('You are not authorized to use this command');
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = message.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send(`${member.toString()} **has been banned.**`);
        
        


        }else {
            message.channel.send('**You need to mention a user in order to ban them!**');

        }
        





        
    



    },



};
