import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import NoMatch from '../NoMatch/NoMatch';
import PaymentForm from '../PaymentForm/PaymentForm';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
const stripePromise = loadStripe('pk_test_51IFKV2KMTiWAkqg1xBNMjD6WLgVe0jswLzFV3RbKdksftoftd3Mg2WeOsTnYtS9ANET8cNc6dSvKW1g2lHYXDvHd00vl5Y4nyE');


const PaymentProcess = () => {
    const classInfo = JSON.parse(sessionStorage.getItem('class'));
    return (
        <div>
            {classInfo ?

                <div>
                    <div className='header'>
                        <Navbar></Navbar>
                        <div className='head-title'>
                            <p>YOUR GYM MEMBERSHIP</p>
                        </div>
                    </div>
                    <div className='d-flex mt-5 justify-content-center'>
                        <div className='text-center'>
                            <h3><span style={{ borderRadius: "50%", backgroundColor: "#FCD842" }}>1</span></h3>
                            <p>Personal Detail</p>
                        </div>
                        <div>
                            <span>..................................</span>
                        </div>
                        <div className='text-center'>
                            <h3><span style={{ borderRadius: "50%", backgroundColor: "#FCD842" }}>2</span></h3>
                            <p>Bank Payment</p>
                        </div>
                        <div>
                            <span>..................................</span>
                        </div>
                        <div className='text-center text-secondary'>
                            <h3><span>3</span></h3>
                            <p>Membership Created</p>
                        </div>

                    </div>
                    <div className="container mt-5">
                        <Elements stripe={stripePromise}>
                            <PaymentForm></PaymentForm>
                        </Elements>
                    </div>
                    <br />
                    <br />
                    <Footer></Footer>
                </div>
                : <div>
                    <NoMatch></NoMatch>
                </div>

            }

        </div>
    );
};

export default PaymentProcess;