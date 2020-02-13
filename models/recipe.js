'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
    instructions: DataTypes.STRING,
    prep_time: DataTypes.STRING,
    cook_time: DataTypes.STRING,
    source: DataTypes.STRING
  }, {});
  Recipe.associate = function(models) {
    // associations can be defined here
  };
  return Recipe;
};
