import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';

class Office extends Model {}

Office.init(
  {
    specialty: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: 'Office',
    tableName: 'offices',
    timestamps: false,
  }
);

export default Office;