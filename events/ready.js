const { Events } = require('discord.js');
const { Users } = require('../dbObjects.js');

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		client.once(Events.ClientReady, async readyClient => {
			const storedBalances = await Users.findAll();
			storedBalances.forEach(b => currency.set(b.user_id, b));
		
			console.log(`Logged in as ${readyClient.user.tag}!`);
		});
	},
};