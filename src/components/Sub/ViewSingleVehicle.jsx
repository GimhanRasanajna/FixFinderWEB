import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import axios from 'axios';

const SingleVehicleView=(props)=>{
    const initialValues ={
        type:'',
        brand:'',
        model:'',
        year:'',
        v_no:''
    }
    const  [vehicle,setVehicle] = React.useState(initialValues)
    //console.log(`http://localhost/mymachAPI/index.php/ServiceCenterCN/${props.breakdown?'getBreakdownReservationVehicle':'getReservationVehicle'}/${props.r_id}`)
    console.log(props.r_id)
    React.useEffect(()=>{
            
        axios.get(`http://localhost/mymachAPI/index.php/ServiceCenterCN/${props.breakdown?'getBreakdownReservationVehicle':'getReservationVehicle'}/${props.r_id}`).then((res)=>{
            
            if(res.status==200){
                setVehicle(
                    res.data[0]
                )
            }else{
                alert("vehicle not found")
            }
           
        })
    },[props.r_id])
    
    return(
        <>
            <Card style={{margin:"20px"}}>

                <CardContent>
                    <form>
                    <FormControl fullWidth>
                    <TextField label="Type" name='type' value={vehicle.type} variant="standard" onChange={()=>{}} />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Brand" name='brand' value = {vehicle.brand} onChange={()=>{}} variant="standard"  />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Model"  name='model'  value = {vehicle.model} onChange={()=>{}} variant="standard" />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Year" name='year' value = {vehicle.year}onChange={()=>{}} variant="standard" />
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Vehicle No"  name='v_no' value = {vehicle.v_no}onChange={()=>{}} variant="standard"  />
                        <br></br>
                    </FormControl>
                    </form>
                </CardContent>
            </Card>
            

           
        </>
    )
}

export default SingleVehicleView
