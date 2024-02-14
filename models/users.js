module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		balance: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		current_location: {
			type: DataTypes.STRING,
			defaultValue: "Dipshit HQ"
		},
		x_coord: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			allowNull: false
		},
		y_coord: {
			type: DataTypes.INTEGER,
			defaultValue: 4,
			allowNull: false
		},
		xp: {
			type: DataTypes.INTEGER,
			defaultValue: 0,
			allowNull: false
		},
		level: {
			type: DataTypes.INTEGER,
			defaultValue: 1,
			allowNull: false
		},
		max_hp: {
			type: DataTypes.INTEGER,
			defaultValue: 10,
			allowNull: false
		},
		hp: {
			type: DataTypes.INTEGER,
			defaultValue: 10,
			allowNull: false
		},
		game_state: {
			type: DataTypes.STRING
		},
		status_effects: {
			type: DataTypes.JSON
		}
	}, {
		timestamps: false,
	});
};