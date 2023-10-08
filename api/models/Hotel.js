import mongoose from "mongoose";
import Room from "./Room.js";
import Review from "./Review.js";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true
    },
    picUrl: {
        type: String,
        required: false
    },
    rooms: [Room.schema],
    reviews: [Review.schema]
});

// Add a method to calculate the average rating for the hotel
HotelSchema.methods.calculateAverageRating = async function () {
    const reviews = await mongoose.model("Review").find({ hotelId: this._id });
    if (reviews.length === 0) {
        return 0; // Return 0 if there are no reviews
    }

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / reviews.length;
};

export default mongoose.model("Hotel", HotelSchema);
