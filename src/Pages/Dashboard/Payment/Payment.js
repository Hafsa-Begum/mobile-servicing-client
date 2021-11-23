import { Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Payment = () => {
    const { bookingId } = useParams();
    const [booking, setBooking] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${bookingId}`)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [bookingId])
    return (
        <div>
            <Typography variant="h4">Please Pay for: {bookingId}</Typography>
            <Typography variant="h4">Pay for: {booking?.serviceName}</Typography>
        </div>
    );
};

export default Payment;