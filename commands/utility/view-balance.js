const { SlashCommandBuilder } = require('discord.js');
const currency_functions = require('../../helper_functions/currency_functions.js');

module.exports = {
    category: 'utility',
	data: new SlashCommandBuilder()
		.setName('view-balance')
		.setDescription('View your balance'),
	async execute(interaction) {
		const target = interaction.options.getUser('user') ?? interaction.user;
		await interaction.reply(`${target.tag} has ${currency_functions.getBalance(target.id)}💰`);
	},
};