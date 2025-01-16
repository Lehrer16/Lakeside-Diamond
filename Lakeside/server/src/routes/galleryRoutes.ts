import { Router } from 'express';
import { saveGalleryImages, getGalleryImages } from '../controllers/galleryController.js';

const router = Router();

router.post('/save-images', saveGalleryImages);
router.get('/images', getGalleryImages);


export default router;