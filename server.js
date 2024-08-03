import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

// Create an Express application
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/e-store')
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

// Route handlers
app.use('/auth', authRoutes);
app.use('/products', productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
