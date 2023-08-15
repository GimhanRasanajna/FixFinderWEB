import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'
import Grid  from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ViewEvents = (props)=>{
    const [isChanged,setIsChange]= React.useState(false)
    const [servicesList, setServicesList]= React.useState([])
    
    const initialValues ={
        sv_id:'',
        sc_id:props.sc_id,
        type:'',
        name:'',
        price:'',
        description:'',
    }
    const [servicefieldsParent,setservicefieldsParent] = React.useState(initialValues);
    React.useEffect(
        ()=>{axios.get(`http://localhost/mymachAPI/index.php/ServiceCenterCN/getServices/${initialValues.sc_id}`)
            .then(res => {
            console.log("word!"+ res.data);
            setServicesList(res.data)
            console.log('worked fine no problem')
         
            
        })
     .catch(err=>{console.log(err)})
    },[isChanged])
    const updateChangeState =(val)=>{
        console.log("called parent")
        console.log(val +" child val")
        console.log(isChanged+ " parent val")
        setIsChange(val)
    }

    return(
        <Box >
            <h1>Services Dashboard</h1>
            <Grid container>
                
                <Grid xs={12} md={8}>
                    <Card style={{margin:"20px"}}>
                        <CardHeader>
                            Add Service
                        </CardHeader>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" align="center">
                                Our Services
                            </Typography>
                            <TableContainer >
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Service ID</TableCell>
                                            <TableCell >Type</TableCell>
                                            <TableCell >Service Name</TableCell>
                                            <TableCell >Price(Rs)</TableCell>
                                            <TableCell >Description</TableCell>
                                            <TableCell ></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody> 
                                        {
                                            servicesList.map((row)=>{
                                                console.log(row)
                                                return(
                                                    <TableRow key={row.sv_id}>
                                                        <TableCell sx={{ '&:last-child td, &:last-child th': { border: 0 } }} >
                                                            {row.sv_id}
                                                        </TableCell>
                                                        <TableCell > {row.type}    </TableCell>
                                                        <TableCell > {row.serviceName} </TableCell>
                                                        <TableCell >{row.price}</TableCell>
                                                        <TableCell > {row.description}</TableCell>
                                                        <TableCell >
                                                            <Button onClick={()=>setservicefieldsParent({
                                                                sv_id:row.sv_id,
                                                                sc_id:props.sc_id,
                                                                type:row.type,
                                                                name:row.serviceName,
                                                                price:row.price,
                                                                description:row.description})}>Edit</Button> 
                                                        </TableCell>
                                                    </TableRow> 
                                                )   
                                            })
                                        }   
                                        
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid xs={12} md={4}>
                    <AddEvent onChangeService={updateChangeState} isChanged={isChanged} initialValues={servicefieldsParent} sc_id={props.sc_id} />
                </Grid>
            </Grid>
        </Box>
    )
}

