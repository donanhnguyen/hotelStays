import express from "express";
import { createHotel, getAllHotels, getHotel} from "../controllers/hotel.js";

const router = express.Router();

// get ALL hotels
router.get('/', getAllHotels)
// get hotel
router.get('/:hotelId', getHotel)
// create a hotel
router.post('/', createHotel)

export default router;