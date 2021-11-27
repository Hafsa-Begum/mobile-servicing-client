import { Button, Container, Input, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const AddServices = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const handleServiceAdd = e => {
        e.preventDefault();
        if (!image) {
            return;
        }

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('image', image);

        fetch('https://radiant-wave-68069.herokuapp.com/services', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        text: 'New service is added successfully!'
                    });
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <Container>
                <Typography variant="h3">Add a service</Typography>
                <form onSubmit={handleServiceAdd}>
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        label="Name"
                        onChange={e => setName(e.target.value)}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        label="Description"
                        onChange={e => setDescription(e.target.value)}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        required
                        type="number"
                        label="Price"
                        onChange={e => setPrice(e.target.value)}
                        variant="standard" />
                    <br />
                    <Input
                        sx={{ width: '50%', m: 1 }}
                        accept="image/*"
                        onChange={e => setImage(e.target.files[0])}
                        type="file" />
                    <Button
                        sx={{ width: '50%', m: 1 }}
                        variant="contained"
                        type="submit">
                        Add Service
                    </Button>
                </form>
            </Container>
        </div>
    );
};

export default AddServices;