import mongoose from "mongoose";
const {Schema} = mongoose;

const ReviewSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: "Hotel",
        required: true
    }
}, {timestamps: true});

export default mongoose.model("Review", ReviewSchema);
