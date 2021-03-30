import React from 'react';
import image from '../../../Images/survey.jpg'; 

const Survey = () => {
    return (
        <section className='container mt-5'>
            <div className="row">
                <div className="col-md-6">
                    <img style={{width:"100%", height:"80%"}} src={image} alt=""/>
                </div>
                <div className="col-md-5 offset-md-1 mt-5 ">
                    <h3 style={{color:"#FCD842"}}>WE ARE HERE TO DREAM</h3>
                    <h3>OUR TEAM IS HERE SURVEY YOUR</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos provident commodi fuga aliquid deleniti, dolor libero suscipit qui non, explicabo tenetur rerum labore dolorem quod molestias harum distinctio consequuntur! Officia cupiditate provident tempore rem sunt nostrum soluta sint, qui vitae.</p>
                </div>
            </div>
        </section>
    );
};

export default Survey;