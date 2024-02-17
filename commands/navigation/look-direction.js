const { SlashCommandBuilder, bold, italic, strikethrough, underscore, spoiler, quote, blockQuote } = require('discord.js');
const navigation_functions = require('../../helper_functions/navigation_functions.js');

module.exports = {
    category: 'navigation',
	data: new SlashCommandBuilder()
		.setName('look-direction')
		.setDescription('Look in a direction')
        .addStringOption(option =>
			option.setName('direction')
				.setDescription('Which direction do you want to look')
				.setRequired(true)
                .addChoices(
                    {name: 'North', value: 'north'},
                    {name: 'South', value: 'south'},
                    {name: 'East', value: 'east'},
                    {name: 'West', value: 'west'},
                    )
        ),
	async execute(interaction) {

        const direction = interaction.options.getString('direction', true);
		const target = interaction.options.getUser('user') ?? interaction.user;

        const tryMove = await navigation_functions.getRoomInDirection(target.id, direction);
		
        await interaction.reply(tryMove);
	},
};