/* eslint-disable func-names */
module.exports = function (sequelize, DataTypes) {
  const burger = sequelize.define(
    'burger',
    {
      burger_name: {
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
    },
    {
      freezeTableName: true,
      tableName: 'burger',
    },
  );

  return burger;
};
