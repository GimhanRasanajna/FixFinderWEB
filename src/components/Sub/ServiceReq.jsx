import * as React from 'react';
import {useEffect, useState } from "react"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Table from '@mui/material/Table';
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import SingleDetailedReservation from './ViewDetailedSingleReservation';

const reservationInit ={
    r_id:0,
    status:'pending'
}

const ServiceRequestTable = (props)=>{
    const ServiceCenter={
        sc_id:props.sc_id,
        status:props.status
    }
    const[dataRow, setDataRow]=React.useState([])

    const [open, setOpen] = useState(false);
    const [cus_id,setCusID]=useState(1)
    const [reservation,setReservation]=useState(reservationInit)

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
 
    React.useEffect(()=>{
        axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/getReservations`,JSON.stringify(ServiceCenter)).then(res => {
            console.log(res)
            console.log(res.data)
            setDataRow(res.data)
        })
        .catch(err=>{console.log(err)})

    },[props.pageLoad])

    const updateReservationStatus  =(id,status)=>{
        
        const data=JSON.stringify({
            r_id : id,    
            status :status
        })
        console.log(data)
        axios.post('http://localhost/mymachAPI/index.php/ServiceCenterCN/updateReservation', data)
        .then(res => {
            console.log(res.data)
          alert(res.data.message)
          console.log(props.setPageLoad)
          props.setPageLoad(!props.pageLoad)
        })
        .catch(err=>{
            console.log(err)
        })
        
        
    }

   return(
    <>
    <TableContainer component={Paper} sx={{ minWidth: 1000, maxWidth: 1050}}> 
        <Table sx={{ minWidth: 650, maxWidth: 1000}}>
            <TableHead>
                <TableRow>
                    <TableCell>Reservation ID</TableCell>
                    {/* <TableCell>Customer Name</TableCell> */}
                    <TableCell>Type</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Time Slot</TableCell>
                    <TableCell>Update Status</TableCell>
                    <TableCell>View/Update Reservation </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    dataRow.map((row)=>{ 
                        return(
                            <TableRow key={row.r_id}>
                                <TableCell>{row.r_id}</TableCell>
                                {/* <TableCell>{row.fullName}</TableCell> */}
                                <TableCell>{row.type}</TableCell>
                                <TableCell>{row.serviceName}</TableCell>
                                <TableCell>{row.date}</TableCell>
                                <TableCell>{row.time_slot}</TableCell>
                                <TableCell sx={{minWidth:80}}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Service Action</InputLabel>
                                    <Select
                                        value={row.status}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Service Action"
                                        onChange={(e)=>{
                                            console.log(e.target.value)
                                            updateReservationStatus(row.r_id,e.target.value)
                                        }}
                                        >                    
                                        <MenuItem  value={"Accept"}>Accept</MenuItem>
                                        <MenuItem  value={"Decline"}>Decline</MenuItem>
                                        <MenuItem  value={"Pending"}>Pending</MenuItem>
                                        <MenuItem  value={"Done"}>Done</MenuItem>
                                    </Select>
                                    </FormControl>
                                </TableCell>
                                <TableCell><Button onClick={()=>{
                                        setReservation(prev=>{
                                            return {...prev, r_id:row.r_id,status:row.status}
                                        })
                                        setCusID(row.cus_id)
                                        handleClickOpen()
                                    }}>View Reservation</Button></TableCell>
                        
                           </TableRow>
                        )
                    })
                }
            </TableBody>
        </Table>
    </TableContainer>    
        <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>
                <TableRow >
                                    <TableCell><h2>Reservation Details</h2></TableCell>
                                    <TableCell><Button onClick={handleClose}>Close</Button></TableCell>
                    </TableRow>
                </DialogTitle>
                <DialogContent>
                    <SingleDetailedReservation cus_id={cus_id} reservation={reservation} pageLoad={props.pageLoad} setPageLoad={props.setPageLoad}/>
                </DialogContent>
                
        </Dialog>
    </>
   ) 
}

const BreakdownReqTable = (props)=>{
    const ServiceCenter={
        sc_id:props.sc_id, 
        mainType:"breakdown",
        status:props.status
    }
    const [open, setOpen] = useState(false);
    const [cus_id,setCusID]=useState(1)
    const [reservation,setReservation]=useState(reservationInit)

    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
 
    const[dataRow, setDataRow]=React.useState([])
    React.useEffect(()=>{axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/getReservations`,JSON.stringify(ServiceCenter))
        .then(res => {
        console.log(res);
        console.log(res.data);
        setDataRow(res.data)
        })
        .catch(err=>{console.log(err)})

    },[props.pageLoad])
    const updateReservationStatus  =(id,status)=>{
            
        const data=JSON.stringify({
            r_id : id,    
            status :status
        })
        console.log(data)
        axios.post('http://localhost/mymachAPI/index.php/ServiceCenterCN/updateBreakdownReservation', data)
        .then(res => {
            console.log(res.data)
        alert(res.data.message)
        console.log(props.setPageLoad)
        props.setPageLoad(!props.pageLoad)
        })
        .catch(err=>{
            console.log(err)
        })
        
        
    }

   return(
    <>
        <TableContainer component={Paper} sx={{ minWidth: 900, maxWidth: 1050}}> 
            <Table sx={{ minWidth: 650, maxWidth: 1000}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Reservation ID</TableCell>
                        <TableCell>Service</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Time Slot</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>View/Update Reservation</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        dataRow.map((row)=>{ 
                            return(
                                <TableRow key={row.r_id}>
                                    <TableCell>{row.r_id}</TableCell>
                                    <TableCell>{row.serviceName}</TableCell>
                                    <TableCell>{row.type}</TableCell>
                                    <TableCell>{row.time_slot}</TableCell>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell sx={{minWidth:80}}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                        <Select
                                            value={row.status}
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Service Action"
                                            onChange={(e)=>{
                                                console.log(e.target.value)
                                                updateReservationStatus(row.r_id,e.target.value)
                                            }}>                                    
                                            <MenuItem  value={"Accept"}>Accept</MenuItem>
                                            <MenuItem  value={"Decline"}>Decline</MenuItem>
                                            <MenuItem  value={"Pending"}>Pending</MenuItem>
                                            <MenuItem  value={"Done"}>Done</MenuItem>
                                        </Select>
                                        </FormControl>
                                    </TableCell>
                                    <TableCell><Button onClick={()=>{
                                            setReservation(prev=>{
                                                return {...prev, r_id:row.r_id,status:row.status}
                                            })
                                            console.log(row)
                                            setCusID(row.cus_id)
                                            handleClickOpen()
                                        }}>View Reservation</Button></TableCell>
                            </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog
                open={open}
                // TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>
                     <TableRow >
                                    <TableCell><h2>Reservation Details</h2></TableCell>
                                    <TableCell><Button onClick={handleClose}>Close</Button></TableCell>
                    </TableRow>
                    
                </DialogTitle>
                <DialogContent>
                    <SingleDetailedReservation cus_id={cus_id} reservation={{r_id:reservation.r_id}} breakdown={true} pageLoad={props.pageLoad} setPageLoad={props.setPageLoad}/>
                </DialogContent>
                
        </Dialog>
    </>  
   ) 
}

export default BreakdownReqTable
export {ServiceRequestTable}