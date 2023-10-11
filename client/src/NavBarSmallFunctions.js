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
  
export function displayLogInOrLogOutButtonSmall (currentUserState, setShowLogoutModal, location) {
    if (currentUserState) {
      return ( 
        <button1 onClick={() => setShowLogoutModal((prevState) => !prevState)} className='btn btn-danger btn-lg logoutbutton'><i class="fa fa-sign-out" aria-hidden="true"></i></button1>
      )
    } else {
      return (
        <Link className={`${location.pathname === '/login' ? 'highlighted' : ""}`} to='/login'><i class="fa fa-sign-in" aria-hidden="true"></i> </Link>
      )
    }
  }
