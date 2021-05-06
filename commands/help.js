const { Client } = require('discord.js');

module.exports = {
    name: 'help',
    description: "Sets up a reaction role message!",
    async execute(message, Discord, client) {
 
        const WriterEmoji = '5️⃣';
        const ServerEmoji = '4️⃣';
        const ReactionEmoji = '3️⃣';
        const helpEmoji = '2️⃣';
        const AdminEmoji = '1️⃣';

        let embed = new Discord.MessageEmbed()

            .setColor('#f5b318')
            .setTitle('React for bot commands')
            .setThumbnail(message.guild.iconURL())
            .setDescription('\n\n'
                
                + `${AdminEmoji} for Admin Commands\n`
                + `${helpEmoji} for General Bot commands\n`
                + `${ReactionEmoji} for Reaction-Role commands\n`
                + `${ServerEmoji} for the commands that set up this server(rules etc..)\n`
                + `${WriterEmoji} for NNA Writer commands`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(AdminEmoji);
        messageEmbed.react(helpEmoji);
        messageEmbed.react(ReactionEmoji);
        messageEmbed.react(ServerEmoji);
        messageEmbed.react(WriterEmoji);
        

    client.on('messageReactionAdd', async (reaction, client) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (client.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == message.channel) {
                if (reaction.emoji.name === AdminEmoji) {
                    await reaction.message.guild.send;
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#f5b318')
                    .setTitle('NNA Manager Admin Commands')
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: '-ae.rank', value: 'Adds role' },
                        { name: '-ae.remove', value: 'removes role' },
                        { name: '-e.rank', value: 'Adds role' },
                        { name: '-e.remove', value: 'removes role' },
                        { name: '-ar.rank', value: 'Adds role' },
                        { name: '-ar.remove', value: 'removes role' },
                        { name: '-r.rank', value: 'Adds role' },
                        { name: '-r.remove', value: 'removes role' },
                        { name: '-sr.rank', value: 'Adds role' },
                        { name: '-sr.remove', value: 'removes role' },
                        { name: '-au.rank', value: 'Adds role' },
                        { name: '-au.remove', value: 'removes role' },
                        { name: '-a.rank', value: 'Adds role' },
                        { name: '-a.remove', value: 'removes role' },
                        { name: '-sa.rank', value: 'Adds role' },
                        { name: '-sa.remove', value: 'removes role' },
                        { name: '-kick @user', value: 'kicks a user' },
                        { name: '-ban @user', value: 'bans a user' },
                        { name: '-mute @user', value: 'mutes a user'},
                        { name: '-unmute @user', value: 'unmutes a user'},
                        { name: '-mute @user(a time)', value: 'mutes a user for a certain amanont of time'},
                        { name: '-prune (number)', value: 'clears messages'},
                        { name: '-clear (number)', value: 'clears messages'},
                        { name: '-retire @user', value: 'makes a user retired', inline: true },
                    )
                    .setFooter('Made by RodgerRodger13',);
                message.channel.send(exampleEmbed);
            
                
                }
                if (reaction.emoji.name === helpEmoji) {
                    await reaction.message.guild.send;
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#f5b318')
                    .setTitle('NNA Manager public Commands')
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: '-avatar', value: 'gives your avatar' },
                        { name: '-avatarlink', value: 'gives your avatars link' },
                        { name: '-hierachy', value: 'shows command hieracy of the NNA' },
                        { name: '-server', value: 'gives name and server count of the NNA' },
                        { name: '-time', value: 'gives name and server count of the NNA' },
                        { name: '-test', value: 'tests to see if the NNA Manager is online', inline: true },
                    )
                    .setFooter('Made by RodgerRodger13',);
                message.channel.send(exampleEmbed);   
                }
                if (reaction.emoji.name === ReactionEmoji) {
                    await reaction.message.guild.send;
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#f5b318')
                    .setTitle('NNA Manager Reaction-role Commands')
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: '-ractionrolecolo', value: 'Gives reaction-role options members' },
                        { name: '-reactionrolehbc', value: 'Gives reaction-role options for HBC members and their divisions' },
                        { name: '-reactionrolefactions', value: 'Gives reaction-role options for faction members' },
                        { name: '-rank @user ', value: 'ranks a member', inline: true },
                    )
                    .setFooter('Made by RodgerRodger13',);
                message.channel.send(exampleEmbed);   
                
                }
                if (reaction.emoji.name === WriterEmoji) {
                    await reaction.message.guild.send;
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#f5b318')
                    .setTitle('NNA Manager Writer commands')
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: '-note {text}', value: 'stores notes and information' },
                        { name: '-payraise', value: 'requests a payraise', inline: true },
                    )
                    .setFooter('Made by RodgerRodger13',);
                message.channel.send(exampleEmbed);   
                
                }
                if (reaction.emoji.name === ServerEmoji) {
                    await reaction.message.guild.send;
                    const exampleEmbed = new Discord.MessageEmbed()
                    .setColor('#f5b318')
                    .setTitle('NNA Manager Setup commands')
                    .addFields(
                        { name: '\u200B', value: '\u200B' },
                        { name: '-rules', value: 'Presents the NNA rules' },
                        { name: '-group', value: 'gives the NNA Roblox grop link' },
                        { name: 'fish', value: 'tests the blacklisted word function', inline: true },
                    )
                    .setFooter('Made by RodgerRodger13',);
                message.author.send(exampleEmbed);   
                 
                }

                
            } else {
                return;
            }
 
        });
 

 
    }
 
}  

