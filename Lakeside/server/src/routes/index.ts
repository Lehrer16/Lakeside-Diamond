import { Router } from 'express';
import userRoutes from './userRoutes.js';
import galleryRoutes from './galleryRoutes.js';

const router = Router();

router.use('/api/users', userRoutes);
router.use('/api/gallery', galleryRoutes);

export default router;