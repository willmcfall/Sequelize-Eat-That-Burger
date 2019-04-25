/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  const burgers = sequelize.define(
    'burgers',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
  );
  return burgers;
};
