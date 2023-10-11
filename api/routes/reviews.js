import express from "express";
import { createReview, getAllReviewsFromHotel } from "../controllers/review.js";

const router = express.Router();

router.get('/:hotelId/', getAllReviewsFromHotel)

router.post('/:hotelId/', createReview)

export default router;