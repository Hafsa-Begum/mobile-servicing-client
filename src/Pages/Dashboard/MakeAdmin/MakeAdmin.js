import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import MuiButton from '../../../StyledComponents/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleMakeAdmin = e => {
        fetch('https://radiant-wave-68069.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Admin is made successfully'
                    })
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <Typography variant="h4">Enter email whom you want to make admin...</Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
                    id="standard-basic"
                    type="email"
                    label="Email"
                    variant="standard"
                    onBlur={(e) => setEmail(e.target.value)} />

                <MuiButton sx={{ width: '50%', m: 2 }} type="submit">Make Admin</MuiButton>
            </form>
        </div>
    );
};

export default MakeAdmin;