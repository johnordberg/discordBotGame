const { SlashCommandBuilder, bold, italic, strikethrough, underscore, spoiler, quote, blockQuote } = require('discord.js');
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

		var roomData = await navigation_functions.getPlayerRoom(coords[0], coords[1], location);

		console.log(roomData);

		var roomName = roomData.name;
		var roomNPCCount = roomData.npc.length;
		var roomEnemyCount = roomData.enemies.length;

		var instanceString = '';
		for (i=0;i<roomData.unique.length;i++){
			instanceString += bold(roomData.unique[i]) + '\n';
		}
		for (i=0;i<roomData.interactables.length;i++){
			instanceString += bold(roomData.interactables[i]) + '\n';
		}

		var finalDipslayString = "You are in a room labled: " + bold(roomName) + "\n\nYou can see:\n" + bold(roomNPCCount) + " people\n" + bold(roomEnemyCount) + " enemies\n\n";

		if (instanceString != ''){
			finalDipslayString += 'Within your reach are the following:\n' + instanceString;
		}
		else{
			finalDipslayString += "You see no objects of interest"
		}
        await interaction.reply(finalDipslayString);
	},
};