import { useState, useEffect, useContext } from "react";
import Axios from 'axios';
import GlobalContext from './GlobalContext';

function HotelListing (props) {

    const contextInfo = useContext(GlobalContext);
    const {dateRangeArray, isRoomAvailableOrNot, renderURL} = contextInfo;

    const {hotel, navigateToHotelShowPage, sortFilterState} = props;

    function getStartingPrice () {
        if (hotel.rooms.length > 0) {
            var lowest = hotel.rooms[0].price;
            for (let i in hotel.rooms) {
                if (hotel.rooms[i].price < lowest) {
                    lowest = hotel.rooms[i].price;
                }
            }
            return lowest;
        } 
    }

    function countHowManyAvailableRooms () {
        var numberOfAvailableRooms = 0;
        for (let i in hotel.rooms) {
            let currentRoom = hotel.rooms[i];
            if (isRoomAvailableOrNot(dateRangeArray, currentRoom.unavailableDates)) {
                numberOfAvailableRooms += 1;
            }
        }
        return numberOfAvailableRooms;
    }
    
    if (countHowManyAvailableRooms() > 0) {
      return (
        <div 
            className="single-hotel-listing-container" 
        >

            {/* 33.3% */}
            <div className="image-part">
                <img className="hotel-pic-in-search-page" src={require(`../pics/${hotel.name.split(' ').join('')}.jpg`)}></img>
            </div>
            
            
            {/* 66.6% */}
            <div className="hotel-listing-info">
                <h2 className="hotel-name-in-listing">{hotel.name}</h2>
                <h1>Planet: {hotel.planet}</h1>
                
                <h1>
                    Rooms starting at 
                    {
                        hotel.rooms.length !== 0 ?
                        <p className="price">$ {getStartingPrice()} per night</p> 
                        :
                        ""
                    }
                
                </h1>
                {/* # of rooms available */}
                <h1>
                    {dateRangeArray ?  <p style={{color: 'red'}}>Rooms Available: {countHowManyAvailableRooms()}</p> : <p style={{color: 'red'}}>Select dates to see available rooms.</p>}
                </h1>
                <button onClick={() => navigateToHotelShowPage(hotel)} className='btn btn-warning btn-lg'>See Rooms</button>
            </div>
            
        </div>
        )  
    }

    
}


export default HotelListing;