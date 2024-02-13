const { SlashCommandBuilder } = require('discord.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const { Users } = require('../../dbObjects.js');
const inventory_functions = require('../../helper_functions/inventory_functions.js');

module.exports = {
    category: 'utility',
	data: new SlashCommandBuilder()
		.setName('add-item')
		.setDescription('Add an item directly to your inventory')
        .addStringOption(option =>
			option.setName('item')
				.setDescription('The Item to add.')
				.setRequired(true)),
	async execute(interaction) {
        const itemName = interaction.options.getString('item', true);
		const target = interaction.options.getUser('user') ?? interaction.user;

        var item = await inventory_functions.getItemByName(itemName);

        await inventory_functions.addItem(target.id, item.id);

        await interaction.reply(`added ${item.name} to ${target.tag}'s inventory`);
	},
};