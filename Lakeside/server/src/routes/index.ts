import { Router } from 'express';
import userRoutes from './userRoutes.js'; 
const router = Router();

// Define your routes
router.use('/api/users', userRoutes); 

export default router;