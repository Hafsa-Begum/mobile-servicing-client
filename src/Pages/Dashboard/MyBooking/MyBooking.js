import { Container, Grid, Typography, Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const MyBooking = () => {
    const [myBookings, setMyBookings] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyBookings(data))
    }, [user.email])
    return (
        <div>
            <Container>
                <Typography variant="h5" sx={{ mb: 3 }}>My Booking {myBookings.length}</Typography>
                <Grid container spacing={2}>
                    {
                        myBookings?.map(booking => <Grid item key={booking._id} xs={12} sm={12} md={6} lg={6}>
                            <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'left' }}>
                                <Grid container>
                                    <Grid item xs={6} sm={6} md={4} lg={4}>
                                        <img src={booking.serviceImage} alt="" />
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={8} lg={8}>
                                        <Typography variant="h6">{booking.serviceName}</Typography>
                                        <Typography variant="h6">Price: ${booking.servicePrice}</Typography>
                                        <Typography variant="p">Booked on: {booking.date}</Typography> <br /> <br />
                                        <Box>
                                            {/* {
                                                booking.payment ? 'Paid' : <NavLink to={`/dashboard/payment/${booking._id}`}><Button variant='contained'>Pay</Button></NavLink>
                                            } */}

                                            <Button variant='outlined' color="error" sx={{ mx: 5 }}>{booking.status}</Button>
                                            <Button variant='contained' color="error" >Cancel</Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>)

                    }
                </Grid>
            </Container>
        </div>
    );
};

export default MyBooking;