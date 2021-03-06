import { Container, Grid, Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import MuiButton from '../../StyledComponents/MuiButton';
import BookingModal from '../BookingModal/BookingModal';
import Payment from '../Payment/Payment';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [serviceDetail, setServiceDetail] = useState({});

    useEffect(() => {
        fetch(`https://radiant-wave-68069.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServiceDetail(data))
    }, [serviceId])

    const style = {
        minHeight: 500,
        // height: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px'
    }

    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);

    return (
        <div style={style}>
            <Container sx={{ my: 'auto' }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <img style={{ height: '250px' }} src={serviceDetail.image} alt="" />
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography variant="h4" sx={{ fontWeight: 600 }}>Solution of Your <span style={{ color: 'rgba(80, 118, 163, 1)' }}>{serviceDetail.name}</span></Typography>
                            <Typography variant="h4" sx={{ my: 3 }}> Pay: <span style={{ color: 'rgba(80, 118, 163, 1)' }}>${serviceDetail.price}</span></Typography>
                            <Typography variant="p" style={{
                                color: 'rgba(80, 118, 163, 1)',
                                lineHeight: 2
                            }}>{serviceDetail.description}</Typography>
                            <br /> <br />
                            {/* <MuiButton onClick={handleBookingOpen}>Pay to confirm your booking</MuiButton> */}
                            {/* <NavLink to={`/payment/${serviceDetail._id}`}><MuiButton>Pay to confirm your booking</MuiButton></NavLink> */}
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6}>

                        <Payment service={serviceDetail}></Payment>
                    </Grid>
                </Grid>
                <BookingModal
                    openBooking={openBooking}
                    handleBookingClose={handleBookingClose}
                    service={serviceDetail}
                ></BookingModal>
            </Container>
        </div>
    );
};

export default ServiceDetail;