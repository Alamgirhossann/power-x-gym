import React, { useEffect, useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';
import './Classes.css';
import ClassesCard from '../ClassesCard/ClassesCard';
import { Spinner } from 'react-bootstrap';



const Classes = () => {
    const [getClass, setGetClasses] = useState([]);

    useEffect(() => {
        fetch('https://still-savannah-43768.herokuapp.com/getClass', {
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => setGetClasses(data))
    }, [])

    return (
        <div className='container-fluid'>
            <div className='header'>
                <Navbar></Navbar>
                <div className='head-title'>
                    <p>OUR CLASSES</p>
                </div>
            </div>
            <div className="container mt-5">
                <div>
                    {getClass.length === 0 ?
                        <div className='text-center'>
                            <Spinner animation="border" variant="warning" />
                        </div>
                        : <div className='row'>
                            {
                                getClass.map(classes => <ClassesCard classes={classes}></ClassesCard>)
                            }
                        </div>
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Classes;