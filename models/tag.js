'use strict';
const {
  Model
} = require('sequelize');
const article = require('./article');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    
    static associate(models) {
     //Tag.belongsToMany(article)
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      unique: true,
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};