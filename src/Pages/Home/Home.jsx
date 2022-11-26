import React from 'react';
import Advertise from './Advertise';
import Banner from './Banner';
import Category from './Category';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
            <Banner />
            <Advertise />
            <Category />
            <Testimonial />
        </div>
    );
};

export default Home;