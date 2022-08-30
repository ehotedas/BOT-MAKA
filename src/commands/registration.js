const { EmbedBuilder, ButtonInteraction, Collection } = require('discord.js');

module.exports = {

    run: async(interaction) => {
      
      const embedShibusen = new EmbedBuilder()
            .setColor('NotQuiteBlack')
            .setTitle(`WELCOME TO SHIBUSEN!`)
            .setAuthor({ name: 'Shinigami', iconURL: 'https://static.wikia.nocookie.net/souleater/images/d/de/Soul_Eater_Wiki_Icon_-_Shinigami2.png/revision/latest?cb=20140402034651' })
            .setDescription(`Shinigami School for Weapons and Artisans, with the aim of training weapons and artisans to protect the world and prevent the birth of a new Kishin!`)
            .setImage('https://raw.githubusercontent.com/ehotedas/BOT_MAKA/main/shibusen%20gif.gif');


     const BLOOD = {
        "type": 1,
        "components": [
          {
            "custom_id": `BLOOD`,
            "placeholder": `WHAT YOUR BLOOD`,
            "options": [
              {
                "label": `Artisan`,
                "value": `Artisan`,
                "description": `need to have a weapon partner`,
                "default": false
              },
              {
                "label": `Weapon`,
                "value": `Weapon`,
                "description": `need to have an artisan partner`,
                "default": false
              }
            ],
            "min_values": 1,
            "max_values": 1,
            "type": 3
          }
        ]
      }   

     interaction.reply({
        embeds: [embedShibusen],
        components: [BLOOD]
     })
    
    }}

    