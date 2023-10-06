import mongoose from "mongoose";
import Room from "./Room.js";

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    planet: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    rooms: [Room.schema] // Use Room.schema to reference the schema
});

export default mongoose.model("Hotel", HotelSchema);
