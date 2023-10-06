import { useLocation, useNavigate} from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import Axios from 'axios';
import SearchBar from "./SearchBar";
import Loader from './Loader';
import HotelListing from "./HotelListing";
import GlobalContext from './GlobalContext';


function Search () {

    const location = useLocation();
    const navigate = useNavigate();
    const [allHotelsState, setAllHotelsState] = useState(null);
    const [searchResultsReady, setSearchResultsReady] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [sortFilterState, setSortFilterState] = useState(null);
    const {chosenPlanetState, 
        setChosenPlanetState,
        dateRangeArray,
        dateRange,
        renderURL,
        hotelsState
    } = useContext(GlobalContext);

    const searchResultsContainerRef = useRef(null);

    var allPlanets = [];

    if (hotelsState) {
        for (let i in hotelsState) {
            if (!allPlanets.includes(hotelsState[i].planet)) {
                allPlanets.push(hotelsState[i].planet);
            }
        }
    } else {
        for (let i in allHotelsState) {
            if (!allPlanets.includes(allHotelsState[i].planet)) {
                allPlanets.push(allHotelsState[i].planet);
            }
        }
    }

    useEffect(() => {
 
        Axios.get(`${renderURL}/api/hotels/`)
            .then((response) => {
                setAllHotelsState(response.data)
            })    
    
    }, [])

    useEffect(() => {
        setIsLoading(true);
        setSearchResultsReady(false);
        setTimeout(() => {
          setIsLoading(false);
          setSearchResultsReady(true);
        }, 1000)
    }, [chosenPlanetState, dateRange])

    function navigateToHotelShowPage (hotel) {
        if (dateRangeArray) {
            navigate(`/hotel/${hotel._id}`, {state: {hotel: hotel} } );  
        } else {
            setShowErrorModal(true);
        }
    }

    function filterHotels(hotels, planetFilter, sortFilter) {
        let filteredHotels = hotels;
      
        if (planetFilter && planetFilter !== "No Filter") {
          filteredHotels = filteredHotels.filter((hotel) => hotel.planet === planetFilter);
        }
      
        if (sortFilter === "Price: Low to High") {
          filteredHotels.sort((a, b) => {
            const cheapestRoomForA = a.rooms.reduce((minRoom, currentRoom) => {
                return currentRoom.price < minRoom.price ? currentRoom : minRoom;
            }, a.rooms[0]);
            const cheapestRoomForB = b.rooms.reduce((minRoom, currentRoom) => {
                return currentRoom.price < minRoom.price ? currentRoom : minRoom;
            }, b.rooms[0]);
            return cheapestRoomForA.price - cheapestRoomForB.price;
         
          });
        } else if (sortFilter === "Price: High to Low") {
          
            filteredHotels.sort((a, b) => {
                const cheapestRoomForA = a.rooms.reduce((minRoom, currentRoom) => {
                    return currentRoom.price < minRoom.price ? currentRoom : minRoom;
                }, a.rooms[0]);
                const cheapestRoomForB = b.rooms.reduce((minRoom, currentRoom) => {
                    return currentRoom.price < minRoom.price ? currentRoom : minRoom;
                }, b.rooms[0]);
                return cheapestRoomForB.price - cheapestRoomForA.price;
            })

        }
      
        return filteredHotels;
      }
      
      function displayFilteredHotels(filteredHotels, navigateToHotelShowPage) {
        return filteredHotels.map((hotel, index) => (
          <HotelListing
            key={hotel.name + index}
            hotel={hotel}
            navigateToHotelShowPage={navigateToHotelShowPage}
          />
        ));
      }
      
      function displayAllHotels() {
        if (!allHotelsState) {
          return null; // Handle the case when allHotelsState is not available
        }
      
        const filteredHotels = filterHotels(allHotelsState, chosenPlanetState, sortFilterState);
        const displayedHotels = displayFilteredHotels(filteredHotels, navigateToHotelShowPage);
      
        return displayedHotels;
      }
      
      return (
        <div className="App">
       
       <div id="myModal" className={`modal ${showErrorModal ? "yes-modal" : "" }`}>
            <div className={`modal-content`}>
                <p style={{fontSize: '28px', color: 'red'}}>Please select your date range first</p>
                <button className="btn btn-danger btn-lg" style={{margin: 'auto'}} onClick={() => setShowErrorModal(false)}>Okay</button>
            </div>
        </div>

            {/* search bar here */}
            <SearchBar 
                allPlanets={allPlanets}
                setSearchResultsReady={setSearchResultsReady}
                searchResultsReady={searchResultsReady}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                chosenPlanetState={chosenPlanetState}
                setChosenPlanetState={setChosenPlanetState}
                setSortFilterState={setSortFilterState}
            />
    

            {/* display all hotels */}
            <div  className="search-hotels-container">

                {isLoading ?
                    <Loader/> 
                    :
                    <div></div>
                }

                { searchResultsReady ?
                    <h1 style={{color: 'white'}}>{searchResultsContainerRef.current.children.length} results:</h1>
                    :
                    <div></div>
                }

                <div ref={searchResultsContainerRef} 
                    className={`results-container`}
                >
                    {displayAllHotels()}
                </div>

            </div>


      </div>
    )
}

export default Search;