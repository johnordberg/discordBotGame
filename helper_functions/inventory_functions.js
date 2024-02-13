const { Collection } = require('discord.js');
const currency = new Collection();
const { Users, CurrencyShop, UserItems } = require('../dbObjects.js');

function getItems(id) {
	return UserItems.findAll({
        where: { user_id: id },
        include: ['item'],
    });
}

async function addItem(userId, itemId) {
	const userItem = await UserItems.findOne({
        where: { user_id: userId, item_id: itemId },
    });

    if (userItem) {
        userItem.amount += 1;
        return userItem.save();
    }

    return UserItems.create({ user_id: userId, item_id: itemId, amount: 1 });
}

async function getItemByName(itemName){
    var item = await CurrencyShop.findOne({where: { name: itemName } });
    return item;
}

module.exports = { getItems, addItem, getItemByName };