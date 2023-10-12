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

export default mongoose.model("Hotel", HotelSchema);
