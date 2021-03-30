import React from 'react';

const ChooseUsCard = ({ info }) => {
    return (
        <div className='col-md-4'>
            <div class="card">
                <div class="card-body text-center">
                    <img src={info.image} style={{ width: "80px",margin:"40px 0px" }} alt="..." />
                    <h4 className='fw-bold'>{info.title}</h4>
                    <p >{info.description}</p>
                </div>
            </div>
        </div>

    );
};

export default ChooseUsCard;