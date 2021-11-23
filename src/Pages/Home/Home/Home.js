import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import Navigation from '../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <HomeServices />
            <Reviews />
        </div>
    );
};

export default Home;