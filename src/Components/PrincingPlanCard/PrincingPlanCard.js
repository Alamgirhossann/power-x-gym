import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './PrincingPlanCard.css';

const PrincingPlanCard = ({ plan }) => {

    const classInfo = JSON.parse(sessionStorage.getItem('class'))
    const getPriceInfo = (e) => {
        
        fetch(`https://still-savannah-43768.herokuapp.com/price/${plan.id}`, {
            method: "GET",
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('priceData', JSON.stringify(data))
            })
        
    }
    return (
        <div className='col-md-4 mb-5'>
            <div class={`card text-center bg-${plan.background}`}>
                <div class=" text-white">
                    <p style={{ color: "#FCD842" }}>{plan.bill}</p>
                    <h3 class={`title-${plan.color}`}>{plan.title}</h3>
                    <h2 style={{ color: "#FCD842" }}>${plan.price}</h2>
                    <p><span><FontAwesomeIcon icon={faCheck} /></span> Mobile-Optimized</p>
                    <p><span><FontAwesomeIcon icon={faCheck} /></span> Best Hosting</p>
                    <p><span><FontAwesomeIcon icon={faCheck} /></span> Free Custom</p>
                    <p><span><FontAwesomeIcon icon={faCheck} /></span> Outstanding</p>
                    <p><span><FontAwesomeIcon icon={faCheck} /></span> Happy Customers</p>
                </div>
                <Link to='/membershipForm'>
                    <button onClick={getPriceInfo} style={
                        { display: classInfo? 'block' : 'none', background: "#FCD842", height: "50px", width: "60%", border: "none", outline: "none", fontWeight: "bold", marginBottom: "10px", marginLeft:"20%" }}>
                        PURCHASE
                        </button>
                </Link>
            </div>
        </div>
    );
};

export default PrincingPlanCard;