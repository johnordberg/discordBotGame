module.exports = (sequelize, DataTypes) => {
	return sequelize.define('enemy', {
		enemy_name: DataTypes.STRING,
        enemy_data: DataTypes.JSON
	}, {
		timestamps: false,
	});
};