const AddEvent = props =>{
    const initialValues ={
        sv_id:'',
        sc_id:props.sc_id,
        type:'',
        name:'',
        price:'',
        description:'',
    }
    const [servicefields,setservicefields] = React.useState(initialValues);
    const [open, setOpen] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    const [openAleart, setOpenAleart] = React.useState(false);
    const alertMessage = React.useRef("")
    React.useEffect(()=>{
        setservicefields(props.initialValues)        
    },[props.initialValues])
    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });
      const handleClick = () => {
        setOpenAleart(true);
      };
    
      const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpenAleart(false);
      };

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleUpdateClose = () => {
        setOpenUpdate(false);
      };
    const handleUpdateOpen = () =>{
        setOpenUpdate(true)
    }


    const setParentChangeStatus=()=>{
        console.log("called chaild")
        props.onChangeService(!props.isChanged )
    }

    const updatefields = (e)=>{
        const name = e.target.name
        const value = e.target.value
        console.log(name)
        setservicefields(
            {
                ...servicefields,
                [name]: value
            }
            
        )                                                                              
    }
    const addService =()=>{
    console.log(JSON.stringify(servicefields))
    axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/addServices/`,JSON.stringify(servicefields))
    .then(res => {
        alertMessage.current="Service added Succesfully"
        handleClick()
      setservicefields(initialValues)
      setParentChangeStatus()
    })
     .catch(err=>{console.log(err)})

    }

    const updateService =()=>{
        handleUpdateClose()
        console.log(JSON.stringify(servicefields))
        axios.post(`http://localhost/mymachAPI/index.php/ServiceCenterCN/updateService/`,JSON.stringify(servicefields))
            .then(res =>{
            console.log(res.data)
            if(res.data && res.data.text === "Success"){
                alertMessage.current="Successfully Updated"
                
                handleClick()
                //alert("Successfully Updated")
                setservicefields(initialValues)
                setParentChangeStatus()
            }
            else{
                alert("Something went wrong")
            }
        }).catch(err=>{
            console.log(err)
        })

    }

    const deleteService =()=>{
        const url= "http://localhost/mymachAPI/index.php/ServiceCenterCN/deleteService/"
        const data= JSON.stringify(servicefields)
        console.log(data)
        axios.post(url, data).then(res =>{
            console.log(res.data)
            if(res.data && res.data.text === "Success"){
                alertMessage.current="Successfully deleted"

                handleClose()
                handleClick()
                setParentChangeStatus()
                clearService()

            }
            else{
                alert("Something went wrong")
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    const clearService =()=>{
        setservicefields(initialValues)

    }

    return(
        <>
            <Card style={{margin:"20px"}}>
                <CardHeader>
                    Add Service
                </CardHeader>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        Add Service
                    </Typography>
                    <FormControl fullWidth>
                        <TextField label="Service ID" name='sv_id' onChange={updatefields} value = {servicefields.sv_id} variant="standard" />
                        <br></br>
                    </FormControl>
                    <FormControl fullWidth variant="standard" >
                        <InputLabel>Service Type</InputLabel>
                        <Select label="Service Type" name ='type' onChange={updatefields}  value = {servicefields.type}>
                            <MenuItem value={"Maintain"}>Maintain</MenuItem>
                            <MenuItem value={"VehicleSpa"}>Vehicle Spa</MenuItem>
                            <MenuItem value={"Inspection"}>Inspection</MenuItem>
                            <MenuItem value={"Breakdown"}>Breakdown</MenuItem>
                        </Select>
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Service Name" name='name' variant="standard" onChange={updatefields} value = {servicefields.name}/>
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Price(Rs)" variant="standard" name='price' onChange={updatefields} value = {servicefields.price}/>
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth>
                        <TextField label="Description" variant="standard" name='description' onChange={updatefields} value = {servicefields.description}/>
                        <br></br>
                    </FormControl>

                    <FormControl fullWidth >
                    <div style={{"width":"100%","textAlign":"center"}}>
                        <ButtonGroup aria-label="vertical">
                            <Button color='success' onClick={addService} variant='outlined' >Add</Button>
                            <Button  variant='outlined'  onClick={handleUpdateOpen} >Update</Button>
                            <Button color='error' variant='outlined' onClick={handleClickOpen}> Delete</Button>
                            <Button color='warning' variant='outlined' onClick={clearService}>Clear</Button>
                        </ButtonGroup>
                    </div>
                    </FormControl>

                </CardContent>
            </Card>
            <Dialog
                open={openUpdate}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle> Do you want to update this service? </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button color='warning'  onClick={updateService}>Update</Button>
                    <Button   onClick={handleUpdateClose}>Cancel</Button>
                    
                </DialogActions>
            </Dialog> 
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description">
                <DialogTitle> Do you want to delete this service? </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        
                    </DialogContentText>
                </DialogContent>
                <DialogActions>

                    <Button color='error'  onClick={deleteService}>Delete</Button>
                    <Button  onClick={handleClose}>Cancel</Button>
                   
                </DialogActions>
            </Dialog>

            <Snackbar open={openAleart} autoHideDuration={2000} onClose={handleClose2}>
                
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                    {alertMessage.current}
                </Alert>
            </Snackbar>
        </>
    )
}

export default ViewEvents
