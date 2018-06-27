const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client ();
const dokiNames = ['me','monika','sayori','natsuki']
const memes = ['https://cdn.discordapp.com/attachments/430850966896640000/461594230884794398/OrZ5IWS4tIk.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594239579455498/explooooooo.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594256683958282/image.png','https://cdn.discordapp.com/attachments/430850966896640000/461594426943471616/image-4.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594525601759233/unknown-297.png','https://cdn.discordapp.com/attachments/430850966896640000/461594630975389696/image-9.jpg','https://www.youtube.com/watch?v=U06jlgpMtQs']
const emotes = [':wink:',':joy:']


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setGame("with You! Y!help");
});
client.on('message', msg => {
  if (msg.content === 'Y!help') {
    msg.reply('Hello! Im YuriBot, im still being made but I still love you. I just have to have some more work done! if you need help on commands do Y!cmds.');
  }
});
client.on('message', msg => {
	if (msg.content === '!test') {
		msg.channel.send('Oh Ok');
	}
});
bot.on('guildMemberAdded', member => {
   member.send("Welcome to the server!");
});
client.on('message', msg => {
	if (msg.content === 'Y!cmds') {
		msg.reply('Ok! Here is a list of commands. Y!help, Y!test, Y!cmds, Y!kiss,Y!meme,Y!ping,Y!hug,Y!uptime,Y!dokiname.');
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!ping') {
		msg.reply('**MEGA SMASH** oh I mean *pong*');
	}
});
client.on('message', msg => {
	if (msg.content === 'Yuri sucks') {
		msg.reply('No');
		msg.delete()
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!meme') {
		var response1 = memes [Math.floor(Math.random()*memes .length)];
		msg.reply(response1);
	}
});
client.on('message', msg => {
	if (msg.content === 'yuri sucks') {
		msg.reply('You have said the forbidden phrase!');
		msg.delete()
	}
});
client.on('message', msg => {
	if (msg.content === 'yuri is worst girl') {
		msg.reply('No, im not!');
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!kiss') {
		msg.reply('Oh You! *kisses*');
	}
});
client.on('message', function(message) {
    if (message.content == "Y!purge") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});
client.on('message', msg => {
	if (msg.content === 'Y!purge') {
		msg.reply('Ok! Deleted all messages possible.');
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!hug') {
		msg.reply('Oh uh ok! *hugs*');
	}
});
client.on('message', msg => {
	if (msg.content === 'Hey yuri do you like knifes?') {
		msg.reply('~~**YES**~~ oh I mean. Yes I do. But I like you more!~');
	}
});
client.on('message', msg => {
	if (msg.content === 'Hello Yuri') {
		msg.reply('Hello!~');
	}
});
client.on('message', msg => {
	if (msg.content === 'Do you love me yuri?') {
		msg.reply('Well of course I do! Unless your a **FILTHY** Thotika Lover');
	}
});
client.on('message', msg => {
	if (msg.content === 'y_act2') {
		msg.reply('*slap* Stop being bulli to OG yuri. before I hang you.');
	}
});
client.on('message', msg => {
	if (msg.content === 'Hey! Stop acting like a meanie!') {
		msg.reply('Shut up sayori!');
	}
});
client.on('message', msg => {
	if (msg.content === 'Ha, ha. Funny. Can you sense my sarcasm?') {
		msg.reply('No, really I cannot.');
	}
});
client.on('message', msg => {
	if (msg.content === 'I thought we were better than this...') {
		msg.reply('No,**WE** were never a thing!');
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!uptime') {
		let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		msg.reply(uptime);
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!dokiname') {
		var response = dokiNames [Math.floor(Math.random()*dokiNames .length)];
		msg.reply(response);
	}
});
client.on('message', msg => {
	if (msg.content === 'Y!emotetest') {
		var haHA = emotes [Math.floor(Math.random()*emotes .length)];
		msg.reply(haHA);
	}
});
client.login(process.env.BOT_TOKEN);
