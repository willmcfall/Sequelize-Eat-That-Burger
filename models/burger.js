/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  const burger = sequelize.define('Burger', {
    burgers: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      len: [1],
    },
  });

  return burger;
};