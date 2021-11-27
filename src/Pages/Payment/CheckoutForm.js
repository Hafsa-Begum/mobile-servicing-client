import { CircularProgress, TextField } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import MuiButton from '../../StyledComponents/MuiButton';

const CheckoutForm = ({ service }) => {
    const { price } = service;
    const { user } = useAuth();
    const today = new Date();
    const date = today.toLocaleDateString();
    const initialInfo = { date, service, customerName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);


    const stripe = useStripe();
    const elements = useElements();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processsing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');

    useEffect(() => {
        fetch('https://radiant-wave-68069.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data)
            })
    }, [price])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo };
        console.log(newBookingInfo)
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }
        setProcessing(true)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            setError(error.message);
            setSuccess('')
        }
        else {
            setError('')
            console.log(paymentMethod)
        }
        //payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: 'Jony',
                        email: user.email
                    },
                },
            },
        );
        if (intentError) {
            setError(intentError.message);
            setSuccess('');
        }
        else {
            setError('');
            setSuccess('Your payment is successful')
            console.log(paymentIntent)
            setProcessing(false)
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* <TextField
                    sx={{ width: '75%', m: 1 }}
                    name="customerName"
                    defaultValue={user.displayName}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    name="email"
                    defaultValue={user.email}
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    name="phone"
                    onBlur={handleOnBlur}
                    defaultValue="Phone"
                    variant="standard" />
                <TextField
                    sx={{ width: '75%', m: 1 }}
                    name="address"
                    onBlur={handleOnBlur}
                    defaultValue="Address"
                    variant="standard" />
                <TextField
                    disabled
                    sx={{ width: '75%', m: 1 }}
                    defaultValue={date}
                    onBlur={handleOnBlur}
                    variant="standard" /> */}
                <br /> <br />
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <br />
                {
                    processsing ? <CircularProgress /> :
                        <MuiButton sx={{ width: '75%', m: 1 }} type="submit" disabled={!stripe}>
                            Pay ${price}
                        </MuiButton>
                }
            </form>
            {
                error && <p style={{ color: 'red' }}>{error}</p>
            }
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default CheckoutForm;