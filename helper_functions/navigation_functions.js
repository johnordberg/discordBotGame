const { Collection } = require('discord.js');
const currency = new Collection();
const { Users, CurrencyShop, UserItems, QuestLocations, Characters, Enemies, Interactables } = require('../dbObjects.js');

async function getPlayerCoords(id){
    var user = await Users.findOne({where: { user_id: id } });
    return [user.x_coord, user.y_coord];
}

async function getPlayerLocation(id){
    var user = await Users.findOne({where: { user_id: id } });
    return user.current_location;
}

async function getPlayerRoom(x,y,location){
    var quest = await QuestLocations.findOne({where: { quest_name: location } });
    var questData = quest.quest_layout.room_data;
    var questMap = quest.quest_layout.room_layout;
    var roomIndex = questMap[y][x];
    return questData[roomIndex];
}

async function movePlayerDirection(id, direction){
    var user = await Users.findOne({where: { user_id: id } });
    var quest = await QuestLocations.findOne({where: { quest_name: user.current_location } });

    if (direction == "north"){
        if (quest.quest_layout.room_layout[user.y_coord - 1][user.x_coord] != 0){
            user.y_coord -= 1 ;
            user.save();
            return true;
        }
    }

    else if (direction == "south"){
        if (quest.quest_layout.room_layout[user.y_coord + 1][user.x_coord] != 0){
            user.y_coord += 1 ;
            user.save();
            return true;
        }
    }

    else if (direction == "east"){
        if (quest.quest_layout.room_layout[user.y_coord][user.x_coord - 1] != 0){
            user.x_coord -= 1 ;
            user.save();
            return true;
        }
    }

    else if (direction == "west"){
        if (quest.quest_layout.room_layout[user.y_coord][user.x_coord + 1] != 0){
            user.x_coord += 1 ;
            user.save();
            return true;
        }
    }

    return false;
}

module.exports = { getPlayerCoords, getPlayerLocation, getPlayerRoom, movePlayerDirection };