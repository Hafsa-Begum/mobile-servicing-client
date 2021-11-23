import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';

export default function ButtonAppBar() {
    const { user, logOut } = useAuth();
    const theme = useTheme();
    const useStyles = makeStyles({
        navApp: {
            // backgroundColor: 'rgba(80, 118, 163, 1) !important',
            backgroundColor: '#000 !important',
            color: '#fff !important',
            textDecoration: 'none !important'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navButton: {
            color: '#fff !important'
        }
    })
    const { navIcon, navApp, navButton } = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={navApp} position="static">
                <Toolbar>
                    <IconButton
                        className={navIcon}
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Mobile Servicing Shop
                    </Typography>
                    <NavLink style={{ textDecoration: 'none' }} to='/home'>
                        <Button className={navButton} >Home</Button>
                    </NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to='/services'>
                        <Button className={navButton}>Services</Button>
                    </NavLink>

                    {
                        user.email ?
                            <>
                                <NavLink style={{ textDecoration: 'none' }} to='/dashboard'>
                                    <Button className={navButton}>Dashboard</Button>
                                </NavLink>
                                <MuiButton onClick={logOut}>LogOut</MuiButton>
                            </>
                            :
                            <NavLink style={{ textDecoration: 'none' }} to='/login'>
                                <Button className={navButton}>Login</Button>
                            </NavLink>
                    }



                </Toolbar>
            </AppBar>
        </Box>
    );
}
