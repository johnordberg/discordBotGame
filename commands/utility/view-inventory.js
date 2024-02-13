const { SlashCommandBuilder } = require('discord.js');
const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const { Users } = require('../../dbObjects.js');

module.exports = {
    category: 'utility',
	data: new SlashCommandBuilder()
		.setName('view-inventory')
		.setDescription('View your Inventory'),
	async execute(interaction) {
		const target = interaction.options.getUser('user') ?? interaction.user;
        const user = await Users.findOne({ where: { user_id: target.id } });
        const items = await user.getItems();

        if (!items.length) return interaction.reply(`${target.tag} has nothing!`);

        await interaction.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	},
};