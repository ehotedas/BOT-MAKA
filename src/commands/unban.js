module.exports = {

    run: async(interaction) => {

        const callback = interaction.user;
        const member = interaction.options._hoistedOptions[0].user;
        const reason =interaction.options._hoistedOptions[1].value;
        const fullname = `${member.username}#${member.discriminator}`
        const AvatarURL = member.displayAvatarURL();

        if(callback === member){
            interaction.reply("idiot! can't be yourself!");
        }else{
            interaction.guild.members.unban(member,reason);

            const { EmbedBuilder } = require('discord.js');
            const embed_unban = new EmbedBuilder()
                .setColor(0x00FFFF)
                .setTitle(`${fullname} WAS UNBANNED!`)
                .setAuthor({ name: 'Maka Albarn', iconURL: 'https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/Maka_Albarn.webp'})
                .setThumbnail(`${AvatarURL}`)
                .setDescription(`Was forgiven, don't break the rules next time!!\n*REASON:* *${reason}*`)
    
                interaction.reply({embeds: [embed_unban]})
        }

        
}}