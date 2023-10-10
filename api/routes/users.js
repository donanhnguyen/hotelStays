import express from "express";
import {logInUser, logInWithGoogle} from "../controllers/user.js";

const router = express.Router();

// get user /  log in
router.post('/:username', logInUser)

// log in with google
router.get('/logInWIthGoogle/:email', logInWithGoogle)

export default router;