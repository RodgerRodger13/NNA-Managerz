const { Client, Message, MessageEmbed } = require('discord.js')

module.exports = {
	name: 'hierarchy',
	description: 'Shows the command hierarchy of the NNA',
    category: 'General Bot',
    aliases: [],
    /**
     * 
     * @param {Client} client 
     * @param {Message} message 
     * @param {[]} args 
     * @returns 
     */
    execute(client, message, args) {
        const embed = new MessageEmbed()
            .setColor('#f5b318')
            .setTitle('NNA hierarchy')
            .setDescription(
                { name: '\u200B', value: '\u200B' },
                { name: 'CEO-', value: 'RodgerRodger13' },
                { name: 'EO-', value: 'SquawkaZ' },
                { name: 'Director-', value: 'GraphicalVoid' },
                { name: 'Author', value: 'TycoonLegend27 (clayel)' },
                { name: 'Apprentice Author', value: 'Somenameforuser' },
                { name: 'Senior Reporter', value: 'Monsieur_Nicholas' },
                { name: 'Reporter', value: 'Newsnowy743' },
                { name: 'Apprentice Reporter', value: 'FindkillRepeat'},
                { name: 'Editor', value: 'ChillyBananaBilly' },
                { name: 'Editor', value: 'Casidywashere' },
                { name: 'Editor', value: 'ArtemisFrench' },
                { name: 'Apprentice Editor', value: 'ChillyBananaBilly' },
                { name: 'Apprentice Editor', value: 'imperial'},
                { name: 'Apprentice Editor', value: 'steve222222222222'},
                { name: 'Apprentice Editor', value: 'DarklordJHW', inline: true },
            )
            .setFooter('Made by RodgerRodger13',);
        message.channel.send(embed);
	}
};