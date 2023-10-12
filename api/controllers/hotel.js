
import Hotel from "../models/Hotel.js";


// GET all hotels
export const getAllHotels = async (req, res) => {
    try {
        const allHotels = await Hotel.find();
        res.status(200).json(allHotels);
    } catch(err) {
        res.status(500).json(err);
    }
}

// get info for one hotel

export const getHotel = async (req, res) => {
    try {
        const hotel = await Hotel.findById(req.params.hotelId);
        res.status(200).json(hotel);
    } catch(err) {
        res.status(500).json(err);
    }
}

// POST hotel

export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);

    try {
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    } catch(err) {
        res.status(500).json(err);
    }
};