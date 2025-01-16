import { Router } from 'express';
import { saveGalleryImages, getGalleryImages, deleteGalleryImage } from '../controllers/galleryController.js';

const router = Router();

router.post('/save-images', saveGalleryImages);
router.get('/images', getGalleryImages);
router.post('/delete-image', deleteGalleryImage);

export default router;