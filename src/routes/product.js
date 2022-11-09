import { Router } from "express";
import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "../controller/product.controller";
import { userupload } from "../helpers/multer";
import validateSchema from "../helpers/validator";
import authCheck from "../helpers/verify.token";
import { validateProduct, validateUpdateProduct } from "../validator/product.validation";

const router = Router();

// product related routes

router.get('/', getAllProduct);
router.post('/new', validateSchema(validateProduct), createProduct);
router.put('/:id', validateSchema(validateUpdateProduct), authCheck, userupload.single('product_img'), updateProduct);
router.get('/:id', getSingleProduct);
router.delete('/:id', deleteProduct)

export default router;