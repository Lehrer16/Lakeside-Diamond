import { Router } from 'express';
import { registerUser, loginUser, getAllUsers, deleteUser } from '../controllers/userController.js';

const router = Router();

// Register new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Fetch all users
router.get('/', getAllUsers); 

// Delete user
router.delete('/user/:id', deleteUser);

export default router;