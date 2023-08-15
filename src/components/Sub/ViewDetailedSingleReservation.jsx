import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import SingleReservationView from './ViewSingleReservation';
import SingleCustomerView from './ViewSingleCustomer';
import SingleVehicleView from './ViewSingleVehicle';

const SingleDetailedReservation =(props)=>{
    
    

    return(
        <>
         {/* <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Service Action</InputLabel>
                <Select
                    value={props.status}
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         label="Service Action"
                         onChange={(e)=>{
                         console.log(e.target.value)
                           updateReservationStatus(props.status.r_id,e.target.value)
                          }}
                          >                    
                        <MenuItem  value={"Accept"}>Accept</MenuItem>
                        <MenuItem  value={"Decline"}>Decline</MenuItem>
                        <MenuItem  value={"Pending"}>Pending</MenuItem>
                        <MenuItem  value={"Done"}>Done</MenuItem>
                </Select>
            </FormControl> */}

        <SingleReservationView r_id={props.reservation.r_id} changeStatus={true} pageLoad={props.pageLoad} setPageLoad={props.setPageLoad} breakdown={props.breakdown}></SingleReservationView>
        <SingleCustomerView cus_id={props.cus_id} breakdown={props.breakdown}></SingleCustomerView>
        <SingleVehicleView r_id={props.reservation.r_id} breakdown={props.breakdown}></SingleVehicleView>
        
        </>

        
    )
}
export default SingleDetailedReservation
