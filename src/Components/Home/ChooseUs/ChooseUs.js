import React from 'react';
import body from '../../../Images/body.png'
import gift from '../../../Images/gift.png'
import cycle from '../../../Images/cycle.png'
import ChooseUsCard from '../ChooseUsCard/ChooseUsCard';

const infoData = [
    {
        id: "1",
        image: body,
        title: "FREE FITNESS TRAINING",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
    {
        id: "2",
        image: cycle,
        title: "TONS OF CARDIO & STRENGTH",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
    {
        id: "3",
        image: gift,
        title: "NO COMMITMENT MEMBERSHIPS",
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
]


const ChooseUs = () => {
    return (
        <div className="container">
            <h1 className='fw-bold text-center mb-5'><span style={{color:"#FCD842"}}>WHY</span>CHOOSE US</h1>
            <div className='row'>
                {
                    infoData.map(info => <ChooseUsCard info={info}></ChooseUsCard>)
                }
            </div>
        </div>
    );
};

export default ChooseUs;