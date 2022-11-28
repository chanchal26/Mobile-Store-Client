import React from 'react';
import { Helmet } from 'react-helmet';
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
            <Helmet>
                <title>Home</title>
            </Helmet>
        </div>
    );
};

export default Home;