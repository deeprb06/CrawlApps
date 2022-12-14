import { Router } from "express";
import user from './user'
import category from './category';
import product from './product';

const router = Router();

router.use('/user', user);
router.use('/category', category);
router.use('/product', product);

export default router;