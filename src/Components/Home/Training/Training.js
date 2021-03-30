import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Training.css';

const Training = () => {
    return (
        <div className="container section-container">
            <h1 className='text-center mb-5'>TRAINING <span style={{color:"#FCD842"}}>PROGRAMS</span></h1>
            <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                    <div class="card yoga">
                        <button className='card-title mb-5'>
                            YOGA TRAINING SESSION
                            <span className='mx-3'><FontAwesomeIcon icon={faArrowRight}/></span>
                        </button>
                    </div>
                </div>
                <div class="col">
                    <div class="card cardio ">
                        <button className='card-title mb-5'>
                            CARDIO TRAINING SESSION 
                            <span className='mx-3'><FontAwesomeIcon icon={faArrowRight}/></span>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Training;