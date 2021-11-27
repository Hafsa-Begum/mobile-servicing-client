import { Container, Grid, IconButton, List, ListItemText, Box, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../../../assets/logo (2).png';


const useStyle = makeStyles({
    socialIcon: {
        color: 'rgba(80, 118, 163, 1) !important',
        border: '1px solid rgba(80, 118, 163, 1) !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: 'rgba(80, 118, 163, 1) !important',
            color: '#fff !important'
        }
    },
    emailIcon: {
        color: 'rgba(80, 118, 163, 1) !important'
    }
})

const Footer = () => {
    const { socialIcon, emailIcon } = useStyle();
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            paddingBottom: '40px',
            paddingTop: '30px'
        }}>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ textAlign: 'left' }}>

                            <ListItemText><Box style={{ backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block', }}>
                                <img src={logo} alt="" style={{ margin: '5px 10px 0px 10px', height: '60px' }} /> <br />

                            </Box><Typography color="rgba(80, 118, 163, 1)" variant="h6" sx={{ mb: 2 }}>Mobile Repair</Typography></ListItemText>
                            <ListItemText>Our Mobile Servicing Center is always ready to give solution of your any problem of your cellphone. We ensure a quality service for you. </ListItemText>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText sx={{ color: 'rgba(80, 118, 163, 1)', mb: 1 }}><Typography variant="h6">Contact Us</Typography></ListItemText>

                            <ListItemText><IconButton className={emailIcon}><CallIcon /></IconButton>+8065432145</ListItemText>
                            <ListItemText><IconButton className={emailIcon}><LocationOnIcon /></IconButton>+8065432145</ListItemText>
                            <ListItemText><IconButton className={emailIcon}><EmailIcon /></IconButton> info.pink@babs.com</ListItemText>


                        </List>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText sx={{ color: 'rgba(80, 118, 163, 1)', mb: 1 }}><Typography variant="h6">Follow Us</Typography></ListItemText>
                            <IconButton className={socialIcon}>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <LinkedInIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton className={socialIcon}>
                                <InstagramIcon />
                            </IconButton>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List sx={{ textAlign: 'left' }}>
                            <ListItemText sx={{ color: 'rgba(80, 118, 163, 1)', mb: 1 }}><Typography variant="h6">Customer Service</Typography></ListItemText>
                            <ListItemText>Help & Contact Us</ListItemText>
                            <ListItemText>Returns & Refunds</ListItemText>
                            <ListItemText>Online Stores</ListItemText>
                            <ListItemText>Terms & Condition</ListItemText>

                        </List>
                    </Grid>

                </Grid>
                <Typography sx={{ textAlign: 'center', pt: 4, mb: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;