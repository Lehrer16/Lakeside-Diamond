import { Request, Response } from 'express';
import GalleryImage from '../models/GalleryImage.js';

export const saveGalleryImages = async (req: Request, res: Response) => {
  const { images } = req.body;
  try {
    const savedImages = await GalleryImage.bulkCreate(images.map((url: string) => ({ url })));
    res.status(201).json(savedImages);
  } catch (error) {
    res.status(500).json({ error: 'Error saving images' });
  }
};

export const getGalleryImages = async (req: Request, res: Response) => {
  try {
    const images = await GalleryImage.findAll();
    res.status(200).json(images);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching images' });
  }
};