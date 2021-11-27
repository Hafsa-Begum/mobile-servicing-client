import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../../../assets/logo (2).png';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import ExploreIcon from '@mui/icons-material/Explore';
import DashboardIcon from '@mui/icons-material/Dashboard';

export default function Navigation() {
    const { user, logOut } = useAuth()
    const theme = useTheme();

    const useStyle = makeStyles({
        navAppBar: {
            backgroundColor: '#000 !important',
            color: '#fff !important'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important',

            },
            [theme.breakpoints.down('sm')]: {
                marginRight: 'auto !important'
            }

        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            },

        },
        navLogo: {
            [theme.breakpoints.up('sm')]: {
                marginRight: 'auto !important'
            }
        }
    })

    const { navAppBar, navIcon, navItemContainer, navLogo } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250, textAlign: 'center' }}
            role="presentation"
        >
            <List>

                <ListItem button>
                    <ListItemText><NavLink style={{ textDecoration: 'none', color: '#F63E7B' }} to='/home'><HomeIcon />Home</NavLink></ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemText><NavLink style={{ textDecoration: 'none', color: '#F63E7B' }} to='/services'><ExploreIcon />Services</NavLink></ListItemText>
                </ListItem>
                {
                    user.email ?
                        <>
                            <ListItem button>
                                <ListItemText><NavLink style={{ textDecoration: 'none', color: '#F63E7B' }} to='/dashboard'><DashboardIcon /> Dashboard</NavLink></ListItemText>
                            </ListItem>
                            <ListItem button>
                                <ListItemText><MuiButton onClick={logOut}><LogoutIcon />Logout</MuiButton> </ListItemText>

                            </ListItem>
                            <ListItem>
                                <ListItemText><span>{user.displayName}</span></ListItemText>
                            </ListItem>

                        </>
                        :
                        <ListItem button>
                            <ListItemText> <NavLink style={{ textDecoration: 'none', color: '#F63E7B' }} to='/login'>
                                <Button variant="contained" color="inherit"><LoginIcon />Login</Button>
                            </NavLink></ListItemText>
                        </ListItem>
                }

            </List>

        </Box>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className={navAppBar} position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <List sx={{ mb: 0 }} className={navLogo}>

                            <ListItemText><Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img src={logo} alt="" style={{ margin: '5px 10px 0px 10px', height: '60px', width: '60px', backgroundColor: '#fff', borderRadius: '50%', display: 'inline-block' }} />

                                <Typography color="rgba(80, 118, 163, 1)" variant="h6">Mobile Repair</Typography>
                            </Box>

                            </ListItemText>


                        </List>

                        <Box className={navItemContainer}>
                            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/home'>
                                <Button color="inherit"><HomeIcon />Home</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/services'>
                                <Button color="inherit"><ExploreIcon /> Services</Button>
                            </NavLink>

                            {
                                user.email ?
                                    <>
                                        <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/dashboard'>
                                            <Button color="inherit"><DashboardIcon />Dashboard</Button>
                                        </NavLink>
                                        <MuiButton onClick={logOut}><LogoutIcon />Logout</MuiButton> <span style={{ color: '#000' }}>{user.displayName}</span>
                                    </> :
                                    <NavLink style={{ textDecoration: 'none', color: '#fff' }} to='/login'>
                                        <Button color="inherit"><LoginIcon /> Login</Button>
                                    </NavLink>
                            }
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>

            </div>
        </>
    );
}
