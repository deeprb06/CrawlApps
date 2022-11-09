import { Router } from "express";
import { createUser, LogIn } from "../controller/auth.controller";
import validateSchema from "../helpers/validator";
import { signin, signup } from "../validator/auth.validation";

const router = Router();

// for authentication routes
router.post("/signup", validateSchema(signup), createUser)
router.post('/signin', validateSchema(signin), LogIn)

export default router;