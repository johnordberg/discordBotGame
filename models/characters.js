module.exports = (sequelize, DataTypes) => {
	return sequelize.define('character', {
		char_name: DataTypes.STRING,
        char_data: DataTypes.JSON
	}, {
		timestamps: false,
	});
};