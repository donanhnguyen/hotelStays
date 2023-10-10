
import {useState, useEffect, useContext} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Axios from 'axios';
import GlobalContext from './GlobalContext';
import Loader from './Loader';
import './FancyButtons.css';
import './PaymentForm.css';

function PaymentForm () {

    return (
        <div class="payment-form">
            <form>
                <div class="form-group">
                    <label for="card-number">Credit Card Number</label>
                    <input type="number" id="card-number" name="card-number" placeholder="Enter 16-digit card number" maxlength="16" required/>
                </div>
                <div class="form-group">
                    <label for="card-name">Name on Card</label>
                    <input type="text" id="card-name" name="card-name" placeholder="Enter name on card" required/>
                </div>
                <div class="form-group card-expiry">
                    <label for="card-expiry">Expiration Date (MM/YY)</label>
                    <input type="text" id="card-expiry-month" name="card-expiry-month" placeholder="MM" maxlength="2" required/>
                    <input type="text" id="card-expiry-year" name="card-expiry-year" placeholder="YY" maxlength="2" required/>
                </div>
                <div class="form-group">
                    <label for="card-cvv">CVV</label>
                    <input type="text" id="card-cvv" name="card-cvv" class="card-cvv" placeholder="CVV" maxlength="3" required/>
                </div>
                <div class="form-group">
                    <label for="billing-zip">Billing ZIP Code</label>
                    <input type="text" id="billing-zip" name="billing-zip" placeholder="Enter billing ZIP code" required/>
                </div>
                <button type="submit" class="btn">Submit Payment</button>
            </form>
        </div>
    )

}

export default PaymentForm;
