import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Categories from '../Categories/Categories';
import ChooseUs from '../ChooseUs/ChooseUs';
import Header from '../Header/Header';
import Survey from '../Survey/Survey';
import Training from '../Training/Training';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Categories></Categories>
           <Survey></Survey>
           <Training></Training>
           <ChooseUs></ChooseUs>
           <Footer></Footer>
        </div>
    );
};

export default Home;