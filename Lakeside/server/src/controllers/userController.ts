import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Register a new user
export const registerUser = async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, password: hashedPassword });
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Error registering user' });
  }
};

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;
    try {
        console.log('Login attempt:', { username, password }); // Log attempt

        const user = await User.findOne({ where: { username } });
        console.log('User found:', user); // Log user info

        if (!user) {
            console.log('User not found:', username);
            res.status(404).json({ error: 'User not found' });
            return;
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log('Password valid:', isPasswordValid); // Log password validation

        if (!isPasswordValid) {
            console.log('Invalid credentials for user:', username);
            res.status(401).json({ error: 'Invalid credentials' });
            return;
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET_KEY as string, { expiresIn: '1h' });
        console.log('Token generated:', token); // Log token
        res.json({ token });
    } catch (error) {
        // Enhanced error logging
        console.error('Error logging in:', error); // Log full error
        res.status(500).json({ error: 'Error logging in', details: error instanceof Error ? error.message : 'Unexpected error' });
    }
};

// Controller to delete a user
const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find and delete the user
    const deletedUser = await User.destroy({ where: { id } });

    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Error deleting user' });
  }
};

export { deleteUser };

// Fetch all users (example of a protected route)
export const getAllUsers = async (_req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};