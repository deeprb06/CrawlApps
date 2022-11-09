import { Router } from "express";
import { createCategory, deleteCategory, getAllCategory, getSingleCategory, updateCategory } from "../controller/category.controller";
import validateSchema from "../helpers/validator";
import { validateCategory, validateUpdateCategory } from "../validator/category.validation";
import authCheck from '../helpers/verify.token'
const router = Router();

router.get('/', getAllCategory);
router.post('/new', validateSchema(validateCategory), createCategory);
router.put('/:id', validateSchema(validateUpdateCategory), updateCategory);
router.get('/:id', getSingleCategory);
router.delete('/:id', deleteCategory);

export default router;