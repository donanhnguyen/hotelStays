import {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import './cardflip.css';
import Footer from './Footer';
import HeroSection from './HeroSection';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function Home () {

    const {setChosenCityState, 
        hotelsState, 
        setHotelsState,
        renderURL
    } = useContext(GlobalContext);
    
    const navigate = useNavigate();

    var allcitys = [];
    if (hotelsState) {
        for (let i in hotelsState) {
            if (!allcitys.includes(hotelsState[i].city)) {
                allcitys.push(hotelsState[i].city);
            }
        }
    }

    useEffect(() => {
        Axios.get(`${renderURL}/api/hotels/`)
            .then((response) => {
                setHotelsState(response.data)
            })
    }, [])

    function navigateTocitySearchResults (e) {
        setChosenCityState(e.target.alt);
        navigate('/search');
    }

    function displaycitys () {
        const displayedcitys = allcitys.map((city) => {
            var countHowManyHotelsIncity = 0;
            for (let i in hotelsState) {
                let currentHotel = hotelsState[i];
                if (city === currentHotel.city) {
                    countHowManyHotelsIncity += 1;
                }
            }
            return (
                <div onClick={(e) => navigateTocitySearchResults(e)} key={city} className="single-city-container">
                    <h1>{city}</h1>
                    <img src={require(`../pics/${city.split(' ').join('')}.jpg`)} 
                        alt={city} 
                        className="single-city-image"
                    />
                    <p>{countHowManyHotelsIncity} {countHowManyHotelsIncity > 1 ? 'hotels' : 'hotel'}</p>
                </div>
            )
        })
        return displayedcitys;
    }

    function displayFeaturedHotels () {
        if (hotelsState) {
            var firstArray = hotelsState;
            var firstFeaturedHotel = firstArray[getRandomInt(firstArray.length)]
            var secondArray = [];
            for (let i in hotelsState) {
                let currentHotel = hotelsState[i];
                if (currentHotel.name !== firstFeaturedHotel.name) {
                    secondArray.push(currentHotel);
                }
            }
            var secondFeaturedHotel = secondArray[getRandomInt(secondArray.length)];
            var featuredHotels = [firstFeaturedHotel, secondFeaturedHotel];
            const displayThem = featuredHotels.map((hotel) => {
                return (
                    <div key={hotel.name} 
                        className='flip-card single-featured-hotel'
                        onClick={() => navigate(`/hotel/${hotel._id}`, {state: {hotel: hotel}}) }
                    >
                            <p>{hotel.name}</p>
                            <img className="hotel-pic-in-featured-page" src={hotel.picUrl}></img>
           
                    </div>
                )
            })
            return displayThem;
        }
    }

    function displayTop2Hotels () {
        if (hotelsState) {
           // Calculate average ratings for each hotel
            const hotelsWithAvgRating = hotelsState.map((hotel) => {
                const totalRating = hotel.reviews.reduce((sum, review) => sum + review.rating, 0);
                if (hotel.reviews.length) {
                    return {
                        ...hotel,
                        avgRating: totalRating / hotel.reviews.length,
                    };
                } else {
                    return {
                        ...hotel,
                        avgRating: 0
                    };
                }
            });
            
            // Sort the hotels by average rating in descending order
            const sortedHotels = hotelsWithAvgRating.sort((a, b) => b.avgRating - a.avgRating);
            
            // Get the top 2 best-rated hotels
            const top2Hotels = sortedHotels.slice(0, 2);
            const displayThem = top2Hotels.map((hotel) => {
                return (
                    <div key={hotel.name} 
                        className='top2hotel'
                        onClick={() => navigate(`/hotel/${hotel._id}`, {state: {hotel: hotel}}) }
                    >
                            <p>{hotel.name}</p>
                            <img className="hotel-pic-in-top2-page " src={hotel.picUrl}></img>
                            <p>&#9733; {hotel.avgRating.toFixed(1)}/5</p>
                    </div>
                )
            })
            return displayThem;
            
        }
    }

    return (
        <div>
            
            <HeroSection />

            <div className="home-container">
                
                <br></br>

                <div className='featured-hotels-container'>
                    <h1 className='featured-hotels-heading'>Featured Hotels:</h1>
                    <div className='featured-hotels'>
                        {displayFeaturedHotels()}
                    </div>
                </div>

                <div className='featured-hotels-container'>
                    <h1 className='featured-hotels-heading'>Top Rated Hotels:</h1>
                    <div className='featured-hotels'>
                        {displayTop2Hotels()}
                    </div>
                </div>

                <br></br>

                {/* display all hotel citys here */}
                <h1>Browse by cities:</h1>
                <div className='displayed-citys-container'>
                    {displaycitys()}
                </div>
           
                
            </div>
            <Footer/>
        </div>
        
    )
}

export default Home;