import { Container, Grid, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';
import Typing from 'react-typing-animation';

const HomeServices = () => {
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
        fetch('https://radiant-wave-68069.herokuapp.com/sixServices')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div style={{ backgroundColor: 'rgba(80, 118, 163, 1)' }}>
            <Container sx={{ pt: 5, pb: 10 }}>
                <Typography sx={{ my: 5, pb: 5 }} variant="h3" color='#fff'>
                    <Typing loop={true}>
                        <span>Our Services</span>
                        <Typing.Backspace count={20} />
                    </Typing>
                </Typography>
                <Grid container spacing={2}>
                    {
                        services?.map(({ name, description, price, image, _id }) => <Grid key={_id} xs={12} sm={6} md={4} lg={4}>
                            <Box className={servicesDesign} sx={{ mx: 3, my: 2, px: 3, py: 4 }}>
                                <Box style={{ backgroundColor: '#fff !important', display: 'inline-block !important' }}>
                                    <img src={image} alt="" />
                                </Box>
                                <Typography variant="h5" >{name?.slice(0, 20)}</Typography>
                                <Typography variant="h4" color="#66a1e8">${price}</Typography>
                                <Typography variant="p">{description?.slice(0, 100)}</Typography>
                                <br /> <br />
                                <NavLink to={`/services/${_id}`}>
                                    <MuiButton>Book Now</MuiButton>
                                </NavLink>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default HomeServices;