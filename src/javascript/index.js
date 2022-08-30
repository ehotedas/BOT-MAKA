// Const Variables
const { REST } = require('@discordjs/rest');
const { Routes, Component } = require('discord.js');
const { token } = require('./config.json');
const fs = require('node:fs');
const config = require('./config.json');
const commands = require('./commands.js');
const { Client, GatewayIntentBits, ActivityType  } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildBans, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildPresences]});
const { PermissionsBitField, PermissionFlagsBits } = require('discord.js');

// Comes from config.js
const clientId = config.clientId;
const guildId = config.guildId;

const rest = new REST({ version: '10' }).setToken(config.token);

(async () => {
	try {
		console.log('Started refreshing application (/) commands.');

        
		await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log('Successfully reloaded application (/) commands.');
	} catch (error) {
		console.error(error);
	}
})();

//Event that occurs when the bot comes online and set activity your bot

client.on('ready', () => {
  console.log("\033[34m[INFO]" + ` Logged in as ${client.user.tag}!` )
 
  client.user.setActivity('Shibusen', { type: ActivityType.Competing });
  client.user.setStatus('dnd');
});



// Event that activates when new user arrives

client.on("guildMemberAdd", async member => {

	const channel = client.channels.cache.get("channel to send the welcome message (id channel)");
	const fullname = `${member.user.username}#${member.user.discriminator}`
	const AVATAR = member.user.displayAvatarURL()
	const { EmbedBuilder } = require('discord.js');
	const embedWelcome = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setTitle(`${fullname} | WELCOME! `)
            .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
            .setDescription(`We hope you have fun and don't forget to check out the rules.`)
			.addFields(
				{ name: '\u200B', value: '\u200B' },     
				{ name: `TWITTER <:twitter:1012754394732843008>`, value: `https://twitter.com/the_bucciarati`, inline:true },
				{ name: `GITHUB <:github:1012754537808928828>`, value: `https://github.com/ehotedas`, inline: true },
				{ name: `INSTAGRAM <:instagram:1012768767677308999>`, value: `https://www.instagram.com/gabriel_bucciarati/`, inline: true},
				{ name: `DISCORD <:discord:1012768766104449115>`, value: `ℬ𝓊𝒸𝒸𝒾𝒶𝓇𝒶𝓉𝒾#7719`, inline: true },
				)
				
				
            .setThumbnail(`${AVATAR}`)
			.setImage("https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/maka_giff.gif")
                //Assigns a position
				member.roles.add('id role here')
				
	channel.send({embeds:[embedWelcome]});
	
	
	

});


//Any interaction with "/"

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;


  try {

   // save the event name of / and run the command inside the commands folder

    const command = interaction.commandName;  // interaction.commandName = is the name of the event
    //look for the command
    const commandFile = require(`./commands/${command}.js`)
    //run command
    commandFile.run(interaction); 

	

//it separates the error so that the bot does not stop in catch
} catch (error) {
console.log(error);
}
    });

	
//Event when member is kicked or leaves the server
client.on('guildMemberRemove', async member =>{
	const channel = client.channels.cache.get("channel to send the goodbye message (id channel)");
	const fullname = `${member.user.username}#${member.user.discriminator}`
	const AVATAR = member.user.displayAvatarURL()
	const { EmbedBuilder } = require('discord.js');
	const embedWelcome = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setTitle(`${fullname} | Goodbye ! `)
            .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
            .setDescription(`We will miss you! We hope you return!`)
            .setThumbnail(`${AVATAR}`)
			.setImage("https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/maka_kid.gif")


	channel.send({embeds:[embedWelcome]});

})

//Any interaction with "/", but this one I set to listen for choice options in register
client.on('interactionCreate', interaction => {
	
	if(interaction.isContextMenuCommand){
		
		if(interaction.values === undefined){return}

		try {
            //interaction.values[0] < ---- here is the name
			const choice = interaction.values[0]
            //Search a command
			const commandFile = require(`./MenuCommand/${choice}.js`)
            //Run command
			commandFile.run(interaction); 
			} catch (error) {
			console.log(error)
			}
	}

});


client.login(config.token);