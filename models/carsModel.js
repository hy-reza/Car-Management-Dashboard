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
      car_type: {
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
      car_availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },
    {
      timestamps: true,
      tableName: "cars",
    }
  );
  return Cars;
};
