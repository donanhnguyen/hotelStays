import {useContext, useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import GlobalContext from './GlobalContext';
import StarRating from './StarRating';
import ReviewHotelModal from './ReviewHotelModal';
import Axios from 'axios';

function HotelShowPage () {

    const location = useLocation();
    const navigate = useNavigate();
    const contextInfo = useContext(GlobalContext);
    const {currentUserState, 
        isRoomAvailableOrNot, 
        dateRangeArray,
        renderURL
    } = contextInfo;

    const hotel = location.state.hotel;

    const [showReviewModal, setShowReviewModal] = useState(false);
    const [hotelInfoState, setHotelInfoState] = useState();

    useEffect(() => {
        Axios.get(`${renderURL}/api/hotels/${hotel._id}/`)
            .then((response) => {
                setHotelInfoState(response.data);
            })
            .catch((error) => {
                console.log(error.response.data);
            }) 
    }, [])

    function navigateToConfirmBookingPage (room) {
        navigate('/ConfirmBookingPage', {state: {room: room, hotel: hotel} }); 
    }

    function displayBookButtonAndIfItsAvailableOrNot (room) {
    
        if (currentUserState && dateRangeArray && isRoomAvailableOrNot(dateRangeArray, room.unavailableDates)) {
            return <button 
                        className='btn btn-danger btn-lg'
                        onClick={() => {navigateToConfirmBookingPage(room)}}
                    >Book
                    </button>
        } else if (!isRoomAvailableOrNot(dateRangeArray, room.unavailableDates)) {
            return <p style={{color: 'red'}}>Unavailable</p>
        } 
    }

    function displayRooms () {
        if (hotelInfoState) {
           const displayedRooms = hotelInfoState.rooms.map((room, i) => {
            return (
                <div className='single-room-displayed' key={room + i}>

                    <div>
                        <img src={'https://img.freepik.com/free-photo/luxury-classic-modern-bedroom-suite-hotel_105762-1787.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696809600&semt=ais'} alt={room.name} />
                    </div>

                    <div id="room-info" className="room-info-container">
                        <div className="price-container">
                            <h1 className='price'>${room.price}</h1>
                        </div>
                        <h1>{room.name}</h1>
                        <p style={{color: 'green'}}>Free Wifi & breakfast</p>
                        <p style={{color: 'green'}}>Fully refundable</p>
                        {/* Show if the room is available here or not, based on unavailableDates array */}
                        {displayBookButtonAndIfItsAvailableOrNot(room)}
                    </div>
                
                </div>
            )})
            return displayedRooms; 
        }
    }

    function backtoresults () {
        navigate('/search');
    }

    return (
        <div className='App'>
            <div className='hotel-show-container'>
                
            {showReviewModal ?
                <ReviewHotelModal 
                    setShowReviewModal={setShowReviewModal}
                    setHotelInfoState={setHotelInfoState}
                    hotelInfoState={hotelInfoState}
                />
            :
            ""}

            <button onClick={backtoresults} className='btn btn-danger btn-lg back-to-search-results-button'>
            <i class="fa fa-long-arrow-left" aria-hidden="true"></i>

            </button>

                {
                    dateRangeArray ?
                    <h1>Selected Duration: {dateRangeArray[0]} - {dateRangeArray[dateRangeArray.length-1]}</h1>
                    :
                    ""
                }

                <h1>{hotel.name}</h1>
                <p className='hotel-description-in-show-page'>{hotel.description}</p>
                <img className="hotel-pic-in-show-page" 
                src={hotel.picUrl}>  
                </img>

                {/* display rooms */}
                <h2>Rooms:</h2>
                {currentUserState ? <h1></h1> : <h1 style={{color: 'red'}}>Please Log In To Book.</h1>}
                <div className='displayed-rooms-container'>
                    
                    {displayRooms()}
                </div>

            </div>

            {/* reviews */}
            <div className='reviews-container'>
                <h1>{hotelInfoState && hotelInfoState.reviews.length > 0 ? hotelInfoState.reviews.length : ""} Reviews:</h1>

                <p>Stayed here before? Review your experience!</p>
                <button onClick={() => setShowReviewModal((prevState) => !prevState)} className='btn btn-primary btn-lg'>Review</button>

                {hotelInfoState && hotelInfoState.reviews.length < 1 ?
                    <p>This hotel has no reviews yet.</p>
                : 
                   hotelInfoState ? 
                    hotelInfoState.reviews.map((review) => {
                            const createdAt = new Date(review.createdAt);
                            const formattedDate = `${createdAt.getMonth() + 1}-${createdAt.getDate()}-${createdAt.getFullYear()}`;
                            
                            return (
                                <div className='single-review' key={review._id}>
                                    <p className="review-date">Date: {formattedDate}</p><h1 className="review-username">{review.username}</h1>
                                    <p className="review-text">{review.text}</p>
                                    <p className="review-rating">Rating: {review.rating}/5</p>
                                    <StarRating rating={review.rating}/>
                                </div>
                            );
                        })
                    :
                    ""
                }
            </div>
           
            
        </div>
    )

}


export default HotelShowPage;