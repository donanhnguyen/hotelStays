import {useState, useEffect, useContext} from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import './LoginForm.css';
import './modal.css'
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

function LogIn () {

    const contextInfo = useContext(GlobalContext);
    const {renderURL} = contextInfo;

    const navigate = useNavigate();

    const [errorsState, setErrorsState] = useState("");
    const [successfulLogIn, setSuccessfulLogIn] = useState(false);

    const [formState, setFormState] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        if (contextInfo.currentUserState) {
            navigate('/');
        }
    }, [])
    
    function logIn (e) {
        e.preventDefault();
        if (formState.username === "" || formState.password === "") {
            setErrorsState("Invalid Login.")
        } else {
            Axios.post(`${renderURL}/api/users/${formState.username}/`, {password: formState.password})
            .then((response) => {
                contextInfo.setCurrentUserState(response.data);
                setSuccessfulLogIn(true);
                setTimeout(() => {
                    navigate('/');  
                }, 1000)
            })
            .catch((error) => {
                setErrorsState(error.response.data)
            }) 
        }
        
    }

    function logInWithGoogle (email) {
        Axios.get(`${renderURL}/api/users/logInWithGoogle/${email}/`)
            .then((response) => {  
                contextInfo.setCurrentUserState(response.data);
                setSuccessfulLogIn(true);
                setTimeout(() => {
                    navigate('/');  
                }, 1000)
            })
            .catch((error) => {
                setErrorsState(error.response.data)
            })
    }

    function setUsername(e) {
        setFormState((prevState) => {
            return {...prevState, username: e.target.value}
        })
    }
    function setPassword(e) {
        setFormState((prevState) => {
            return {...prevState, password: e.target.value}
        })
    }

  return (
    <div className="App">
      <header className="App-header">

      {/* modal */}
        <div id="myModal" className={`modal ${successfulLogIn ? "yes-modal" : "" }`}>
            <div className={`modal-content`}>
                <span className="close">&times;</span>
                <p>Success!</p>
            </div>
        </div>

        <div className="login-box">
            <h2>Log In</h2>   
            {/* display error messages */}
            <div className='error-messages'>
                {errorsState}
            </div>

            <form onSubmit={logIn}>
                <div className="user-box">
                <input onChange={(e) => setUsername(e)} type="text" placeholder='username' required=""/>
                </div>
                <div className="user-box">
                <input onChange={(e) => setPassword(e)} type="password" placeholder='password' required=""/>
                </div>
                <button type="submit">Log In</button>

            </form>

            <div className='google-login'>
                <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_LOGIN_CLIENT_ID}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            var decoded = jwt_decode(credentialResponse.credential);
                            logInWithGoogle(decoded.email);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </GoogleOAuthProvider>
            </div>

        </div>
            
      </header>
      
    </div>
  );
}

export default LogIn;
