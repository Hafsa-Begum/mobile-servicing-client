import { Container, TextField, Typography, Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const [loginData, setLoginData] = useState('');
    const { signInWithGoogle, loginUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleOnSubmit = e => {
        loginUser(loginData.email, loginData.password, location, navigate)
        e.preventDefault();
        alert('ok')
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, navigate)
    }
    return (
        <div style={{
            textAlign: 'center',
            minHeight: 500,
            height: '100vh',
            marginTop: '30px'
        }}>
            <Container>
                <Box style={{
                    border: '1px solid grey', width: '45%',
                    padding: '30px 20px',
                    margin: 'auto'
                }}>
                    <Typography variant='h6' sx={{ color: '' }}>Login</Typography>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }} onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            width='480px'
                            id="standard-basic"
                            type="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            label="Password"
                            variant="standard"
                            onBlur={handleOnBlur} />

                        <Button sx={{ width: '90%', m: 2 }} type="submit">Login</Button>
                    </form>
                    <Typography variant='text'>Don't have an account?
                        <NavLink style={{
                            textDecorationColor: '#F63E7B',
                            color: '#F63E7B'
                        }} to='/register'>
                            Create an Account
                        </NavLink>
                    </Typography>
                </Box>
                <p>-----------------or-----------------</p>

                <Button onClick={handleGoogleSignIn}>Google Sign In</Button>
            </Container>
        </div>
    );
};

export default Login;