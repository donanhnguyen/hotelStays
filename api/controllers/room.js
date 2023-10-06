import Room from "../models/Room.js";
import Hotel from '../models/Hotel.js';
// GET all rooms from a specific hotel
export const getAllRoomsFromHotel = async (req, res) => {
    try {
        const allRooms = await Room.find({hotelId: req.params.hotelId});
        res.status(200).json(allRooms);
    } catch(err) {
        res.status(500).json(err);
    }
}

// only used for testing api purposes
export const createRoomInHotel =  async (req, res) => {
    const newRoom = new Room(req.body);
    try {
        const savedRoom = await newRoom.save();
        res.status(200).json(savedRoom);

    } catch(err) {
        res.status(500).json(err);
    }
};

// PUT update a room's unavailableDates array when booking a room within a hotel
export const updateRoomUnavailableDates = async (req, res) => {
    try {
      // Find the hotel by its ID
      const foundHotel = await Hotel.findById(req.params.hotelId);

      // Find the room within the hotel's rooms array based on its ID
      const roomToUpdate = foundHotel.rooms.find((room) => room._id.toString() === req.params.roomId);

      if (!roomToUpdate) {
          return res.status(404).json({ message: "Room not found" });
      }

      // Update the room's unavailable dates
      roomToUpdate.unavailableDates = req.body.unavailableDates;

      // Save the hotel to persist the changes
      const updatedHotel = await foundHotel.save();

      res.status(200).json(updatedHotel);
    } catch(err) {
        res.status(500).json(err);
    }
};

export const getSingleRoom = async (req, res) => {
    try {
        const foundHotel = await Hotel.findById(req.params.hotelId);
        const foundRoom = foundHotel.rooms.find((room) => room._id.toString() === req.params.roomId);
        res.status(200).json(foundRoom);
    } catch(err) {
        res.status(500).json(err);
    }
}