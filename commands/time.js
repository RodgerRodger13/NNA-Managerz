const Discord = require('discord.js');

module.exports = {
	name: 'time',
	description: 'time',
	execute(message, args){
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor('#f5b318')
				.setTitle('NNA Manager Test command')
				.setDescription(message.timestamp)
				.setFooter(message.author.id);
			
			message.channel.send(exampleEmbed)
			.catch();
				
		
	
		
	},
	
	
	
};

