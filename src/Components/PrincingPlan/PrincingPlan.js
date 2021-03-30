import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import PrincingPlanCard from '../PrincingPlanCard/PrincingPlanCard';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const PrincingPlan = () => {

    const [price, setPrice] = useState([]);

    useEffect(() => {
        fetch('https://still-savannah-43768.herokuapp.com/price', {
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                setPrice(data)
            })

    }, [])

    return (

        <div>
            <div className='header'>
                <Navbar></Navbar>
                <div className='head-title'>
                    <p>PRINCING PLANS</p>
                </div>
            </div>
            <div className="container mt-5">
                <div className="text-center">
                    <h1 className='fw-bold'><span style={{ color: "#FCD842" }}>CHOOSE THE OFFER</span>THAT SUITS YOU</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati ratione at blanditiis, sunt quos soluta nisi quis quasi libero eaque labore, doloremque ad harum veniam.</p>
                </div>
                {
                    price.length === 0 ?
                        <div>
                            <div className='text-center'>
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </div>
                        : <div className='row'>
                            {
                                price.map(plan => <PrincingPlanCard plan={plan}></PrincingPlanCard>)
                            }
                        </div>
                }


            </div>
            <Footer></Footer>
        </div>
    );
};

export default PrincingPlan;