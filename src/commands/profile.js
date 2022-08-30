const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


module.exports = {

    run: async(interaction) => {
        //Button 
        const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

        const button = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder()
                .setCustomId('primary')
                .setLabel('Maka')
                .setStyle(ButtonStyle.Primary),

                new ButtonBuilder()
                .setCustomId('secunday')
                .setLabel('Albarn')
                .setStyle(ButtonStyle.Success),
     
        )

        // at the top of your file
const { EmbedBuilder } = require('discord.js');

// inside a command, event listener, etc.
const exampleEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle("Death Scythe's Clan")
	.setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
	.setDescription("“So let's spread the word together!! We'll go and see Crona again!! And we'll put the Kishin in his place as many times as it takes!! I want everyone to in the world to witness this courage!!! This soul resonance!!!”")
	.setThumbnail('https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Soul.gif')
	.addFields(
		{ name: 'SPECIES', value: 'HUMAN', inline: true },
		{ name: 'SEX', value: 'FEMALE', inline: true },
		// { name: '\u200B', value: '\u200B' },
        { name: 'RELATVIES', value: 'SPIRIT ALBARN(FATHER)', inline: true },
		{ name: 'WEAPON', value: 'SOUL EVANS', inline: true },
	)

	.setImage('https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_GiF.gif')
	.setTimestamp()
	.setFooter({ text: 'Shinigami Buki Shokunin Senmon Gakkō', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_CRONA/main/src/img/shinigami.png' });

interaction.reply({ embeds: [exampleEmbed], components: [button] });

    }

}