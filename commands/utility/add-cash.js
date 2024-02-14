const { SlashCommandBuilder } = require('discord.js');
const currency_functions = require('../../helper_functions/currency_functions.js');

module.exports = {
    category: 'utility',
	data: new SlashCommandBuilder()
		.setName('add-cash')
		.setDescription('Add money to balance'),
	async execute(interaction) {
		const target = interaction.options.getUser('user') ?? interaction.user;
        var displayBalance = currency_functions.getBalance(target.id) + 1;
        currency_functions.addBalance(target.id, 1);
		await interaction.reply(`you added one dollar, now ${target.tag} has ${displayBalance}💰`);
	},
};