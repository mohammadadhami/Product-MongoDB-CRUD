// controllers/authController.js
import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const signUp = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: 'User created' });
  } catch (error) {
    console.error('Error creating user:', error); // Log error details to console
    res.status(500).json({ message: 'Error creating user', error: error.message }); // Return error message
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, 'secret_key');
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error logging in:', error); // Log error details to console
    res.status(500).json({ message: 'Error logging in', error: error.message }); // Return error message
  }
};
