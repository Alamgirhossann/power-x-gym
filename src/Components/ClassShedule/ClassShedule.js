import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import checkmark from '../../Images/checkmark.png';

const ClassShedule = () => {
    const { id } = useParams();
    const [classes, setClasses] = useState({})
    console.log(classes);
    useEffect(() => {
        fetch(`http://localhost:4000/getClass/${id}`, {
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                sessionStorage.setItem('class', JSON.stringify(data))
                setClasses(data)
            })
    }, {})

    return (
        <div>
            <div className='header'>
                <Navbar></Navbar>
                <div className='head-title'>
                    <p>{classes.title}</p>
                </div>
            </div>
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <img style={{ width: "100%", height: "90%" }} src={classes.image} alt="" />
                    </div>
                    <div className="col-md-6">
                        <h3 className='fw-bold'><span style={{ color: "#FCD842" }}>CLASS</span> SCHEDULE</h3>
                        <div class="row row-cols-1 row-cols-md-2 g-4 mt-5">
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card">
                                    <div className='mx-3'>
                                        <h6 className='fw-bold'>Monday</h6>
                                        <p style={{ color: "#FCD842" }}>8:00 am-9:00 am</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fugiat dolor voluptatum pariatur soluta, possimus quos ex consequatur totam voluptatem velit optio nemo mollitia. Dolore, neque quidem vel unde rerum assumenda quos cupiditate vitae soluta doloribus laudantium illum optio dolorum nobis fugit temporibus ratione nihil reprehenderit nisi ipsa doloremque quae.</p>
                        <div className='d-flex'>
                            <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                            <p className='fw-bold'>Having slimmer shapely Thinhs</p>
                        </div>
                        <div className='d-flex'>
                            <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                            <p className='fw-bold'>Getting Stronger Body</p>
                        </div>
                        <div className='d-flex'>
                            <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                            <p className='fw-bold'>Increased Metabolism</p>
                        </div>
                        <div className='d-flex'>
                            <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                            <p className='fw-bold'>Inncreased Muscular Endurance</p>
                        </div>
                        <div className='d-flex'>
                            <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                            <p className='fw-bold'>Maximum Results in less Time</p>
                        </div>
                    </div>

                </div>
                <div className='d-flex justify-content-between'>
                            <div className='d-flex'>
                                <img style={{ height: "30px", marginRight: "10px" }} src={checkmark} alt="" />
                                <p className='fw-bold'>Firm Hips and Tummy</p>
                            </div>
                            <div>
                                <Link to='/princing'>
                                    <button style={{ background: "#FCD842", border: "none", outline: "none", width: "100px", height: "40px", fontWeight: "bold" }}>
                                        JOIN US
                            </button>
                                </Link>
                            </div>
                        </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ClassShedule;