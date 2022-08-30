module.exports = {

    run: async(interaction) => {
        // Const Variables
        const { PermissionsBitField, PermissionFlagsBits } = require('discord.js');
        const target = interaction.options._hoistedOptions[0].member;
        const AvatarURL = target.displayAvatarURL();
        // Validate user permissions
        target.permissions.has("KickMembers") ? kick = true : kick = false
        target.permissions.has("BanMembers") ? ban = true : ban = false
        target.permissions.has("MuteMembers") ? mute = true : mute = false
        target.permissions.has("MoveMembers") ? move = true : move = false
        target.permissions.has("ManageMessages") ? message = true : message = false
        target.permissions.has("ViewAuditLog") ? log = true : log = false
//-----------------------------------------------------------------------------------//
        ban ? ban = "YES" : ban ="NO";
        kick ? kick = "YES" : kick = "NO";
        mute ? mute = "YES" : mute = "NO";
        move ? move = "YES" : move = "NO";
        message ? message = "YES" : message = "NO";
        log ? log = "YES" : log = "NO";

//-----------------------------------------------------------------------------------//       
        //CRIA O EMBED E RESPONDE
        const { EmbedBuilder } = require('discord.js');
	    const embedPrivi = new EmbedBuilder()
            .setColor('Random')
            .setTitle(`USER PERMISSIONS`)
            .setAuthor({ name: `${target.user.username}`, iconURL: AvatarURL })
            .setThumbnail(`https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/excalibur.gif`)
            .setDescription(`All user permissions`)
            .addFields(
				{ name: '\u200B', value: '\u200B' },     
				{ name: `Pode kickar? <:kick:1013812212034437150>`, value: `${kick}`, inline:true },
                { name: `BAN? <:ban:1013810153193230356>`, value: `${ban}`, inline:true },
                { name: `MUTE? <:mute:1013810151637139528>`, value: `${mute}`, inline:true },
                { name: `MOVE? <:mover:1013810150202671185>`, value: `${move}`, inline:true },
                { name: `MANAGE MESSAGES? <:editar:1013812722745479279>`, value: `${message}`, inline:true },
                { name: `VIEW AUDIT LOG? <:log:1013812213351469138>`, value: `${log}`, inline:true },
                )
              


	interaction.reply({embeds:[embedPrivi]});
        



}}