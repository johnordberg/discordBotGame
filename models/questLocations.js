module.exports = (sequelize, DataTypes) => {
	return sequelize.define('quest_location', {
		quest_name: {
			type: DataTypes.STRING,
			unique: true,
		},
		quest_difficulty: DataTypes.INTEGER,
		quest_layout: DataTypes.JSON
	}, {
		timestamps: false,
	});
};