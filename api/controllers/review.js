
import Review from "../models/Review.js";


// GET all reviews from hotel
export const getAllReviewsFromHotel = async (req, res) => {
    try {
        const allReviews = await Review.find({hotelId: req.params.hotelId});
        res.status(200).json(allReviews);
    } catch(err) {
        res.status(500).json(err);
    }
}

// POST review

export const createReview = async (req, res) => {
    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        res.status(200).json(savedReview);

    } catch(err) {
        res.status(500).json(err);
    }
};