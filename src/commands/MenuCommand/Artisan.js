const { EmbedBuilder, ButtonInteraction, Collection } = require('discord.js');

module.exports = {

    run: async(interaction) => {

        //BUILD EMBERS
        const embedArtesão = new EmbedBuilder()
        .setColor('Aqua')
        .setTitle(`Artisan charge has been added! :laughing: `)
        .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
        .setDescription('*Dont forget to find an ``Weapon partner``, ok?*')
        const embedWarn_Artesão = new EmbedBuilder()
        .setColor('DarkRed')
        .setTitle('Already have ``Weapon`` role added')
        .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
        .setDescription('*if you want to change your role, talk to an admin*')
        const embedWarn = new EmbedBuilder()
        .setColor('DarkRed')
        .setTitle('You already have this role!')
        .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
        .setDescription('*We all forget something! :sweat_smile:*')

        //ACTIONS
        if(interaction.member.roles.cache.has('1013855679896895528') === true){
            interaction.reply({
                embeds: [embedWarn_Artesão],
                ephemeral: true
            })
        }
        else if(interaction.member.roles.cache.has('1013855854249910403') === true){
            interaction.reply({
                embeds: [embedWarn],
                ephemeral: true
            })
        }
        else if(interaction.member.roles.cache.has('1013855586955313215')  === true){
            interaction.member.roles.remove('1013855586955313215');
           await interaction.member.roles.add('1013855854249910403');
           await interaction.reply({
                embeds: [embedArtesão],
                ephemeral: true
            })
        }     

}}
        