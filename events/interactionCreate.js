const Sequelize = require('sequelize');
const { Events, Collection, GatewayIntentBits } = require('discord.js');
const { Users, CurrencyShop, UserItems, QuestLocations, Characters, Enemies, Interactables } = require('../dbObjects.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		if (!interaction.isChatInputCommand()) return;

		const client = interaction.options.getUser('user') ?? interaction.user;
		var user = await Users.findOne({where: { user_id: client.id } });
		if (user) {
			
		}
		else{
			const newUser = await Users.create({ 
				user_id: client.id,
				balance: 0,
				current_location: "Dipshit HQ",
				x_coord: 1,
				y_coord:  4,
				xp: 0,
				level: 1,
				max_hp: 10,
				hp: 10,
				game_state: "intro",
				status_effects: {}
			});
			Users.upsert(id, newUser);
		}

		const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

        const { cooldowns } = interaction.client;

        if (!cooldowns.has(command.data.name)) {
            cooldowns.set(command.data.name, new Collection());
        }

        const now = Date.now();
        const timestamps = cooldowns.get(command.data.name);
        const defaultCooldownDuration = 3;
        const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1_000;

        if (timestamps.has(interaction.user.id)) {
            const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

            if (now < expirationTime) {
                const expiredTimestamp = Math.round(expirationTime / 1_000);
                return interaction.reply({ content: `Please wait, you are on a cooldown for \`${command.data.name}\`. You can use it again <t:${expiredTimestamp}:R>.`, ephemeral: true });
            }
        }

        timestamps.set(interaction.user.id, now);
        setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			if (interaction.replied || interaction.deferred) {
				await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
			} else {
				await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
			}
		}
	},
};