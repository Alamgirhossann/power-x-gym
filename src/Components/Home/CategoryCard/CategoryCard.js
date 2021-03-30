import React from 'react';
import './CategoryCard.css';

const CategoryCard = ({ category }) => {
    return (
        <div className='col-md-4 mb-5 mt-5'>
            <div class={`card text-center bg-${category.background}`}>
                <div class="card-body py-5">
                    <img style={{ height: "50px", width: "70px", margin:"20px 0px" }} src={category.image} class="card-img-top" alt="..." />
                    <h3 class={`title-${category.color}`}>{category.title}</h3>
                    <p class="card-text text-white">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;