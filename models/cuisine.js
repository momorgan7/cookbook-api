'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cuisine = sequelize.define('Cuisine', {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      }
  }, {});
  Cuisine.associate = function(models) {
    // associations can be defined here
  };
  return Cuisine;
};
