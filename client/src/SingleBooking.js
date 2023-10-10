import {useEffect, useContext, useState} from 'react';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import './modal.css'

function SingleBooking (props) {

    const {currentUserState, renderURL} = useContext(GlobalContext);
    const {booking, myBookingsDispatch, inThePast} = props;
    const [singleRoomState, setSingleRoomState] = useState();
    const [toggledConfirm, setToggledConfirm] = useState(false);

    useEffect(() => {
        Axios.get(`${renderURL}/api/hotels/rooms/${booking.hotelId}/${booking.roomId}`)
            .then((response) => {
                setSingleRoomState(response.data)
            })
    }, [])

    function cancelReservation () {
            // dispatch to reducer to update UI so that the deleted booking no longer shows
            myBookingsDispatch({type: 'deleteBooking', payload: booking});
            // push the room unavailableDates into new array, minus the booking.dates
            var newUnavailableDatesArray = [];
            for (let i in singleRoomState.unavailableDates) {
                let currentDate = singleRoomState.unavailableDates[i];
                if (!booking.dates.includes(currentDate)) {
                    newUnavailableDatesArray.push(currentDate);
                }
            }
            // api call to remove from /bookings
            Axios.delete(`${renderURL}/api/users/${currentUserState._id}/bookings/${booking._id}`)
                .then((response) => console.log(response))
                .catch((err) => console.log(err))
            // api call to update the room's unavailable dates
            Axios.put(`${renderURL}/api/hotels/${booking.hotelId}/rooms/${singleRoomState._id}`, 
                {unavailableDates: newUnavailableDatesArray});      
    }

    return (
        <div className={`single-booking-container ${inThePast ? "past-booking-grayed-out" : ""}`}>

        <div id="myModal" className={`modal ${toggledConfirm ? "yes-modal" : "" }`}>
            <div className={`modal-content`}>
                <span onClick={() => setToggledConfirm(false)} className="close">&times;</span>
                <h1 style={{color: 'red', fontSize: '30px'}}>Are you sure you want to cancel?</h1>
                <button style={{width: '50%', margin: 'auto'}} className='btn btn-primary btn-lg' onClick={() => setToggledConfirm(false)}>No</button>
                <button style={{width: '50%', margin: 'auto'}} className='btn btn-danger btn-lg' onClick={cancelReservation}>Yes</button>
            </div>
        </div>

            <div className='booking-first-part'>
                <img className="hotel-pic-my-bookings-page" src={booking.picUrl}></img>
            </div>

            <div className='booking-second-part'>
                <h1>Hotel: {booking.nameOfHotel}</h1>
                <h1>Room: {booking.nameOfRoom}</h1>
                
                <h1>Date booked: {booking.createdAt.split("").slice(0, 10).join("")}</h1>
                <h1>Duration: {booking.dates[0]} - {booking.dates[booking.dates.length-1]}</h1>
                <p>Confirmation Number: {booking._id}</p>

                

            </div>
            <h1 className='total-price'>Total Price: <h1 className='amount-number'>${booking.totalPrice}.00</h1></h1>

            {!inThePast ? <button onClick={() => setToggledConfirm(true)}
                    className='cancel-reservation-button btn btn-danger btn-lg'>Cancel Reservation</button> : ""}
                    
        </div>
    )
}

export default SingleBooking;