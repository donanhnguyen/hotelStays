import { useContext } from "react";
import GlobalContext from './GlobalContext';
import StarRating from "./StarRating";
import {Image} from 'react-bootstrap'

function HotelListing (props) {

    const contextInfo = useContext(GlobalContext);
    const {dateRangeArray, isRoomAvailableOrNot} = contextInfo;

    const {hotel, navigateToHotelShowPage} = props;

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

    function getAverageRating () {
        if (hotel.reviews.length) {
            const totalRating = hotel.reviews.reduce((sum, review) => sum + review.rating, 0);
            const averageRating = (totalRating / hotel.reviews.length).toFixed(1);
            return parseFloat(averageRating); // Convert the result back to a float (optional)
          } else {
            return 0.0; // Default value if there are no reviews
          }   
    }
    
    if (countHowManyAvailableRooms() > 0) {
      return (
        <div className="single-hotel-listing-container">

            {/* 33.3% */}
            <div className="image-part">
                <Image src={hotel.picUrl} style={{height: '100%', width: '100%', maxHeight: '400px'}} fluid></Image>
            </div>
            
            
            {/* 66.6% */}
            <div className="hotel-listing-info">
                <h2 className="hotel-name-in-listing">{hotel.name}</h2>
                <h1>City: {hotel.city}</h1>
                
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

                <StarRating rating={getAverageRating()}/>

                <p className="numberofreviewsinlisting">{hotel.reviews.length} {hotel.reviews.length !== 1 ? "reviews" : "review"}</p>
                <p className="averageratinginlisting">{getAverageRating()}/5</p>
                <button onClick={() => navigateToHotelShowPage(hotel)} className='btn btn-warning bottom-right-button'>See Rooms</button>
            </div>
            
        </div>
        )  
    }

    
}


export default HotelListing;