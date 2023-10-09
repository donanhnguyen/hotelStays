import express from "express";
import {logInUser } from "../controllers/user.js";

const router = express.Router();

// get user /  log in
router.post('/:username', logInUser)

export default router;