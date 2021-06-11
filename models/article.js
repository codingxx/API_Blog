'use strict';
const {
  Model
} = require('sequelize');
const tag = require('./tag');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    
    static associate(models) {
      // Article.belongsTo(user)
      // Article.hasMany(Comment)
      // Article.belongsToMany(tag, {through: 'ArticleTags'})
    }
  };
  Article.init({
    title: {
      type:DataTypes.STRING,
      unique: true},
    content: DataTypes.TEXT,
    published: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};