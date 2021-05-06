const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

module.exports = {
    name: 'reactionrolecolo',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
        
        const ColoRole = message.guild.roles.cache.find(role => role.name === "Colonist");
        const HBCRole = message.guild.roles.cache.find(role => role.name === "HBC");
 
        const ColoEmoji = '🧍';
        const HBCEmoji = '🔫';

        let embed = new Discord.MessageEmbed()

            .setColor('#f5b318')
            .setTitle('React to get access to chats and to be given roles')
            .setDescription('React to the message to get roled \n\n'
                + `${ColoEmoji} for Colonist\n`
                + `${HBCEmoji} for HBC`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(HBCEmoji);
        messageEmbed.react(ColoEmoji);

    client.on('messageReactionAdd', async (reaction, client) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (client.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == message.channel) {
                if (reaction.emoji.name === HBCEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(HBCRole);
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(ColoRole);
                }
                if (reaction.emoji.name === ColoEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(ColoRole);
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(HBCRole);
                }

                
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, client) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (client.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == message.channel) {
                if (reaction.emoji.name === HBCEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(HBCRole);
                }
                if (reaction.emoji.name === ColoEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(ColoRole);
                }

            } else {
                return;
            }
        });
 
    }
 
}  

