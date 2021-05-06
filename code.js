const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const Client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});



const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);


}

client.once('ready', () => {
	client.user.setActivity(`V3.5`, {type: 'WATCHING'});
	console.log('NNA manager is online');
	
})


client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(' ');
const command = args.shift().toLowerCase();

	if(command === 'test'){
		client.commands.get('test').execute(message, args, Discord);
	}
	if(command === 'rules'){
		client.commands.get('rules').execute(message, args, Discord);
	}
	else if(command === 'server'){
			client.commands.get('server').execute(message, args);
	}
	else if(command === 'prune'){
		client.commands.get('prune').execute(message, args);
	}
	else if(command === 'clear'){
		client.commands.get('clear').execute(message, args);
	}
	else if(command === 'avatar'){
		client.commands.get('avatar').execute(message, args);
	}
	else if(command === 'avatarlink'){
		client.commands.get('avatarlink').execute(message, args);
	}
	else if(command === 'hierachy'){
		client.commands.get('hierachy').execute(message, args, Discord);
	}
	else if(command === 'note'){
		client.commands.get('note').execute(message, args, Discord, client);
	}
	else if(command === 'group'){
		client.commands.get('group').execute(message, args, Discord);
	}
	else if(command === 'time'){
		client.commands.get('time').execute(message, args, Discord);
	}
	else if(command === 'kick'){
		client.commands.get('kick').execute(message, args);
	}
	else if(command === 'ban'){
		client.commands.get('ban').execute(message, args);	
	}
	else if(command === 'payraise'){
		client.commands.get('payraise').execute(message, args);	
	}
	else if(command === 'mute'){
		client.commands.get('mute').execute(message, args);	
	}
	else if(command === 'unmute'){
		client.commands.get('unmute').execute(message, args);	
	}
	if (command === 'reactionrolehbc') {
        client.commands.get('reactionrolehbc').execute(message, args, Discord, client);
    } 
	if (command === 'rank') {
        client.commands.get('rank').execute(message, args, Discord, client);
    } 
	if (command === 'reactionrolecolo') {
        client.commands.get('reactionrolecolo').execute(message, args, Discord, client);
    } 
	if (command === 'reactionrolefactions') {
        client.commands.get('reactionrolefactions').execute(message, args, Discord, client);
    } 
	if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord, client);
    }
	else if(command === 'ae.rank'){
		client.commands.get('ae.rank').execute(message, args);	
	}
	else if(command === 'ae.remove'){
		client.commands.get('ae.remove').execute(message, args);	
	}
	else if(command === 'e.rank'){
		client.commands.get('e.rank').execute(message, args);	
	}
	else if(command === 'e.remove'){
		client.commands.get('e.remove').execute(message, args);	
	}
	else if(command === 'ar.rank'){
		client.commands.get('ar.rank').execute(message, args);	
	}
	else if(command === 'ar.remove'){
		client.commands.get('ar.remove').execute(message, args);	
	}
	else if(command === 'r.rank'){
		client.commands.get('r.rank').execute(message, args);	
	}
	else if(command === 'r.remove'){
		client.commands.get('r.remove').execute(message, args);	
	}
	else if(command === 'sr.rank'){
		client.commands.get('sr.rank').execute(message, args);	
	}
	else if(command === 'sr.remove'){
		client.commands.get('sr.remove').execute(message, args);	
	}
	else if(command === 'au.rank'){
		client.commands.get('au.rank').execute(message, args);	
	}
	else if(command === 'au.remove'){
		client.commands.get('au.remove').execute(message, args);	
	}
	else if(command === 'a.rank'){
		client.commands.get('a.rank').execute(message, args);	
	}
	else if(command === 'a.remove'){
		client.commands.get('a.remove').execute(message, args);	
	}
	else if(command === 'sa.rank'){
		client.commands.get('sa.rank').execute(message, args);	
	}
	else if(command === 'sa.remove'){
		client.commands.get('sa.remove').execute(message, args);	
	}
	else if(command === 'retire'){
		client.commands.get('retire').execute(message, args);	
	}	
	
});
client.on('message', async message => {
	let blacklisted = ['birdz','cry about it','cry bout it','nig', 'retarded', 'fuck', 'shit', 'gay'];
	let foundInText = false;
	for (var i in blacklisted){
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
})


const { Collection, MessageEmbed } = require("discord.js");
const Pings = new Collection();

client.on("message", async (message) => {
  if (!message.mentions.members.first()) return;
  if (message.mentions.members.first().id === message.author.id) return;
  const time = 5000;
  Pings.set(`pinger:${message.author.id}`, Date.now() + time);
  setTimeout(() => {
    Pings.delete(`pinger:${message.mentions.members.first().id}`);
  }, time);
});


client.on("messageDelete", (message) => {
  if (!message.mentions.members.first()) return;{
    message.channel.send(
      new MessageEmbed()
        .setTitle("Ghost Ping logged")
        .addField("author", message.author)
        .addField("message content:", message.content)
        .setColor('#f5b318')
        .setTimestamp()
		.setThumbnail(message.guild.iconURL())
    );
  }
});











client.login('ODAwODk3MTc4NzY3NDU4MzQ1.YAYznw.grS7TdRE6OZKDmE58_jx_UIl25c'); 


