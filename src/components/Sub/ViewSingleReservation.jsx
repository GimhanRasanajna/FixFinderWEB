import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import { Update } from '@mui/icons-material';

const SingleReservationView=(props)=>{

    const initialValues ={
        type:'',
        serviceName:'',
        price:'',
        status:''
    }
    const  [reservation,setReservation] = React.useState(initialValues)

    const updateReservationStatus  =(id,status)=>{
      
        const data=JSON.stringify({
            r_id : id,    
            status :status
        })
        console.log(data)
        axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/${props.breakdown?'updateBreakdownReservation':'updateReservation'}`, data)
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
    React.useEffect(()=>{
        console.log(`GGGGG ${props.r_id}`)
        if (props.r_id==0)
            return
        axios.get(`http://localhost/mymachAPI/index.php/ServiceCenterCN/${props.breakdown?'getBreakdownReservationById':'getReservationById'}/${props.r_id}`).then((res)=>{
            if(res.status==200){
                setReservation(
                    res.data
                )
            }else{
                alert("Reservation not found")
            }
           
        })
    },[props.r_id])
    
    
    return(
        <>
            <Card style={{margin:"20px"}}>
               
                <CardContent>
                    <form>
                    <FormControl fullWidth>
                        <TextField label="Type" name='type' value={reservation.type} variant="standard" onChange={()=>{}} />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Service Name" name='service name' value = {reservation.serviceName} onChange={()=>{}} variant="standard"  />
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Price" name='price' value = {reservation.price} onChange={()=>{}} variant="standard" />
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Status</InputLabel>
                                    <Select
                                        variant="standard"
                                        value = {reservation.status}
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Service Action"
                                        onChange={(e)=>{
                                            setReservation(
                                                pre => {
                                                    return {
                                                        ...pre,status:e.target.value
                                                    }
                                                }
                                            )
                                            props.changeStatus?updateReservationStatus(props.r_id,e.target.value):console.log('cannot change')
                                        }}>                                    
                                        <MenuItem  value={"Accept"}>Accept</MenuItem>
                                        <MenuItem  value={"Decline"}>Decline</MenuItem>
                                        <MenuItem  value={"Pending"}>Pending</MenuItem>
                                        <MenuItem  value={"Done"}>Done</MenuItem>
                                    </Select>
                    
                        <br></br>
                    </FormControl>
                    </form>
                </CardContent>
            </Card>
            
        </>
    )
}

export default SingleReservationView

