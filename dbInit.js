const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const CurrencyShop = require('./models/currencyShop.js')(sequelize, Sequelize.DataTypes);
require('./models/users.js')(sequelize, Sequelize.DataTypes);
require('./models/userItems.js')(sequelize, Sequelize.DataTypes);
const Quests = require('./models/questLocations.js')(sequelize, Sequelize.DataTypes);
require('./models/characters.js')(sequelize, Sequelize.DataTypes);
require('./models/enemies.js')(sequelize, Sequelize.DataTypes);
require('./models/interactables.js')(sequelize, Sequelize.DataTypes);

const room_creation_functions = require('./helper_functions/room_creation_functions.js');

const force = process.argv.includes('--force') || process.argv.includes('-f');

sequelize.sync({ force }).then(async () => {
	const shop = [
		CurrencyShop.upsert({ name: 'Tea', cost: 1 }),
		CurrencyShop.upsert({ name: 'Coffee', cost: 2 }),
		CurrencyShop.upsert({ name: 'Cake', cost: 5 }),
		Quests.upsert(room_creation_functions.generateHqMapData())
	];

	await Promise.all(shop);
	console.log('Database synced');

	sequelize.close();
}).catch(console.error);