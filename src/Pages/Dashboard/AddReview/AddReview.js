import { Button, Container, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../hooks/useAuth';

const AddReview = () => {
    const [reviewData, setReviewData] = useState('');
    const { user } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReviewData = { ...reviewData };
        console.log(newReviewData)
        newReviewData[field] = value;
        setReviewData(newReviewData);
    }

    const handleReviewAdd = e => {
        const review = {
            ...reviewData,
            name: user.displayName,
            image: user.photoURL
        }
        e.preventDefault();

        fetch('https://radiant-wave-68069.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Review is added successfully!'
                    });
                }
            })

    }

    return (
        <div>
            <Container>
                <Typography variant="h3">Please Add a Review</Typography>
                <form onSubmit={handleReviewAdd}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        label="Name"
                        defaultValue={user.displayName}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        label="Your Designation"
                        name='designation'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        label="Your Comments"
                        name='comments'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        range='0-5'
                        label="Give Rating (0-5)"
                        name='rating'
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <br />

                    <Button
                        sx={{ width: '50%', m: 1 }}
                        variant="contained"
                        type="submit">
                        Submit
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default AddReview;