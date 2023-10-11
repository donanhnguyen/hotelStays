import Review from "../models/Review.js";
import Hotel from "../models/Hotel.js";

// GET all reviews from hotel
export const getAllReviewsFromHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId);
        res.status(200).json(hotel.reviews);
    } catch(err) {
        res.status(500).json(err);
    }
}

// POST review

export const createReview = async (req, res) => {
    const { hotelId } = req.params; // Assuming you're passing the hotel ID as a parameter
    const { username, email, text, rating, userId } = req.body; // Extract review data from the request body
  
    try {
      // Find the hotel by ID
      const hotel = await Hotel.findById(hotelId);
  
      if (!hotel) {
        return res.status(404).json({ message: 'Hotel not found' });
      }

        //  check if user already wrote a review for this hotel  
      const existingReview = hotel.reviews.find((review) => review.userId.toString() === userId);
      if (existingReview) {
        return res.status(400).json({ message: 'You have already reviewed this hotel' });
      }
  
      // Create a new review
      const newReview = {
        username,
        email,
        text,
        rating,
        userId,
        hotelId,
      };
  
      // Push the new review to the hotel's reviews array
      hotel.reviews.push(newReview);
  
      // Save the hotel with the new review
      const savedHotel = await hotel.save();
  
      res.status(200).json(savedHotel); // You can return the updated hotel or a success message
    } catch (err) {
      res.status(500).json({ message: 'Review creation failed', error: err.message });
    }
  };