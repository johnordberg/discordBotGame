function generateHqMapData(){

    var questName = "Dipshit HQ";
    var questDifficulty = 0;
    var questLayout = {
        room_data: [
            {
                index: 0,
                name: "empty",
                npc: [],
                enemies: [],
                interactables: [],
                unique: []
            },
            {
                index: 1,
                name: "Street Exit",
                npc: [],
                enemies: [],
                interactables: ["Umbrella Holder"],
                unique: ["Door To Street"]
            },
            {
                index: 2,
                name: "Reception",
                npc: ["Binky Fizzlebang", "Hank"],
                enemies: [],
                interactables: ["Service Bell", "Reception Computer", "Purse", "Trash Can", "Dog Water Bowl", "Dog Food Bowl"],
                unique: []
            },
            {
                index: 3,
                name: "Waiting Room",
                npc: ["Giggles McSnort", "Doodle Von Quirk", "Zany Whoopee", "Bumble Stumbletoes", "Snickerdoodle Popkiss"],
                enemies: [],
                interactables: ["Empty Chair", "Backpack", "Purse", "Water Cooler", "Pile of Magazines", "Coffee Machine", "Indoor Plant", "Window", "Thermastat", "Lost and Found Box", "Painting Frame" ],
                unique: []
            },
            {
                index: 4,
                name: "Hall of Fame",
                npc: [],
                enemies: ["Ghost"],
                interactables: ["Painting of Founder", "Glass Display Case"],
                unique: ["Leader Board"]
            },
            {
                index: 5,
                name: "Central Command",
                npc: ["Twinkle Toes McFancy", "Pippin Dandysocks", "Captain Chuckles Jinglebean"],
                enemies: [],
                interactables: ["Computer Workstation", "Case Files", "Evidence Locker", "Dimensional Map", "Whiteboard", "Psychic Intercom System", "Coffee Machine", "Beer Fridge", "Refridgerator"],
                unique: ["Company Storage"]
            },
            {
                index: 6,
                name: "Shop",
                npc: ["Fizzywink Prattlebox"],
                enemies: [],
                interactables: ["Cash Register", "Service Bell", "Coffee", "Hank Plushy", "Dog Treat Jar"],
                unique: ["HQ Shop"]
            },
            {
                index: 7,
                name: "Archive",
                npc: ["Mopsy Tiddlewomp"],
                enemies: ["Rat", "Rat", "Rat"],
                interactables: ["Purse", "Laptop Bag", "Metal Thermos", "Bookshelf", "Diary", "Building Controls"],
                unique: ["Interdimensional Fetcher", "Archive Directory"]
            },
            {
                index: 8,
                name: "Quest Board",
                npc: [],
                enemies: [],
                interactables: [],
                unique: ["Quest Board"]
            },
            {
                index: 9,
                name: "Bathroom",
                npc: [],
                enemies: ["Toilet Mimic"],
                interactables: ["Trash Can", "Sink", "Paper Towel Dispenser", "Mirror", "Toilet Paper Dispenser"],
                unique: []
            }

        ],
        room_layout: [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,9,0,8,0,0],
            [0,3,4,5,6,0],
            [0,2,0,7,0,0],
            [0,1,0,0,0,0]
        ]
    }

    return { 'quest_name': questName, 'quest_difficulty': questDifficulty, 'quest_layout': questLayout };
}

module.exports = { generateHqMapData };