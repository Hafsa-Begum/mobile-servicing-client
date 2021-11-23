import { Container, Grid, Box, Typography, Rating } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
const reviews = [
    {
        name: "Stephene George",
        designation: "CEO of Manpol",
        comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I will certainly use him again if required and feel confident in his skills.",
        rating: 5,
        image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-03-1.jpg"
    },
    {
        name: "Lita ",
        designation: "CEO of Manpol",
        comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I also appreciate the very quick response to my call for assistance. ",
        rating: 4.5,
        image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-02-1.jpg "
    },
    {
        name: "Michale P. Solomon",
        designation: "Manager of Deshal",
        comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I will certainly use him again if required and feel confident in his skills.",
        rating: 5,
        image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-01-1.jpg"
    },

]

const Reviews = () => {
    return (
        <div style={{ margin: '40px 0px' }}>
            <Typography variant="h3">Our Testimonials</Typography>
            <Carousel
                NextIcon={<img src="http://random.com/next" alt='' />}
                PrevIcon={<img src="http://random.com/prev" alt='' />}
            >

                <Grid container spacing={2}>
                    {
                        reviews.map(review => <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Box sx={{ mx: 5 }}>
                                <Typography variant="p">{review.comments}</Typography> <br />
                                <img src={review.image} style={{ height: '100%', borderRadius: '50%' }} alt="" />
                                <Typography variant="h6">{review.name}</Typography>
                                <Typography variant="p">{review.designation}</Typography> <br />
                                <Rating name="half-rating" defaultValue={review.rating} precision={0.5} />
                            </Box>
                        </Grid>)
                    }
                </Grid>

            </Carousel>
        </div>
    );
};

export default Reviews;