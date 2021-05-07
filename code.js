// Here we just import everything the bot needs
const { Collection, MessageEmbed, Client, Message } = require("discord.js");
const { prefix, token, reaction_roles: { colo_id, factions_id, hbc_id } } = require('./config.json')
const { readdirSync } = require('fs');
const client = new Client({partials: ['MESSAGE', 'REACTION']});
client.commands = new Collection();
const Pings = new Collection();
const commandFiles = readdirSync('./commands/').filter(file => file.endsWith('.js'));
// Register the commands
for(const file of commandFiles){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}
// Log that the bot is online
client.once('ready', () => {
	client.user.setActivity(`V3.5`, {type: 'WATCHING'});
	console.log('NNA manager is online');
})

// Check if a message is a command, or alias of one, and then check if it has a blacklisted word
client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	const args = message.content.slice(prefix.length).trim().split(' ');
	let commandName = args.shift().toLowerCase();
	let command = client.commands.get(commandName)
	if(!command) {
		command = client.commands.find(cmd => cmd?.aliases.includes(commandName))
		if(!command) return
	}
	command.execute(client, message, args)
	checkBlacklisted(message)
	// Check pings is edited out since the code never does anything
	//checkPings(message)
});

/**
 * @param {Message} message
 */
// The blacklisted word check function
async function checkBlacklisted (message) {
	let blacklisted = ['birdz','cry about it','cry bout it','nig', 'retarded', 'fuck', 'shit', 'gay'];
	let foundInText = false;
	for (var i in blacklisted) {
		if (message.content.toLowerCase().includes(blacklisted[i].toLowerCase())) foundInText = true;	
	}
	if (foundInText) {
		message.delete();
		message.channel.send('**That is a Blacklisted word. Contact an admin about having it removed**')
		.then(msg => {
			msg.delete({ timeout: 3000 });
		})
		.catch();
	}
}

/**
 * @param {Message} message
 */
// The pings function
async function checkPings (message) {
	if (!message.mentions.members.first()) return;
	if (message.mentions.members.first().id === message.author.id) return;
	const time = 5000;
	Pings.set(`pinger:${message.author.id}`, Date.now() + time);
	setTimeout(() => {
		Pings.delete(`pinger:${message.mentions.members.first().id}`);
	}, time);
}

// Logs ghost pings
client.on("messageDelete", (message) => {
	if(message.partial) try {
		message.fetch()
	} catch (error) {
		return	
	}
  	if (!message.mentions.members.first()) return;
	let embed = new MessageEmbed()
		.setTitle("Ghost Ping logged")
		.addField("author", message.author)
		.addField("message content:", message.content)
		.setColor('#f5b318')
		.setTimestamp()
		.setThumbnail(message.guild.iconURL())
	message.channel.send(embed);
});

// Checks for reaction role additions
client.on('messageReactionAdd', async (messageReaction, user) => {
	if(![`${colo_id}`, `${factions_id}`, `${hbc_id}`].includes(messageReaction.message.id)) return
	if(user.bot) return
	if(messageReaction.partial) await messageReaction.fetch()
	if(user.partial) await user.fetch()
	let member = messageReaction.message.guild.member(user)
	let roles
	messageReaction.users.fetch()
	if(messageReaction.message.id === colo_id) roles = {
		'🧍': 'Colonist',
		'🔫': 'Hudson Bay Company'
	}
	if(messageReaction.message.id === factions_id) roles = {
		'🟩': 'IEF',
		'⭐': 'North Union',
		'👑': 'LCM',
		'🐺': 'TWM'
	}
	if(messageReaction.message.id === hbc_id) roles = {
		'⬜': 'Hudsons Highlanders',
		'💂': 'Grenadier Guardsmen',
		'🕵': 'MFP',
		'🥁': 'DFC',
		'🟪': '6th Company',
		'🟥': '5th Company',
		'🟫': '4th Company',
		'🟦': '3rd Company',
		'🟩': '2nd Company',
		'🟨': '1st Company'
	}
	let role = messageReaction.message.guild.roles.cache.find(role => role.name === roles[messageReaction.emoji.name])
	if(!role) return console.log(`Role ${roles[messageReaction.emoji.name]} does not exist!`)
	member.roles.add(role)
	// Check if they were reacted to something else, and if yes remove the old reaction
	messageReaction.message.reactions.cache.each(messagereaction => {
		if(messageReaction.users.cache.has(user.id) && messagereaction.emoji.name != messageReaction.emoji.name) messagereaction.users.remove(user.id)
	})
})

client.on('messageReactionRemove', async (messageReaction, user) => {
	if(messageReaction.partial) await messageReaction.fetch()
	if(user.partial) await user.fetch()
	if(![`${colo_id}`, `${factions_id}`, `${hbc_id}`].includes(messageReaction.message.id)) return
	if(user.bot) return
	let member = messageReaction.message.guild.member(user)
	let roles = {
		'🧍': 'Colonist',
		'🔫': 'Hudson Bay Company',
		'🟩': 'IEF',
		'⭐': 'North Union',
		'👑': 'LCM',
		'🐺': 'TWM',
		'⬜': 'Hudsons Highlanders',
		'💂': 'Grenadier Guardsmen',
		'🕵': 'MFP',
		'🥁': 'DFC',
		'🟪': '6th Company',
		'🟥': '5th Company',
		'🟫': '4th Company',
		'🟦': '3rd Company',
		'🟩': '2nd Company',
		'🟨': '1st Company'
	}
	let role = messageReaction.message.guild.roles.cache.find(role => role.name === roles[messageReaction.emoji.name])
	if(!role) return console.log(`Role ${roles[messageReaction.emoji.name]} does not exist!`)
	member.roles.remove(role)
})

// Login
client.login(token);