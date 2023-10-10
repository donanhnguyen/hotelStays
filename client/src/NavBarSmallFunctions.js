import './modal.css';
import {Link} from "react-router-dom"

export function displaySignUpButtonOrNotSmall (currentUserState, location) {
    if (!currentUserState) {
      return (
        <Link className={`${location.pathname === '/signup' ? 'highlighted' : ""}`} to='/signup'><i class="fa fa-user-plus" aria-hidden="true"></i>  </Link>
      )
    } 
  }

export function displayBookingsPageOrNotSmall (currentUserState, location) {
    if (currentUserState) {
      return (
        <Link className={`${location.pathname === '/myBookings' ? 'highlighted' : ""}`} to='/myBookings'><i class="fa fa-bed" aria-hidden="true"></i></Link>
      )
    } 
  }
  
export function displayLogInOrLogOutButtonSmall (currentUserState, logOut, location) {
    if (currentUserState) {
      return ( 
          <div class="modal-container">
          <input id="modal-toggle" type="checkbox"/>
          <button1 className='logout-button' for='modal-toggle'><i class="fa fa-sign-out" aria-hidden="true"></i></button1>
          <div class="modal-backdrop">
              <div class="modal-content">
              <label class="modal-close" for="modal-toggle">X</label>
              <h1>Are you sure you want to log out?</h1>
              <label onClick={logOut}class="modal-close button" for="modal-toggle">Yes</label>
              </div>
          </div>
          </div>
      )
    } else {
      return (
        <Link className={`${location.pathname === '/login' ? 'highlighted' : ""}`} to='/login'><i class="fa fa-sign-in" aria-hidden="true"></i> </Link>
      )
    }
  }
