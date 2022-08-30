module.exports = {

    run: async(interaction) => { 
        // Const Variables
        const callback = interaction.user;
        const target = interaction.options._hoistedOptions[0].user;
        let reason =interaction.options._hoistedOptions[1].value;
        const AvatarURL = target.displayAvatarURL();
        const fullname = `${target.username}#${target.discriminator}`;
        const { EmbedBuilder, ButtonInteraction, Collection } = require('discord.js');
        //ifs
        if(callback === target){
            interaction.reply("idiot! can't be yourself!");
        }
        else if(target.id === "1012666671443484713"){
            interaction.reply("**Trying to kick me? I should kick you for that!😡**")
        }
        else if(target.id === "495363811272949761"){
            interaction.reply("**Trying to banish my lord?😡**")
        }
        
        else{
            const embedkick = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setTitle(`${fullname} IT WAS EXPELLED!`)
            .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp' })
            .setDescription(`LEARN TO FOLLOW THE RULES!😡\n *REASON:* *${reason}*`)
            .setThumbnail(`${AvatarURL}`)

            interaction.guild.members.kick(target,reason)
            interaction.reply({embeds: [embedkick]})

    }}}