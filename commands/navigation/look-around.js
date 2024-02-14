const { SlashCommandBuilder } = require('discord.js');
const navigation_functions = require('../../helper_functions/navigation_functions.js');

module.exports = {
    category: 'navigation',
	data: new SlashCommandBuilder()
		.setName('look-around')
		.setDescription('Look at your surroundings'),
	async execute(interaction) {
		const target = interaction.options.getUser('user') ?? interaction.user;
        const coords = await navigation_functions.getPlayerCoords(target.id);
        const location = await navigation_functions.getPlayerLocation(target.id);
        

        await interaction.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	},
};