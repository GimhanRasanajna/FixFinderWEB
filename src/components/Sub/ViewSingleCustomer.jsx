import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';

import FormControl from '@mui/material/FormControl';

import Button from '@mui/material/Button';

import Typography from '@mui/material/Typography';

import axios from 'axios';

const SingleCustomerView=(props)=>{
    const initialValues ={
        name:'',
        address:'',
        nic:'',
        contact_no:'',
        email:''
    }
    const  [customer,setCustomer] = React.useState(initialValues)

    

    React.useEffect(()=>{
        axios.get(`http://localhost/mymachAPI/index.php/ServiceCenterCN/getCustomerById/${props.cus_id}`).then((res)=>{
            if(res.status==200){
                setCustomer(
                    res.data
                )
            }else{
                alert("customer not found")
            }
           
        })
    },[props.cus_id])
    
    return(
        <>
            <Card style={{margin:"20px"}}>

                <CardContent>
                    <form>
                    <FormControl fullWidth>
                        <TextField label="Customer Name" name='name' value={customer.fullName} variant="standard" onChange={()=>{}} />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="NIC" name='nic' value = {customer.nic} onChange={()=>{}} variant="standard"  />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Contact No"  name='contactNo'  value = {customer.contact_no} onChange={()=>{}} variant="standard" />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField label="Address" name='address' value = {customer.address}onChange={()=>{}} variant="standard" />
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Email"  name='email' value = {customer.email}onChange={()=>{}} variant="standard"  />
                        <br></br>
                    </FormControl>
                    </form>
                </CardContent>
            </Card>
            

           
        </>
    )
}

export default SingleCustomerView
