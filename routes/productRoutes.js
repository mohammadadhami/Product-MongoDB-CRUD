import { Router } from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from '../controllers/productController.js';
import { verifyToken } from '../utils/auth.js';

const router = Router();

router.post('/', verifyToken, createProduct);
router.get('/', getProducts);
router.get('/:id', getProductById);
router.put('/:id', verifyToken, updateProduct);
router.delete('/:id', verifyToken, deleteProduct);

export default router;
