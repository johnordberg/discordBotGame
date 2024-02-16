const { SlashCommandBuilder, bold, italic, strikethrough, underscore, spoiler, quote, blockQuote } = require('discord.js');
const navigation_functions = require('../../helper_functions/navigation_functions.js');

module.exports = {
    category: 'navigation',
	data: new SlashCommandBuilder()
		.setName('move-direction')
		.setDescription('Look at your surroundings')
        .addStringOption(option =>
			option.setName('direction')
				.setDescription('Which direction do you want to move')
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

        const tryMove = await navigation_functions.movePlayerDirection(target.id, direction);
		
        var finalDipslayString = 'There is nothing in that direction, try the command' + bold('look-direction') + ' to see what is in a direction.';
        if (tryMove){
            finalDipslayString = 'You moved to the room ' + direction + ' of you.';
        }
        await interaction.reply(finalDipslayString);
	},
};