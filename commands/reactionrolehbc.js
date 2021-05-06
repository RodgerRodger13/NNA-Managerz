const { Client } = require('discord.js');
const client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

module.exports = {
    name: 'reactionrolehbc',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        if(!message.member.roles.cache.has('803756446952587287')) return message.channel.send('**You are not authorized to use this command**');
        const HudsonsHighlandersRole = message.guild.roles.cache.find(role => role.name === "Hudsons Highlanders");
        const GrenadierGuardsmenRole = message.guild.roles.cache.find(role => role.name === "Grenadier Guardsmen");
        const MFPRole = message.guild.roles.cache.find(role => role.name === "MFP");
        const DFCRole = message.guild.roles.cache.find(role => role.name === "DFC");
        const sixthCompanyRole = message.guild.roles.cache.find(role => role.name === "6th Company");
        const fifthCompanyRole = message.guild.roles.cache.find(role => role.name === "5th Company");
        const fourthCompanyRole = message.guild.roles.cache.find(role => role.name === "4th Company");
        const thirdCompanyRole = message.guild.roles.cache.find(role => role.name === "3rd Company");
        const secondCompanyRole = message.guild.roles.cache.find(role => role.name === "2nd Company");
        const firstCompanyRole = message.guild.roles.cache.find(role => role.name === "1st Company");
 
        const HudsonsHighlandersEmoji = '⬜';
        const GrenadierGuardsmenEmoji = '💂';
        const MFPEmoji = '🕵';
        const DFCEmoji = '🥁';
        const sixthCompanyEmoji = '🟪';
        const fifthCompanyEmoji = '🟥';
        const fourthCompanyEmoji = '🟫';
        const thirdCompanyEmoji = '🟦';
        const secondCompanyEmoji = '🟩';
        const firstCompanyEmoji = '🟨';

        let embed = new Discord.MessageEmbed()

            .setColor('#f5b318')
            .setTitle('React to get roled in your division!')
            .setDescription('React to get your HBC division role. This will give you access to its chats and voice channels \n\n'
                + `${HudsonsHighlandersEmoji} for Hudsons Highlanders\n`
                + `${GrenadierGuardsmenEmoji} for Grenadier Guardsmen\n`
                + `${MFPEmoji} for MFP\n`
                + `${DFCEmoji} for DFC\n`
                + `${sixthCompanyEmoji} for 6th Company\n`
                + `${fifthCompanyEmoji} for 5th Company\n`
                + `${fourthCompanyEmoji} for 4th Company\n`
                + `${thirdCompanyEmoji} for 3rd Company\n`
                + `${secondCompanyEmoji} for 2nd Company\n`
                + `${firstCompanyEmoji} for 1st Company`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(HudsonsHighlandersEmoji);
        messageEmbed.react(GrenadierGuardsmenEmoji);
        messageEmbed.react(MFPEmoji);
        messageEmbed.react(DFCEmoji);
        messageEmbed.react(sixthCompanyEmoji);
        messageEmbed.react(fifthCompanyEmoji);
        messageEmbed.react(fourthCompanyEmoji);
        messageEmbed.react(thirdCompanyEmoji);
        messageEmbed.react(secondCompanyEmoji);
        messageEmbed.react(firstCompanyEmoji);

    client.on('messageReactionAdd', async (reaction, client) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (client.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == message.channel) {
                if (reaction.emoji.name === HudsonsHighlandersEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(HudsonsHighlandersRole);
                }
                if (reaction.emoji.name === GrenadierGuardsmenEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(GrenadierGuardsmenRole);
                }
                if (reaction.emoji.name === MFPEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(MFPRole);
                }
                if (reaction.emoji.name === DFCEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(DFCRole);
                }
                if (reaction.emoji.name === sixthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(sixthCompanyRole);
                }
                if (reaction.emoji.name === fifthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(fifthCompanyRole);
                }
                if (reaction.emoji.name === fourthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(fourthCompanyRole);
                }
                if (reaction.emoji.name === thirdCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(thirdCompanyRole);
                }
                if (reaction.emoji.name === secondCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(secondCompanyRole);
                }
                if (reaction.emoji.name === firstCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.add(firstCompanyRole);
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
                if (reaction.emoji.name === HudsonsHighlandersEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(HudsonsHighlandersRole);
                }
                if (reaction.emoji.name === GrenadierGuardsmenEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(GrenadierGuardsmenRole);
                }
                if (reaction.emoji.name === MFPEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(MFPRole);
                }
                if (reaction.emoji.name === DFCEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(DFCRole);
                }
                if (reaction.emoji.name === sixthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(sixthCompanyRole);
                }
                if (reaction.emoji.name === fifthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(fifthCompanyRole);
                }
                if (reaction.emoji.name === fourthCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(fourthCompanyRole);
                }
                if (reaction.emoji.name === thirdCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(thirdCompanyRole);
                }
                if (reaction.emoji.name === secondCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(secondCompanyRole);
                }
                if (reaction.emoji.name === firstCompanyEmoji) {
                    await reaction.message.guild.members.cache.get(client.id).roles.remove(firstCompanyRole);
                }

            } else {
                return;
            }
        });
 
    }
 
}  

