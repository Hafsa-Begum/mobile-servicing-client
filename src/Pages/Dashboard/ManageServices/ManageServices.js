import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Swal from 'sweetalert2';

const ManageServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    const handleServiceDelete = id => {
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    Swal.fire({
                        icon: 'success',
                        text: 'Service is Deleted!'
                    });
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining)
                }
            })

    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Image</TableCell>
                        <TableCell align="right">Problem</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {services.map((service) => (
                        <TableRow
                            key={service.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                <img src={`data:image/*;base64,${service.image}`} style={{ width: '60px', height: '70px' }} alt="" />
                            </TableCell>
                            <TableCell align="right">{service.name}</TableCell>
                            <TableCell align="right">{service.price}</TableCell>
                            <TableCell align="right"><Button onClick={() => handleServiceDelete(service._id)} color="error">Delete</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ManageServices;