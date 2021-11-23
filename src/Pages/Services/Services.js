import { Container, Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import MuiButton from '../../StyledComponents/MuiButton';
import Navigation from '../../Pages/Shared/Navigation/Navigation';
import { NavLink } from 'react-router-dom';

const Services = () => {
    const useStyles = makeStyles({
        servicesDesign: {
            backgroundColor: "#fff",
            //color: "#fff",
            borderRadius: '20px'
        }
    })

    const { servicesDesign } = useStyles();

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <Navigation />
            <div style={{ backgroundColor: 'rgba(80, 118, 163, 1)' }}>
                <Container sx={{ pt: 5, pb: 10 }}>
                    <Typography sx={{ mb: 5, mt: 3 }} variant="h3" color="#fff !important">Our All Services</Typography>
                    <Grid container spacing={2}>
                        {
                            services?.map((service) => <Grid key={service._id} xs={12} sm={6} md={4} lg={4}>
                                <Box className={servicesDesign} sx={{ mx: 3, my: 2, px: 3, py: 4 }}>
                                    <Box style={{ backgroundColor: '#fff !important', display: 'inline-block !important' }}>
                                        <img src={service.image} alt="" />
                                    </Box>
                                    <Typography variant="h5" sx={{ mt: 2, mb: 1 }}>{service.name?.slice(0, 20)}</Typography>
                                    <Typography variant="h4" color="#66a1e8">${service.price}</Typography>
                                    <Typography variant="p" sx={{ mb: 3 }}>{service.description?.slice(0, 100)}</Typography>
                                    <br /> <br />
                                    {
                                        service.payment ? 'Booked' : <NavLink to={`/services/${service._id}`}><MuiButton variant='contained'>Book Now</MuiButton></NavLink>
                                    }
                                </Box>
                            </Grid>
                            )
                        }
                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default Services;