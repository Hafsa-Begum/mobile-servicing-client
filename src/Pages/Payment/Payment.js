import { Typography } from '@mui/material';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JvycIGOmz0FnLA2dKBYfqJW5bEOoXrf1Nmkv1DXmEIpWOVzfuSDMsnJl4nnMbQW0L6tDN8QucyLVrTGCyPdC6fT00eqr2XJBS');

const Payment = ({ service }) => {
    const { name, price } = service;

    return (
        <div>
            <Typography variant="h4">Please Pay for: {name}</Typography>
            <Typography variant="h4">Please Pay: ${price}</Typography>
            {
                price &&
                <Elements stripe={stripePromise}>
                    <CheckoutForm service={service} />
                </Elements>
            }
        </div>
    );
};

export default Payment;