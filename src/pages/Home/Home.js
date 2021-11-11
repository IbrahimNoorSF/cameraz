import React from 'react';
import Header from './Header/Header';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Products></Products>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;