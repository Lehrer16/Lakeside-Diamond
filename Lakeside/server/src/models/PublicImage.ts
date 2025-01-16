import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';

class PublicImage extends Model {}

PublicImage.init(
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'PublicImage',
    tableName: 'public_images',
    timestamps: false,
  }
);

export default PublicImage;