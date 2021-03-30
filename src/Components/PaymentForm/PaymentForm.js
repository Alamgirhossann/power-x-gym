import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
import master from '../../Images/master.png';
import visa from '../../Images/visa.png';
import paypal from '../../Images/paypal.png';
import amex from '../../Images/amex.png';

const PaymentForm = () => {
        const stripe = useStripe();
        const elements = useElements();
        // data get from session storage
        const classInfo = JSON.parse(sessionStorage.getItem('class'));
        const priceInfo = JSON.parse(sessionStorage.getItem('priceData'));
        const formData = JSON.parse(sessionStorage.getItem('formdata'));

        console.log('class',classInfo, 'price', priceInfo, 'form', formData);

        const [paymentError, setPaymentError] = useState(null);
        const [paymentSuccess, setPaymentSuccess] = useState(null);

        const handlePaymentSuccess = paymentId => {
            const orderDetails = {
                ...formData,
                priceInfo: priceInfo,
                classInfo: classInfo,
                paymentId,
                orderTime: new Date()
            };
            fetch('http://localhost:4000/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderDetails)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
    
                        alert('your order placed successfully');
                    }
                })
        }
    
    
        const handleSubmit = async (event) => {
            // Block native form submission.
            event.preventDefault();
    
            if (!stripe || !elements) {
                // Stripe.js has not loaded yet. Make sure to disable
                // form submission until Stripe.js has loaded.
                return;
            }
    
            // Get a reference to a mounted CardElement. Elements knows how
            // to find your CardElement because there can only ever be one of
            // each type of element.
            const cardElement = elements.getElement(CardElement);
    
            // Use your card Element with other Stripe.js APIs
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });
    
            if (error) {
                setPaymentError(error.message);
                setPaymentSuccess(null);
            } else {
                setPaymentSuccess(paymentMethod.id);
                setPaymentError(null);
                handlePaymentSuccess(paymentMethod.id)
            }
        };

    return (
        
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <div className='border p-3 mt-4'>
                        <div className="row">
                            <div className="col-md-8">
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Cradit Card"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                </Col>
                            </div>
                            <div className="col-md-4 d-flex">
                                <img className=" d-none d-md-block" style={{ width: "60px" }} src={master} alt="" />
                                <img className=" d-none d-md-block" style={{ width: "60px" }} src={visa} alt="" />
                                <img className=" d-none d-md-block" style={{ width: "60px" }} src={amex} alt="" />
                            </div>
                        </div>
                        <p className='text-secondary mx-5'>Safe money transfer useing your bank account. Visa, Maestro, Discover, American Express.</p>
                        <CardElement />
                        {
                            paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
                        }
                    </div>
                    <div className='border p-3 mt-4'>
                        <div className="row">
                            <div className="col-md-9">
                                <Col sm={10}>
                                    <Form.Check
                                        type="radio"
                                        label="Paypal"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                </Col>
                            </div>
                            <div className="col-md-3 d-flex">
                                <img className=" d-none d-md-block" style={{ width: "80px" }} src={paypal} alt="" />
                            </div>
                        </div>
                        <p className='text-secondary mx-5'>You will be redirected to paypal website to complete your purchase carefully</p>
                    </div>
                    <button disabled={!stripe} style={{ background: "#FCD842", height: "40px", float: "right", width: "150px", border: "none", outline: "none", fontWeight: "bold", }} className="btn mt-4" type='submit'>
                        Continue to pay
                    </button>
                </form>

                {
                    paymentSuccess && <p style={{ color: 'green' }}>Your payment was successful.</p>
                }
            </div>
       
    );
};

export default PaymentForm;