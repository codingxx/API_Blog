'use strict';
const { Model } = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
     // User.hasMany(article)
      
    }
  };
  User.init({
    username: {
		type: DataTypes.STRING,
		allowNull: false
	},
    email: {
		type: DataTypes.STRING,
		unique: true,
		allowNull: false
	},
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};