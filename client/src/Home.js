import {useEffect, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import './cardflip.css';
import Footer from './Footer';

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
                    <p>{countHowManyHotelsIncity} hotels</p>
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

    return (
        <div>
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