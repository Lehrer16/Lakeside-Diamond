// Lakeside/server/src/models/GalleryImage.ts
import { DataTypes, Model } from 'sequelize';
import sequelize from '../config/connection.js';

class GalleryImage extends Model {}

GalleryImage.init(
  {
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'GalleryImage',
    tableName: 'gallery_images',
    timestamps: false,
  }
);

export default GalleryImage;