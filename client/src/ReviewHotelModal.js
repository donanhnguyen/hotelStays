import {useContext, useState} from 'react';
import GlobalContext from './GlobalContext';
import Axios from 'axios';
import './reviewmodal.css';

function ReviewHotelModal ({setShowReviewModal, setHotelInfoState, hotelInfoState}) {

    const {currentUserState, renderURL} = useContext(GlobalContext);
    const [reviewState, setReviewState] = useState({});
    const [selectedStar, setSelectedStar] = useState(null);
    const [errorsState, setErrorsState] = useState();

    function setField (field, e) {
        setReviewState((prevState) => {
            return {...prevState, [field]: e.target.value};
        })
    }   

    const handleStarClick = (index) => {
        setSelectedStar(index);
    };

    function submitReview () {

        if (reviewState.text && selectedStar && currentUserState) {
            const body = {
                username: currentUserState.username,
                email: currentUserState.email,
                text: reviewState.text,
                rating: selectedStar,
                userId: currentUserState._id,
                hotelId: hotelInfoState._id,
            }
            Axios.post(`${renderURL}/api/reviews/${hotelInfoState._id}/`, body)
                .then((response) => {  
                    setShowReviewModal(false);
                    setHotelInfoState(response.data);
                })
                .catch((error) => {
                    setErrorsState(error.response.data.message)
                    console.log(error.response)
                })
        }
        
    }

    return (
        <div className="review-modal" id="reviewModal" onClick={() => setShowReviewModal((prevState) => !prevState)}>
            <div className="review-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="review-close" id="closereviewModal" onClick={() => setShowReviewModal((prevState) => !prevState)}>&times;</span>
                
                <p className='error-messages'>{errorsState}</p>

                <div className="submit-rating">
                    {[5,4,3,2,1].map((index) => (
                        <span
                        key={index}
                        onClick={() => handleStarClick(index)}
                        style={{
                            color: selectedStar !== null && index <= selectedStar ? 'orange' : 'gray',
                            cursor: 'pointer',
                        }}
                        >
                        &#9733;
                        </span>
                    ))}
                </div>
                
                <label for='reviewtext'></label>
                <textarea rows="2" onChange={(e) => setField('text', e)}></textarea>                
                <button onClick={submitReview} className="btn btn-danger submit-review-button">Submit</button>
            </div>
        </div>
    )

}

export default ReviewHotelModal

