import {useState, useEffect, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import Loader from './Loader';
import './FancyButtons.css';
import PaymentForm from './PaymentForm';

function ConfirmBookingPage () {
    const location = useLocation();
    const contextInfo = useContext(GlobalContext);
    const {currentUserState, 
        dateRangeArray,
        renderURL
    } = contextInfo;
    const {room, hotel} = location.state;

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [bookingConfirmationNumber, setBookingConfirmationNumber] = useState(null);

    var bookingDetailsObject = {
        nameOfHotel: hotel.name,
        hotelId: hotel._id,
        nameOfRoom: room.name,
        totalPrice: dateRangeArray.length * room.price,
        city: hotel.city,
        dates: dateRangeArray,
        userId: currentUserState._id,
        roomId: room._id
    }

    function confirmBooking (e) {
        e.preventDefault();
        
        setIsLoading(true);

        Axios.post(`${renderURL}/api/users/${currentUserState._id}/bookings/`, bookingDetailsObject)
            .then((response) => {
              setBookingConfirmationNumber(response.data._id);
            })
        Axios.put(`${renderURL}/api/hotels/${hotel._id}/rooms/${room._id}`, 
        {unavailableDates: room.unavailableDates.concat(dateRangeArray)});

        setTimeout(() => {
            setIsLoading(false);
            setIsConfirmed(true)
        }, 3000);
    }

    if (isLoading) {
        return (
            <div>
                <h1 style={{color: 'white'}}>Confirming your booking, hang tight...</h1>
                <Loader/>
            </div>
        )
    } else if (isConfirmed) {
        return (
            <div className='isConfirmed-container'>
                <h1>You are confirmed!</h1>
                <p>Your booking confirmation number is: {bookingConfirmationNumber}</p>
                <p>We are excited to see you!</p>
            </div>
        )
    } else {
        return (
            <div className='confirmation-container'>
                    <h1>Confirming booking for: {hotel.name}</h1>
                    <h1>Duration: {dateRangeArray[0]} - {dateRangeArray[dateRangeArray.length-1]}</h1>

                    <img className="hotel-pic-in-confirm-page" 
                        src={hotel.picUrl}>  
                    </img>

                    <div className='bottom-part-confirmation'>

                        <PaymentForm/>

                        <div>
                            <p>Total price for {dateRangeArray.length} days: ${dateRangeArray.length * room.price}</p>
                            
                            <button onClick={(e) => confirmBooking(e)} className='btn btn-danger btn-lg'>Confirm Booking</button>
                        </div>

                    </div>


            </div>
        )  
    }

}

export default ConfirmBookingPage;