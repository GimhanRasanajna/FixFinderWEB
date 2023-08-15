import {forwardRef, useEffect, useState } from "react"
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
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating';
import SingleCustomerView from "./ViewSingleCustomer";
import SingleReservationView from "./ViewSingleReservation";
import SingleVehicleView from "./ViewSingleVehicle";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';


const FeedbackComp = (props) =>{
    const [dataRow,setDataRow]= useState([])

    const [open, setOpen] = useState(false);
    const [cus_id,setCusID]=useState(1)

    const [r_id,setResID]=useState(0)
    const [open2, setOpen2] = useState(false);

    const [v_id,setVehicleID]=useState(0)
    const [open3, setOpen3] = useState(false);

 
    
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
    const handleClickOpen2 = () => {
        setOpen2(true);
      };
    
    const handleClose2 = () => {
        setOpen2(false);
      };

    const handleClickOpen3 = () => {
        setOpen3(true);
      };
    
    const handleClose3 = () => {
        setOpen3(false);
      };


    useEffect(()=>{
        const data = {
            sc_id:props.sc_id
        }

        axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/viewFeedbacks`,JSON.stringify(data)).then(res => {
            console.log(res)
            console.log(res.data)
            setDataRow(res.data)
        })
        .catch(err=>{console.log(err)})

    },[props.sc_id])

    return(
        <>
       
        <TableContainer component={Paper} sx={{ minWidth: 650, maxWidth: 1200}}> 
            <Table sx={{ minWidth: 650, maxWidth: 1200}}>
                <TableHead>
                    <TableRow>
                        <TableCell > Date</TableCell>
                        <TableCell > Rating</TableCell>
                        <TableCell style={{width:'350px'}}>Feedback</TableCell>
                        <TableCell>Customer Details</TableCell>
                        <TableCell>Reservation Details</TableCell>
                        <TableCell>Vehicle Details</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {

                        dataRow.map((row)=>{ 
                            return(
                                <TableRow key={row.f_id}>

                                    <TableCell>{row.date}</TableCell>
                                    <TableCell><Rating name="read-only" value={row.rating} readOnly /></TableCell>
                                    <TableCell>{row.feedback}</TableCell>

                                    <TableCell><Button onClick={()=>{
                                        setCusID(row.cus_id)
                                       handleClickOpen()
                                    }}>View Customer</Button></TableCell>

                                    <TableCell><Button onClick={()=>{
                                        setResID(row.r_id)
                                        handleClickOpen2()
                                    }}>View Reservation</Button></TableCell>

                                    <TableCell><Button onClick={()=>{
                                        setResID(row.r_id)
                                        setVehicleID(row.v_id)
                                        handleClickOpen3()
                                    }}>View Vehicle</Button></TableCell>
                            
                            </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer> 
        <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Customer Details </DialogTitle>
                <DialogContent>
                    <SingleCustomerView cus_id={cus_id}/>
                </DialogContent>
                
        </Dialog>
        <Dialog
                open={open2}
                keepMounted
                onClose={handleClose2}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Reservation Details </DialogTitle>
                <DialogContent>
                    <SingleReservationView r_id={r_id}/>
                </DialogContent>
                
        </Dialog>
        <Dialog
                open={open3}
                keepMounted
                onClose={handleClose3}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle>Vehicle Details </DialogTitle>
                <DialogContent>
                    <SingleVehicleView r_id={r_id}/>
                </DialogContent>
                
        </Dialog>
        </> 

    )
}
export default FeedbackComp