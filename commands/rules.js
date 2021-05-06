const Discord = require('discord.js');

module.exports = {
	name: 'rules',
	description: 'gives rules',
	execute(message, args){
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#f5b318')
				.setTitle('NNA Rules')
				.setDescription('These are the rules for the NNA, Abusing, exploiting or anything else will result in a punishment')
				.setThumbnail(message.guild.iconURL())
                .setFooter('Other incidences are up to Admin discression')
				.addFields(
					{ name: '\u200B', value: '\u200B' },
					{ name: 'Rule 1', value: 'There should be absolutely no racism, sexism, homophobia, or anything of the sort.' },
                    { name: '\u200B', value: '\u200B' },
					{ name: 'Rule 2', value: 'Conduct yourself in a polite, mature manner at all times' },
                    { name: '\u200B', value: '\u200B' },
					{ name: 'Rule 3', value: 'Treat editors and writers the way you would like them to treat you, respect every rank. Any problems are to be reported to officers.' },
                    { name: '\u200B', value: '\u200B' },
					{ name: 'Rule 4', value: 'There should be absolutely no NSFW content in the discord, this will be met with a ban and possible discord reporting. This includes hentai' },
                    { name: '\u200B', value: '\u200B' },
					{ name: 'Rule 5', value: 'Leaking information will be met with a ban and will be Kill on Sight (even tho we are generally a peaceful faction/buisness.', inline: true },
				)
				.setFooter('Made by RodgerRodger13',);
			
			message.channel.send(exampleEmbed);
				
		
	
		
	},
	
	
	
};

