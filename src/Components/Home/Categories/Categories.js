import React from 'react';
import CategoryCard from '../CategoryCard/CategoryCard';
import prog from '../../../Images/prog.png'
import work from '../../../Images/work.png'
import nutri from '../../../Images/nutri.png'

const categoryData = [
    {
        id: "1",
        image: prog,
        color: "prog",
        title: "PROGRESSION",
        background: 'primary-bg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
    {
        id: "2",
        image: work,
        color: "workout",
        title: "WORKOUT",
        background: 'secondary-bg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
    {
        id: "3",
        image: nutri,
        color: "nutri",
        title: "NUTRITION",
        background: 'third-bg',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus aliquam, asperiores itaque debitis sint veniam.'
    },
]

const Categories = () => {
    return (
        <section className="container">
            <div className='row'>
                {
                    categoryData.map(category => <CategoryCard category={category}></CategoryCard>)
                }
            </div>
        </section>
    );
};

export default Categories;