'use strict';
const Discord = require("discord.js");
const client = new Discord.Client();
const bot = new Discord.Client ();
const dokiNames = ['me','monika','sayori','natsuki']
const memes = ['https://cdn.discordapp.com/attachments/430850966896640000/461594230884794398/OrZ5IWS4tIk.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594239579455498/explooooooo.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594256683958282/image.png','https://cdn.discordapp.com/attachments/430850966896640000/461594426943471616/image-4.jpg','https://cdn.discordapp.com/attachments/430850966896640000/461594525601759233/unknown-297.png','https://cdn.discordapp.com/attachments/430850966896640000/461594630975389696/image-9.jpg','https://www.youtube.com/watch?v=U06jlgpMtQs','https://cdn.discordapp.com/attachments/461657726640979988/461661392177725440/4.jpg','https://cdn.discordapp.com/attachments/461657726640979988/461661414734430209/3.jpg','https://cdn.discordapp.com/attachments/461657726640979988/461661737893101568/6.jpg','https://cdn.discordapp.com/attachments/430850966896640000/462452256214614076/yuri_and_wizard.jpg','https://cdn.discordapp.com/attachments/430850966896640000/462452299424333824/unknown-6.png','https://cdn.discordapp.com/attachments/430850966896640000/462452334858076160/xbox.jpg','https://cdn.discordapp.com/attachments/430850966896640000/462452380810739753/7I4L.gif','https://cdn.discordapp.com/attachments/430850966896640000/462452438767763457/gaben.png','https://cdn.discordapp.com/attachments/430850966896640000/462452547806953493/unqo7d6izg211.png','https://cdn.discordapp.com/attachments/430850966896640000/462452769433976852/bbe-5ahv-Xk.jpg','https://cdn.discordapp.com/attachments/430850966896640000/462453288978350101/IMG_20180517_130907_535.jpg','https://cdn.discordapp.com/attachments/430850966896640000/462453309035380754/IMG_20171010_092356_122.jpg','https://i.redd.it/coa4z4miaq811.jpg','https://cdn.discordapp.com/attachments/381885960297906196/468222485481914368/33685728_10209051361920729_3693756133228412928_n.jpg','https://cdn.discordapp.com/attachments/439400567262019594/472914095402909696/nazuki.png','https://cdn.discordapp.com/attachments/439400567262019594/472914354459639837/l1is6mj7bpn01.jpg','https://cdn.discordapp.com/attachments/439400567262019594/472914445975158784/POLICEOPENUP.jpg']
const emotes = [':wink:',':joy:']
const poems = ['*Ghost under the light*: The tendrils of my hair illuminate beneath the amber glow.Bathing. It must be this one.The last remaining streetlight to have withstood the test of time.The last yet to be replaced by the sickening blue-green of the future.I bathe. Calm; breathing air of the present but living in the past.The light flickers.I flicker back.','*The Raccoon*: It happened in the dead of night while I was slicing bread for a guilty snack. My attention was caught by the scuttering of a raccoon outside my window. That was, I believe, the first time I noticed my strange tendencies as an unusual human. I gave the raccoon a piece of bread, my subconscious well aware of the consequences. Well aware that a raccoon that is fed will always come back for more. The enticing beauty of my cutting knife was the symptom. The bread, my hungry curiosity. The raccoon, an urge. The moon increments its phase and reflects that much more light off of my cutting knife. The very same light that glistens in the eyes of my raccoon friend. I slice the bread, fresh and soft. The raccoon becomes excited. or perhaps Im merely projecting my emotions onto the newly-satisfied animal. The raccoon has taken to following me. You could say that weve gotten quite used to each other. The raccoon becomes hungry more and more frequently, so my bread is always handy. Every time I brandish my cutting knife the raccoon shows me its excitement. A rush of blood. Classic Pavlovian conditioning. I slice the bread. And I feed myself again.','*Ghost under the light pt. 2*: The tendrils of my hair illuminate beneath the amber glow. Bathing. In the distance, a blue-green light flickers. A lone figure crosses its path– a silhouette obstructing the eerie glow. My heart pounds. The silhouette grows. Closer Closer I open my umbrella, casting a shadow to shield me from visibility. But I am too late. He steps into the streetlight. I gasp and drop my umbrella. The light flickers. My heart pounds. He raises his arm. Time stops. The only indication of movement is the amber light flickering against his outstretched arm. The flickering light is in rhythm with the pounding of my heart. Teasing me for succumbing to this forbidden emotion. Have you ever heard of a ghost feeling warmth before? Giving up on understanding, I laugh. Understanding is overrated. I touch his hand. The flickering stops. Ghosts are blue-green. My heart is amber.','Beach*: A marvel millions of years in the making. Where the womb of Earth chaotically meets the surface. Under a clear blue sky, an expanse of bliss - But beneath gray rolling clouds, an endless enigma. The easiest world to get lost in is one where everything can be found. One can only build a sand castle where the sand is wet. But where the sand is wet, the tide comes. Will it gently lick at your foundations until you give in? Or will a sudden wave send you crashing down in the blink of an eye? Either way the outcome is the same. Yet we still build sand castles. I stand where the foam wraps around my ankles. Where my toes squish into the sand. The salty air is therapeutic. The breeze is gentle, yet powerful. I sink my toes into the ultimate boundary line, tempted by the foamy tendrils. Turn back, and I abandon my peace to erode at the shore. Drift forward, and I return to Earth forevermore.','*Wheel*: A rotating wheel. Turning an axle. Grinding. Bolthead. Linear gearbox. Falling sky. Seven holy stakes. A docked ship. A portal to another world. A thin rope tied to a thick rope. A torn harness. Parabolic gearbox. Expanding universe. Time controlled by slipping cogwheels. Existence of God. Swimming with open water in all directions. Drowning. A prayer written in blood. A prayer written in time-devouring snakes with human eyes. A thread connecting all living human eyes. A kaleidoscope of holy stakes. Exponential gearbox. A sky of exploding stars. God disproving the existence of God. A wheel rotating in six dimensions. Forty gears and a ticking clock. A clock that ticks one second for every rotation of the planet. A clock that ticks forty times every time it ticks every second time. A bolthead of holy stakes tied to the existence of a docked ship to another world. A kaleidoscope of blood written in clocks. A time-devouring prayer connecting a sky of forty gears and open human eyes in all directions. Breathing gearbox. Breathing bolthead. Breathing ship. Breathing portal. Breathing snakes. Breathing God. Breathing blood. Breathing holy stakes. Breathing human eyes. Breathing time. Breathing prayer. Breathing sky. Breathing wheel.']
const creator = ['! OhYeahMr.Krabs !/! OhYeahYuri !']
const PREFIX = "Y!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on("ready", () => {
    client.user.setActivity("with You! Y!help");
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'help')) return;
	var embed3 = new Discord.RichEmbed()
	.addField ('Hi! im YuriBot for commands use Y!cmds', 'For help please message/ping OhYeahYuri/OhYeahMrKrabs for help!')
	.setFooter(' Requested by ' + msg.author.username + ' Created by ' + creator )
		.setColor(0xEE82EE)
	.setColor(0xEE82EE)
	msg.channel.sendEmbed(embed3);
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
	if (!msg.content.startsWith(PREFIX + 'cmds')) return;
		var embed2 = new Discord.RichEmbed()
		.addField ('Y!help', 'This gives the help command (referes to this command)')
		.addField ('Y!ping', 'Gives your ping (internet speed)')
		.addField ('Y!meme', 'Drops a random meme')
		.addField ('Y!kiss', 'Have yuri kiss you! <3')
		.addField ('Y!purge', 'Self-explanatory')
		.addField ('Y!uptime', 'See how long I have been online!')
		.addField ('Y!invite', 'Invite me to YOUR server!')
		.addField ('Y!dokiname', 'I will say one of the dokis name')
		.addField ('Y!poems', 'I will say one of my poems')
		.addField ('Y!botinfo', 'Not exactly finished just yet')
		.addField ('Y!restart', 'am I glitching out/not working properly? use this to reset me! **NOTE** *Only the owner of this bot can use this command!*')
		.setFooter(' Requested by ' + msg.author.username + ' Created by ' + creator )
		.setColor(0xEE82EE)
		msg.channel.sendEmbed(embed2);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'ping')) return;
		msg.reply(`:ping_pong: Pong! *your ping is* \`${client.pings[0]}ms\``)
});
client.on('message', msg => {
	if (msg.content === 'Yuri sucks') {
		msg.reply('No');
		msg.delete()
	}
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'meme')) return;
		var response1 = memes [Math.floor(Math.random()*memes .length)];
		msg.reply(response1);
});
client.on('message', msg => {
	if (msg.content === 'yuri sucks') {
		msg.reply('You have said the forbidden phrase!');
		msg.delete()
	}
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'kiss')) return;
	msg.reply('Oh you *kisses*')
});
client.on('message', function(message) {
	if (!message.content.startsWith(PREFIX + 'purge')) return;
		if (message.member.hasPermission("MANAGE_MESSAGES")) {
			message.channel.fetchMessages()
				 .then(function(list){
					message.channel.bulkDelete(list);
					}, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
			}
	
	});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'hug')) return;
		msg.reply('Oh uh ok! *hugs*');
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
	if (msg.content === 'Do you love me Yuri?') {
		msg.reply("Well of course I do! Unless you're a **FILTHY** Thotika Lover");
	}
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'uptime')) return;
		let totalSeconds = (client.uptime / 1000);
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = totalSeconds % 60;
let uptime = `${hours} hours, ${minutes} minutes and ${seconds} seconds`;
		msg.reply(uptime);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'dokiname')) return;
		var response = dokiNames [Math.floor(Math.random()*dokiNames .length)];
		msg.reply(response);
});
client.on('message', msg => {
	if (msg.content === 'Y!emotetest') {
		var haHA = emotes [Math.floor(Math.random()*emotes .length)];
		msg.reply(haHA);
	}
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'poems')) return;
		var poem = poems [Math.floor(Math.random()*poems .length)];
		msg.reply(poem);
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'invite')) return;
		msg.author.sendMessage('Hello! Im YuriBot, you have used the invitation command! So heres my invite link. https://discordapp.com/api/oauth2/authorize?client_id=409069320480620554&permissions=0&scope=bot enjoy!')
});
client.on('message', msg => {
	if (!msg.content.startsWith(PREFIX + 'botinfo')) return;
		var embed = new Discord.RichEmbed()
		.addField ('Hello, im yuribot', 'my creator is ' + creator)
		.setFooter('Requested by ' + msg.author.username + ' Created by ' + creator )
		.setColor(0xEE82EE)
		msg.channel.sendEmbed(embed);
});
client.on('message', msg => {
	if (msg.content === 'Y!react') {
		msg.channel.send('Ok')
		msg.react('🤔')
	}
});
client.on('message', msg => {
	var newEmbed = new Discord.RichEmbed()
	.addField('RESTARTING', 'It might be a bit before I am online again')
	.setFooter('Requested by ' + msg.author + ' created by ' + creator)
	.setColor(0xEE82EE)
	if (!msg.content.startsWith(PREFIX + 'restart')) return;
	if (msg.author.id === '235511644682321922') { 
	resetBot(msg.channel);
			function resetBot(channel) {
			channel.sendEmbed(newEmbed)
			.then(msg => client.destroy())
			}
		}
		else {
			if (!msg.content.startsWith(PREFIX + 'restart')) return;
			if (msg.author.id !== '235511644682321922') { 
			var rejectEmbed = new Discord.RichEmbed()
			.addField ('ERROR!', 'you do not have the permission to use this command!')
			.setFooter('Requested by ' + author + author.avatar)
			.setColor(0xff0000)
			if (msg.author.id !== '235511644682321922') { 
			msg.channel.sendEmbed(rejectEmbed)
			return
			}
		}}
	});
client.login(process.env.BOT_TOKEN);
