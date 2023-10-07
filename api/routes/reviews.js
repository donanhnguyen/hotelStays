import express from "express";
import { createReview, getAllReviewsFromHotel } from "../controllers/review.js";

const router = express.Router();

router.get('/', getAllReviewsFromHotel)

router.post('/', createReview)

export default router;