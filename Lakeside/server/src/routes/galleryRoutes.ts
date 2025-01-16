import { Router } from 'express';
import { saveGalleryImages, getGalleryImages, deleteGalleryImage, getPublicImages, savePublicImages, deleteAllPublicImages } from '../controllers/galleryController.js';

const router = Router();
//editor images
router.get('/images', getGalleryImages);
router.post('/save-images', saveGalleryImages);
router.post('/delete-image', deleteGalleryImage);

//public images
router.get('/get-public', getPublicImages);
router.post('/save-public', savePublicImages);
router.post('/delete-all-public', deleteAllPublicImages);

export default router;