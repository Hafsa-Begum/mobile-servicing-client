import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Box } from '@mui/material'
import banner1 from '../../../assets/banner-1.png';
import banner2 from '../../../assets/banner-2.jpg';
import banner3 from '../../../assets/banner-3.jpeg';


const banners = [
    {
        id: 1,
        image: banner1,
        description: ''
    },
    {
        id: 1,
        image: banner2,
        description: ''
    },
    {
        id: 1,
        image: banner3,
        description: ''
    }
]

const Banner = () => {
    return (
        <Carousel
            NextIcon={<img src="http://random.com/next" alt='' />}
            PrevIcon={<img src="http://random.com/prev" alt='' />}
        >
            {
                banners.map((banner, i) => <Box key={i} >
                    <img src={banner.image} style={{ width: '100%', height: '500px' }} alt="" />
                </Box>)
            }
        </Carousel>
    );
};

export default Banner;