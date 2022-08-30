module.exports = {

    run: async(interaction) => {

    //target = selected member
    const target = interaction.options._hoistedOptions[0].member;
    const AvatarURL = target.displayAvatarURL();

    interaction.reply(AvatarURL)

}}