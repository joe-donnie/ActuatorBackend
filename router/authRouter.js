import express from "express";
import { getMe, loginUser, logout} from "../controllers/authController.js";

const router = express.Router();

router.post('/login', loginUser);
router.post('/logout', logout);
router.get('/me', getMe);

export default router;