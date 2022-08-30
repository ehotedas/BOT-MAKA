
module.exports = {

    run: async(interaction) => { 
        
        // Const Variables
        const callback = interaction.user;
        const target = interaction.options._hoistedOptions[0].user;
        let reason = interaction.options._hoistedOptions[1].value;
        const AvatarURL = target.displayAvatarURL();
        const fullname = `${target.username}#${target.discriminator}`;
        const { EmbedBuilder } = require('discord.js');
        
        //ifs
        if(callback === target){
            interaction.reply("idiot! can't be yourself!");
        }
        else if(target.id === "your id bot"){
            interaction.reply("**Trying to banish me? I should ban you for that!😡**")
        }
        else if(target.id === "your id here"){
            interaction.reply("**Trying to banish my lord?😡**")
        }

        else{const embedkick = new EmbedBuilder()
            .setColor(0x00FFFF)
            .setTitle(`${fullname} was BANNED!`)
            .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp'})
            .setDescription(`WELL DONE YOU SILLY! <:angry:1014132923366129758>\n*REASON:* *${reason}*`)
            .setThumbnail(`${AvatarURL}`)

        interaction.guild.members.ban(target,{reason})
        interaction.reply({embeds: [embedkick]})
    }

    }}



