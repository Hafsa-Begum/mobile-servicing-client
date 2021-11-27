import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, Outlet } from 'react-router-dom';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import { Button } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';

const drawerWidth = 240;

function Dashboard(props) {
    const { user, admin, logOut } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <List>

                {user.email && !admin && <>
                    <ListItem><ListItemText> <span style={{ fontWeight: 500 }}>{user.displayName}</span><br /> </ListItemText></ListItem>
                    <ListItem><ListItemText><IconButton><PersonIcon /></IconButton> User </ListItemText></ListItem>
                </>
                }

                {
                    user.email && admin &&
                    <>
                        <ListItem><ListItemText>  <span style={{ fontWeight: 500 }}>{user.displayName}</span></ListItemText></ListItem>
                        <ListItem><ListItemText><IconButton><VerifiedUserSharpIcon /></IconButton>Admin </ListItemText></ListItem>
                    </>
                }

                <ListItem button >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText ><NavLink to='/home'>Home</NavLink></ListItemText>
                </ListItem>

                <Divider />


                <ListItem button >
                    <ListItemIcon>
                        <ShoppingBasketIcon />
                    </ListItemIcon>
                    <ListItemText ><NavLink to='/dashboard/myBooking'>My Booking</NavLink></ListItemText>
                </ListItem>

                <ListItem button >
                    <ListItemIcon>
                        <ReviewsIcon />
                    </ListItemIcon>
                    <ListItemText ><NavLink to='/dashboard/addReview'>Review</NavLink></ListItemText>
                </ListItem>


                <Divider />
                {
                    admin && <>
                        <ListItem button >
                            <ListItemIcon>
                                <StoreIcon />
                            </ListItemIcon>
                            <ListItemText ><NavLink to='/dashboard/manageBookings'>Manage Bookings</NavLink></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <SettingsApplicationsIcon />
                            </ListItemIcon>
                            <ListItemText ><NavLink to='/dashboard/manageServices'>Manage Services</NavLink></ListItemText>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <AdminPanelSettingsIcon />

                            </ListItemIcon>
                            <NavLink to='/dashboard/makeAdmin'>Make Admin</NavLink>
                        </ListItem>
                        <ListItem button >
                            <ListItemIcon>
                                <AddBoxRoundedIcon />
                            </ListItemIcon>
                            <ListItemText ><NavLink to='/dashboard/addServices'>Add Services</NavLink></ListItemText>
                        </ListItem>
                    </>
                }
                <Divider />
                <ListItem>
                    <MuiButton onClick={logOut}>Logout</MuiButton>
                </ListItem>

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
