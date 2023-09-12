import React from 'react';
import Navbar from '../navbar/Navbar';
import Hero from '../hero/Hero';
import Headline from '../headline/Headline';
import Food from '../food/Food';
import Category from '../category/Category';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Headline />
            <Food />
            <Category />
        </div>
    );
};

export default Main;