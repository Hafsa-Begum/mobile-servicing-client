import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const ManageBookings = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);

    const handleOrderDelete = id => {

        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                    }).then((result) => {
                        if (result.isConfirmed) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
                    // Swal.fire({
                    //     icon: 'success',
                    //     text: 'Admin is made successfully!'
                    // })
                }
            })
    }
    return (
        <div>
            <Typography variant="h5" sx={{ mb: 3 }}>Total Booking {orders.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Problem</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Booking Date</TableCell>
                            <TableCell align="right">Customer</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((service) => (
                            <TableRow
                                key={service.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img src={service.serviceImage} style={{ width: '60px', height: '70px' }} alt="" />
                                </TableCell>
                                <TableCell align="right">{service.serviceName}</TableCell>
                                <TableCell align="right">{service.servicePrice}</TableCell>
                                <TableCell align="right">{service.date}</TableCell>
                                <TableCell align="right">{service.customerName}</TableCell>
                                <TableCell align="right">{service.phone}</TableCell>
                                <TableCell align="right">{service.address}</TableCell>
                                <TableCell align="right">{service.status}</TableCell>
                                <TableCell align="right">
                                    <Button>Update</Button>
                                    <Button onClick={() => handleOrderDelete(service._id)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageBookings;