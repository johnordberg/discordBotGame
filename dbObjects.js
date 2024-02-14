const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/users.js')(sequelize, Sequelize.DataTypes);
const CurrencyShop = require('./models/currencyShop.js')(sequelize, Sequelize.DataTypes);
const UserItems = require('./models/userItems.js')(sequelize, Sequelize.DataTypes);
const QuestLocations = require('./models/questLocations.js')(sequelize, Sequelize.DataTypes);
const Characters = require('./models/characters.js')(sequelize, Sequelize.DataTypes);
const Enemies = require('./models/enemies.js')(sequelize, Sequelize.DataTypes);
const Interactables = require('./models/interactables.js')(sequelize, Sequelize.DataTypes);

UserItems.belongsTo(CurrencyShop, { foreignKey: 'item_id', as: 'item' });

module.exports = { Users, CurrencyShop, UserItems, QuestLocations, Characters, Enemies, Interactables };