import React from 'react';
import Banner from '../Banner/Banner';
import HomeServices from '../HomeServices/HomeServices';
import Reviews from '../Reviews/Reviews';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navigation />
            <Banner />
            <HomeServices />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;