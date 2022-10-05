module.exports = (sequelize, DataTypes) => {
  const Cars = sequelize.define(
    "Cars",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        // autoIncrement: true,
        allowNull: false,
      },
      car_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_size: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      tableName: "cars",
    }
  );
  return Cars;
};
