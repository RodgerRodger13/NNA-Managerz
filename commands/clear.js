module.exports = {
    name: 'clear',
    description: "gets rid of messages",
    execute(message, args){

        if(message.member.roles.cache.has('778339038812831775')){
        const amount = parseInt(args[0]) + 1;
	
		if (isNaN(amount)) {
			return message.reply('**that doesn\'t seem to be a valid number.**');
		} else if (amount <= 1 || amount > 150) {
			return message.reply('**you need to input a number between 1 and 150.**');
		 }
		message.channel.bulkDelete(amount, true).catch(err => {
			console.error(err);
			message.channel.send('**there was an error trying to prune messages in this channel. Please try again or contact admin about the issue**');
        });
        message.reply('**messages Deleted!**')
  .then(msg => {
                msg.delete({ timeout: 2000});
            })
  .catch();
	
    } else { 
        message.channel.send('**You are not authorized to use this command**'(message.author.username))
    }



    },



};

