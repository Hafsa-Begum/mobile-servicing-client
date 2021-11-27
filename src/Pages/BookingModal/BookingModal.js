import { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import useAuth from '../../hooks/useAuth';
import { TextField } from '@mui/material';
import MuiButton from '../../StyledComponents/MuiButton';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function BookingModal({ openBooking, handleBookingClose, service }) {
    const { name, price, image } = service;
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' };
    const [bookingInfo, setBookingInfo] = useState(initialInfo);
    const today = new Date();
    const date = today.toLocaleDateString();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newBookingInfo = { ...bookingInfo };
        console.log(newBookingInfo)
        newBookingInfo[field] = value;
        setBookingInfo(newBookingInfo);
    }

    const handleBookingSubmit = e => {
        //collect booking info
        const bookingData = {
            ...bookingInfo,
            serviceImage: image,
            servicePrice: price,
            serviceName: name,
            date
        }
        //send to the server
        fetch('https://radiant-wave-68069.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Wow, Your Booking is Confirmed!'
                    });
                    handleBookingClose();
                }

            })
        e.preventDefault();

    }

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openBooking}
                onClose={handleBookingClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openBooking}>
                    <Box sx={style}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            {name}
                        </Typography>
                        <form onSubmit={handleBookingSubmit}>

                            {/* <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                name="price"
                                defaultValue={price}
                                variant="standard" /> */}
                            {/* <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                name="image"
                                defaultValue={image}
                                variant="standard" /> */}
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="customerName"
                                defaultValue={user.displayName}
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="email"
                                defaultValue={user.email}
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="phone"
                                onBlur={handleOnBlur}
                                defaultValue="Phone"
                                variant="standard" />
                            <TextField
                                sx={{ width: '90%', m: 1 }}
                                name="address"
                                onBlur={handleOnBlur}
                                defaultValue="Address"
                                variant="standard" />
                            <TextField
                                disabled
                                sx={{ width: '90%', m: 1 }}
                                defaultValue={date}
                                variant="standard" />
                            <MuiButton type="submit" sx={{ width: '90%' }}>Submit</MuiButton>
                        </form>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
