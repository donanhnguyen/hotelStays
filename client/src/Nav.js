import {useState, useEffect, useContext} from 'react';
import './App.css';
import Axios from 'axios';
import {Link} from "react-router-dom"
import { useNavigate, useLocation } from 'react-router-dom';
import GlobalContext from './GlobalContext';
import Modal from './Modal';
import './modal.css';
import {displayBookingsPageOrNotSmall, displayLogInOrLogOutButtonSmall, displaySignUpButtonOrNotSmall} from './NavBarSmallFunctions';

function Nav () {

  const contextInfo = useContext(GlobalContext);
  const {currentUserState, setCurrentUserState, setChosenCityState, setDateRange, setDateRangeArray} = contextInfo;
  const navigate = useNavigate();
  const location = useLocation();

  function logOut() {
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
        <li>        
          <div class="modal-container">
          <input id="modal-toggle" type="checkbox"/>
          <button for='modal-toggle'>Log Out</button>
          <div class="modal-backdrop">
              <div class="modal-content">
              <label class="modal-close" for="modal-toggle">X</label>
              <h1>Are you sure you want to log out?</h1>
              <label onClick={logOut}class="modal-close button" for="modal-toggle">Yes</label>
              </div>
          </div>
          </div>
        </li>
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
          <nav className='nav-bar'>   
          <h1 className='galaxyStays'>
              HotelStays.com <i id="bed-icon" class="fa fa-hotel"></i>
          </h1>
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
            <h1>{displayBookingsPageOrNotSmall(contextInfo.currentUserState, location)}</h1>
            <h1>{displayLogInOrLogOutButtonSmall(contextInfo.currentUserState, logOut, location)}</h1>
            <h1>{displaySignUpButtonOrNotSmall(contextInfo.currentUserState, location)}</h1>

          </nav>

    </div>


  );
}

export default Nav;
