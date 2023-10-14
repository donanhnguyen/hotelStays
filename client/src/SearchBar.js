import { useState, useContext } from "react";
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import GlobalContext from './GlobalContext';

function SearchBar (props) {

  const contextInfo = useContext(GlobalContext);
  const {dateRange, setDateRange, dateRangeArray, setDateRangeArray} = contextInfo;
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {allcitys, 
    setSearchResultsReady,
    setIsLoading,
    chosenCityState,
    setChosenCityState,
    setSortFilterState
  } = props;

  function getDatesInRange (startDate, endDate) {
    const date = new Date(startDate.getTime());

    const dates = [];

    while (date <= endDate) {
      dates.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    for (let i in dates) {
      dates[i] = dates[i].toDateString();
    }
    return dates;
  }

  function applySearchFilters () {
    if (dateRange.some((date) => {
      return date === null;
    })) {
      setShowErrorModal(true);
    } else {


      setIsLoading(true);
      setSearchResultsReady(false);
      setTimeout(() => {
        setIsLoading(false);
        setSearchResultsReady(true);
      }, 1000)


    }
  }

  function setcityFilter (e) {
    setChosenCityState(e.target.value)
  }

  function setSortFilter (e) {
    setSortFilterState(e.target.value);
  }

  function handleSetDateRange (value) {
    setDateRange([value[0], value[1]]); 
    setDateRangeArray(getDatesInRange(value[0], value[1]));
  }

  return (
    <div>
      
      <div id="myModal" className={`modal ${showErrorModal ? "yes-modal" : "" }`}>
            <div className={`modal-content`}>
                <p style={{fontSize: '28px', color: 'red'}}>Date's can't be blank!</p>
                <button className="btn btn-danger btn-lg" style={{margin: 'auto'}} onClick={() => setShowErrorModal(false)}>Okay</button>
            </div>
        </div>

      <div className="search-bar-container">
          <div>
            <DateRangePicker 
              clearIcon={null} 
              format='MM/dd/y'
              className={'date-picker'} 
              onChange={ (value) => {handleSetDateRange(value)} } 
              value={dateRange} 
              minDate={new Date()}
            />
          </div>

          <select id='city' onChange={(e) => {setcityFilter(e)}} value={chosenCityState}>
            <option disabled selected value>Filter By city</option>
            <option>No Filter</option>
            {allcitys.map((city, i) => <option key={city+i}value={city}>{city}</option>)}
          </select>

          <select id='sort-filter' onChange={(e) => {setSortFilter(e)}}>
            <option disabled selected value>Sort By:</option>
            <option>None</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>

          <button onClick={applySearchFilters}
            className='btn btn-primary btn-lg'
            >Search
          </button>
      </div>

    </div>
    

  );


}

export default SearchBar;