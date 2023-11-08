import {useContext, useState} from 'react';
import './App.css';
import {Link} from "react-router-dom"
import { useNavigate, useLocation } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import './modal.css';
import {displayBookingsPageOrNotSmall, displayLogInOrLogOutButtonSmall, displaySignUpButtonOrNotSmall} from './NavBarSmallFunctions';
import './logoutmodal.css';

function Nav () {

  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const contextInfo = useContext(GlobalContext);
  const {currentUserState, setCurrentUserState, setChosenCityState, setDateRange, setDateRangeArray} = contextInfo;
  const navigate = useNavigate();
  const location = useLocation();

  function logOut() {
      setShowLogoutModal(false);
      // set current user to null
      setCurrentUserState(null);
      // set the search filters back to null
      setChosenCityState(null);
      setDateRange([null, null]);
      setDateRangeArray(null);
      // navigate back to home
      navigate('/');
    // }
  }

  function displayLogInOrLogOutButton () {
    if (contextInfo.currentUserState) {
      return (
        <li><button onClick={() => setShowLogoutModal((prevState) => !prevState)} className='btn btn-danger btn-lg logoutbutton'>Log Out</button></li>
      )
    } else {
      return (
        <li><Link className={`${location.pathname === '/login' ? 'highlighted' : ""}`} to='/login'>Log In</Link></li>
      )
    }
  }

  function displaySignUpButtonOrNot () {
    if (!contextInfo.currentUserState) {
      return (
        <li><Link className={`${location.pathname === '/signup' ? 'highlighted' : ""}`} to='/signup'>Sign Up</Link></li>
      )
    } 
  }

  function displayBookingsPageOrNot () {
    if (contextInfo.currentUserState) {
      return (
        <li><Link className={`${location.pathname === '/myBookings' ? 'highlighted' : ""}`} to='/myBookings'>My Bookings</Link></li>
      )
    } 
  }
  
  return (
    <div>
        {/* modal */}
        {showLogoutModal ? 
        <div className="logout-modal" id="logoutModal" onClick={() => setShowLogoutModal((prevState) => !prevState)}>
            <div className="logout-modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="logout-close" id="closeLogoutModal" onClick={() => setShowLogoutModal((prevState) => !prevState)}>&times;</span>
                <br></br>
                <h2 style={{color: 'red'}}>Are you sure you want to log out?</h2>
                <br></br>
                <button className="logout-button" onClick={logOut}>Yes</button>
            </div>
        </div>
        : 
        ""
        }
      
      {/* modal end */}

          {/* large */}
          <nav className='nav-bar'>   
          <h1 className='galaxyStays'>HotelStays.com <i id="bed-icon" class="fa fa-hotel"></i></h1>
            {
              currentUserState ?
              <p className='loggedin'><i class="fa fa-user-circle" aria-hidden="true"> {currentUserState.username}</i></p>
              :
              <p className='loggedin'>Not Logged In</p>
            }
            <ul>
                <li>
                  <Link className={`${location.pathname === '/' ? 'highlighted' : ""}`} to='/'>Home</Link>
                </li>
                <li>
                  <Link className={`${location.pathname === '/search' ? 'highlighted' : ""}`} to='/search'>Search Hotels</Link>
                </li>
                {displayBookingsPageOrNot()}
                {displayLogInOrLogOutButton()}
                {displaySignUpButtonOrNot()}    
            </ul>
          </nav>

          {/* small */}
          <nav className='nav-bar-small'>   
            <h1 className='galaxyStays'>HS</h1>
            <h1><Link className={`${location.pathname === '/' ? 'highlighted' : ""}`} to='/'><i class="fa fa-home" aria-hidden="true"></i></Link></h1>
            <h1><Link className={`${location.pathname === '/search' ? 'highlighted' : ""}`} to='/search'><i class="fa fa-search" aria-hidden="true"></i></Link></h1>
            
            {currentUserState &&  <h1>{displayBookingsPageOrNotSmall(currentUserState, location)}</h1>}
           
            <h1>{displayLogInOrLogOutButtonSmall(currentUserState, setShowLogoutModal, location)}</h1>
            {!currentUserState ?
            <h1>{displaySignUpButtonOrNotSmall(currentUserState, location)}</h1>
            :
            ""}
          </nav>

    </div>


  );
}

export default Nav;
