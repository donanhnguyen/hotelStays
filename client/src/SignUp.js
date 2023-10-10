import {useState, useEffect, useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import './App.css';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import './modal.css'

function SignUp () {


    const contextInfo = useContext(GlobalContext);
    const {setCurrentUserState, currentUserState, renderURL} = contextInfo;
    const [successfulResgister, setSuccessfulRegister] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const [errorsState, setErrorsState] = useState("");

    const [formState, setFormState] = useState({
        username: "",
        email: "",
        password: ""
    });


    useEffect(() => {
        if (currentUserState) {
            navigate('/');
        }
    }, [])
    

    function submitRegister (e) {
        e.preventDefault();

        if (confirmPassword === "" || (formState.password !== confirmPassword)) {
            setErrorsState("Paswords don't match.")
        } else {
           if (formState.username === "" || formState.password === "") {
                setErrorsState("Fields can't be blank!");
            } else if (formState.username.length < 3 || formState.password.length < 3) {
                setErrorsState("Username & password must be at least 5 characters.");
            } else if (!formState.email.includes("@")) {
                setErrorsState("Invalid email format. Please include '@'.");
            } else {
                 Axios.post(`${renderURL}/api/auth/register/`, formState)
                    .then((response) => {
                    setCurrentUserState(response.data);
                    setSuccessfulRegister(true);
                        setTimeout(() => {
                            navigate('/');  
                        }, 1000)
                    })
                    .catch((error) => {
                        setErrorsState("Username already taken.")
                    })  
            } 
        }
         
    }

    function setFormField (e, field) {
        setFormState((prevState) => {
            return {...prevState, [`${field}`] : e.target.value}
        })
    }

  return (
    <div className="App">
      <header className="App-header">

        {/* modal */}
        <div id="myModal" className={`modal ${successfulResgister ? "yes-modal" : "" }`}>
            <div className={`modal-content`}>
                <span className="close">&times;</span>
                <p>Success!</p>
            </div>
        </div>

        <div className="login-box">
        <h2>Sign Up</h2>   
        {/* display error messages */}
        <div className='error-messages'>
            {errorsState}
        </div>
            <form onSubmit={submitRegister}>

                <div className="user-box">
                    <input onChange={(e) => setFormField(e, 'username')} type="text" placeholder='username' required=""/>
                </div>

                <div className="user-box">
                    <input onChange={(e) => setFormField(e, 'email')} type="text" placeholder='email' required=""/>
                </div>

                <div className="user-box">
                    <input onChange={(e) => setFormField(e, 'password')} type="password" placeholder='password' required=""/>
                </div>

                <div className="user-box">
                    <input onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder='confirm password' required=""/>
                </div>

                <button type='submit'>Register</button>

            </form>
        </div>

      </header>
    </div>
  );
}

export default SignUp;
