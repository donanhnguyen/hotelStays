import mongoose from "mongoose";
const {Schema} = mongoose;


const BookingSchema = new mongoose.Schema({
    nameOfHotel: {
        type: String,
        required: true
    },
    hotelId: {
        type: Schema.Types.ObjectId,
        ref: "Hotel",
        required: true
    },
    nameOfRoom: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    dates: {
        type: [{type: String}]
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    roomId: {
        type: Schema.Types.ObjectId,
        ref: "Room",
        required: true
    },

}, {timestamps: true})

export default mongoose.model("Booking", BookingSchema);