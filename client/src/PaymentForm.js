
import {useState, useEffect} from 'react';
import './PaymentForm.css';

function PaymentForm ({setPaymentInfoReady}) {

    const [paymentInfo, setPaymentInfo] = useState({
        cardNumber: '',
        cardName: '',
        cardExpiryMonth: '',
        cardExpiryYear: '',
        cardCVV: '',
        billingZip: '',
      });
    
      useEffect(() => {
        // Check if all fields in paymentInfo are non-empty
        const isAllFieldsFilled = Object.values(paymentInfo).every((value) => value.trim() !== '');
    
        // Set setPaymentInfoReady based on whether all fields are filled
        setPaymentInfoReady(isAllFieldsFilled);

    }, [paymentInfo, setPaymentInfoReady]);
    
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPaymentInfo({
          ...paymentInfo,
          [name]: value,
        });
      };

    return (
        <div className="payment-form">
      <form>
        <div className="form-group">
          <label htmlFor="card-number">Credit Card Number</label>
          <input
            type="number"
            id="card-number"
            name="cardNumber"
            inputMode="numeric"
            pattern="[0-9\s]{13,19}"
            autoComplete="cc-number"
            placeholder="Enter 16-digit card number"
            maxLength="16"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-name">Name on Card</label>
          <input
            type="text"
            id="card-name"
            name="cardName"
            placeholder="Enter name on card"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group card-expiry">
          <label htmlFor="card-expiry">Expiration Date (MM/YY)</label>
          <input
            type="text"
            id="card-expiry-month"
            name="cardExpiryMonth"
            placeholder="MM"
            maxLength="2"
            required
            onChange={handleInputChange}
          />
          <input
            type="text"
            id="card-expiry-year"
            name="cardExpiryYear"
            placeholder="YY"
            maxLength="2"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="card-cvv">CVV</label>
          <input
            type="text"
            id="card-cvv"
            name="cardCVV"
            className="card-cvv"
            placeholder="CVV"
            maxLength="3"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="billing-zip">Billing ZIP Code</label>
          <input
            type="text"
            id="billing-zip"
            name="billingZip"
            placeholder="Enter billing ZIP code"
            required
            onChange={handleInputChange}
          />
        </div>
      </form>
      <img src="https://onpointhomeinspectionsmaine.com/wp-content/uploads/2014/12/Paypal-ccrd-Payment-banner.jpg"></img>
    </div>
    )

}

export default PaymentForm;
