const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

module.exports = {
    name: 'reactionrolefactions',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
        const IEFRole = message.guild.roles.cache.find(role => role.name === "IEF");
        const NorthunionRole = message.guild.roles.cache.find(role => role.name === "North Union");
        const LCMRole = message.guild.roles.cache.find(role => role.name === "LCM");
        const TWMRole = message.guild.roles.cache.find(role => role.name === "TWM");


        const IEFEmoji = '🟩';
        const NorthunionEmoji = '⭐';
        const LCMEmoji = '👑';
        const TWMEmoji = '🐺';

        let embed = new Discord.MessageEmbed()

            .setColor('#f5b318')
            .setTitle('React to get roled in your Faction!')
            .setDescription('React to get your Faction Role. This will give you access to its chats and voice channels \n\n'
                + `${IEFEmoji} for The Irish expeditionary forces\n`
                + `${NorthunionEmoji} for North Uniun\n`
                + `${LCMEmoji} for The  Le Cuirassé Mercenaires\n`
                + `${TWMEmoji} for The Wolf Militia`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(IEFEmoji);
        messageEmbed.react(NorthunionEmoji);
        messageEmbed.react(LCMEmoji);
        messageEmbed.react(TWMEmoji);

    client.on('messageReactionAdd', async (reaction, client) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (client.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == message.channel) {
                if (reaction.emoji.name === IEFEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(IEFRole);
                }
                if (reaction.emoji.name === NorthunionEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(NorthunionRole);
                }
                if (reaction.emoji.name === TWMEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(TWMRole);
                }
                if (reaction.emoji.name === LCMEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(LCMRole);
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
                if (reaction.emoji.name === IEFEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(IEFRole);
                }
                if (reaction.emoji.name === NorthunionEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(NorthunionRole);
                }
                if (reaction.emoji.name === TWMEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(TWMRole);
                }
                if (reaction.emoji.name === LCMEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(LCMRole);
                }


            } else {
                return;
            }
        });
 
    }
 
}  

