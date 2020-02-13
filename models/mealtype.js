'use strict';
module.exports = (sequelize, DataTypes) => {
  const MealType = sequelize.define('MealType', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
  }, {});
  MealType.associate = function(models) {
    // associations can be defined here
  };
  return MealType;
};
