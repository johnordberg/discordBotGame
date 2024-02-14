const { SlashCommandBuilder } = require('discord.js');
const inventory_functions = require('../../helper_functions/inventory_functions.js');

module.exports = {
    category: 'inventory',
	data: new SlashCommandBuilder()
		.setName('view-inventory')
		.setDescription('View your Inventory'),
	async execute(interaction) {
		const target = interaction.options.getUser('user') ?? interaction.user;
        const items = await inventory_functions.getItems(target.id);

        if (!items.length) return interaction.reply(`${target.tag} has nothing!`);

        await interaction.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	},
};