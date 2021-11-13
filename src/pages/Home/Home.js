import React from 'react';
import Footer from '../Shared/Footer/Footer';
import NavBar from '../Shared/NavBar/NavBar';
import Header from './Header/Header';
import Offers from './Offers/Offers';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Products></Products>
            <Offers></Offers>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;