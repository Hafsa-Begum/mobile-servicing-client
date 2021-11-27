import { Container, Grid, Box, Typography, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
// const reviews = [
//     {
//         name: "Stephene George",
//         designation: "CEO of Manpol",
//         comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I will certainly use him again if required and feel confident in his skills.",
//         rating: 5,
//         image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-03-1.jpg"
//     },
//     {
//         name: "Lita ",
//         designation: "CEO of Manpol",
//         comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I also appreciate the very quick response to my call for assistance. ",
//         rating: 4.5,
//         image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-02-1.jpg "
//     },
//     {
//         name: "Michale P. Solomon",
//         designation: "Manager of Deshal",
//         comments: "Great outcome with a very pleasant tech guy(John) who did not talk down to us and explained everything as he was working. I will certainly use him again if required and feel confident in his skills.",
//         rating: 5,
//         image: "http://smartdata.tonytemplates.com/computer-repairs/cellphonefix/wp-content/uploads/sites/2/2017/03/userpic-01-1.jpg"
//     },

// ]

const Reviews = () => {
    const useStyles = makeStyles({
        ratingDesign: {
            marginTop: '20px',
            color: "rgba(80, 118, 163, 1) !important"
        }
    })
    const { ratingDesign } = useStyles();

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://radiant-wave-68069.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div style={{
            paddingTop: '40px',
            // height: '500px',
            // backgroundColor: 'rgba(80, 118, 163, .1)'
        }}>
            <Typography variant="h3" sx={{ my: 5 }}>Our Testimonials</Typography>
            <Container>
                <Grid container spacing={2}>
                    {
                        reviews.map(review => <Grid item xs={12} sm={12} md={4} lg={4}>
                            <Box sx={{ mx: 5 }}>
                                <Typography variant="p">{review.comments}</Typography> <br />
                                <Rating name="half-rating" defaultValue={review.rating} precision={0.5} className={ratingDesign} /> <br />
                                <img src={review.image} style={{ height: '100%', borderRadius: '50%', marginTop: '20px', marginBottom: '10px' }} alt="" />
                                <Typography variant="h6" color="rgba(80, 118, 163, 1)">{review.name}</Typography>
                                <Typography variant="p" sx={{ mt: 3, mb: 5 }}>{review.designation}</Typography> <br />

                            </Box>
                        </Grid>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;