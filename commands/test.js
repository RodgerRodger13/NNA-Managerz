const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'test',
	description: 'Tests to see if the NNA Manager is online',
	aliases: [],
	category: 'General Bot',
	/**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
	execute(client, message, args){
		const exampleEmbed = new MessageEmbed()
			.setColor('#f5b318')
			.setTitle('NNA Manager Test command')
			.setURL('https://discord.gg/KKaHzbDm9R')
			.setDescription('The NNA Manager is online')
			.setThumbnail(message.guild.iconURL())
			.addFields(
				{ name: '\u200B', value: '\u200B' },
				{ name: 'I am online', value: 'If i am not working, contact an admin about it' },
				{ name: '\u200B', value: '\u200B' },
				{ name: 'Other commands', value: 'check pins for my other commands', inline: true },
			)
			.setFooter('Made by RodgerRodger13',);
		message.channel.send(exampleEmbed)
		.catch();
},	
};