module.exports = (sequelize, DataTypes) => {
	return sequelize.define('interactable', {
		int_handle: DataTypes.STRING,
		int_name: DataTypes.STRING,
        int_type: DataTypes.STRING,
        int_owner: DataTypes.INTEGER,
        int_data: DataTypes.JSON,
	}, {
		timestamps: false,
	});
};