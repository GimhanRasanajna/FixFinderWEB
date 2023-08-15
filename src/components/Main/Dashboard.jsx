import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import BreakdownReqTable, { ServiceRequestTable } from '../Sub/ServiceReq';
import AddEvent from '../Sub/AddService';

//Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CarCrashIcon from '@mui/icons-material/CarCrash';
import MenuIcon from '@mui/icons-material/Menu';
import FeedbackIcon from '@mui/icons-material/Feedback';
import LogoutIcon from '@mui/icons-material/Logout';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';


// import MenuIcon from '@mui/icons-material/Menu';

import axios  from 'axios'
import { useParams } from "react-router-dom";

import ReservationPage from './ReservationPage'
import BreakdownReqPage from './BreakdownReqPage';
import Feedback from '../Sub/Feedback';
import { useEffect } from 'react';
import { useState } from 'react';
import Homepage from '../Home/Homepage';

//images
import logo from '../../images/logo.png';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
  
  const { windows } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const  [pageLoad,setPageLoad]= useState(false)
    useEffect(()=>{
    },[pageLoad])
    
 const sc_id=localStorage.getItem("servieCenterId")
  
  const checkUser = ()=>{
    console.log(isNaN(sc_id))
    if(sc_id!= null ){
      // alert("Login Required")
      // window.location.href ="http://localhost:3000/"
    }else{
      alert("Login Required")
       window.location.href ="http://localhost:3000/"
    }
   
  }

  useEffect(()=>{
    checkUser()
  },[sc_id] )

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // text styles
  const styles = {
    feedbacksText: {
      color: '#ffffff',
      
     
      
    }
  };

  const drawer = (
    <div style={{"backgroundColor":'#000000',height:720}}>
       <Toolbar style={{backgroundColor:'red',marginBottom:30}}>
          <IconButton
            color="#ffffff"
            aria-label="open drawer"
            edge="start"
          >
            {/* <MenuIcon /> */}
            <img src={logo} alt="" style={{ width: '50px', height: 'auto',marginBottom:'5px' }} />
          </IconButton>
          <span component="div" style={{fontWeight:'bolder',fontSize:28,
                  fontFamily: "'Signika Negative', sans-serif",color:'#ffffff'}}>
           FixFinder
          </span>
        </Toolbar>
      <Divider />
      <List>
        
        {[
        {text:'Home',icon:<DashboardIcon style={{color:'#ffffff'}}/>},
        {text:'Dashboard',icon:<DashboardIcon style={{color:'#ffffff'}}/>},
        {text:'Reservations',icon:<AccountTreeIcon style={{color:'#ffffff'}}/>},
        {text:'Breakdown Request',icon:<CarCrashIcon style={{color:'#ffffff'}}/>},
        {text:'Services',icon:<MiscellaneousServicesIcon style={{color:'#ffffff'}}/>},
        {text:'Feedbacks',icon:<FeedbackIcon style={{color:'#ffffff'}}/>}
        
        ].map((item, index) => (
          <ListItem key={index} disablePadding>
            {/* <a href={"./"+item.text}> */}
            <ListItemButton component={'a'} href={"./"+item.text} sx={{ 
              '&:hover': {
                backgroundColor: 'red',
                width:500,
                borderRadius:2,
                transition:1,
                width:350
                
                
              }
             }}>
              
              <ListItemIcon>
              {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} style={styles.feedbacksText}/>
            </ListItemButton>
            {/* </a> */}
          </ListItem>
        ))}
        <ListItemButton onClick={()=>{
              axios.get('http://localhost/mymachAPI/index.php/ServiceCenterCN/destroyLogin').then(res=>{
                if(res.status==200){
                  localStorage.removeItem('servieCenterId');
                    alert(res.data)
                    //localStorage.setItem('servieCenterId', null)
                    window.location.href ="http://localhost:3000/" 
                    
                }else{
                  alert("Logout Fail")
                }
                 
              }).catch(err=>{

              })
              
            }}>
            
              <ListItemIcon style={{marginTop:295}}>
                <LogoutIcon style={{color:'#ffffff'}}></LogoutIcon>
              </ListItemIcon>
              <ListItemText primary={"Logout"}style={styles.feedbacksText}/>
            </ListItemButton>
            
      </List>
      <Divider />
            <ListItemButton onClick={()=>{
              axios.get('http://localhost/mymachAPI/index.php/ServiceCenterCN/destroyLogin').then(res=>{
                if(res.status==200){
                  localStorage.removeItem('servieCenterId');
                    alert(res.data)
                    //localStorage.setItem('servieCenterId', null)
                    window.location.href ="http://localhost:3000/" 
                    
                }else{
                  alert("Logout Fail")
                }
                 
              }).catch(err=>{

              })
              
            }}>
            
              <ListItemIcon style={{marginTop:295}}>
                <LogoutIcon style={{color:'#ffffff'}}></LogoutIcon>
              </ListItemIcon>
              <ListItemText primary={"Logout"} style={{color:'#ffffff',marginTop:300}}/>
            </ListItemButton>
            
      </div>
  );

  const container = windows !== undefined ? () => windows().document.body : undefined;
  let {para} = useParams();

  return (
    //red box
    <Box sx={{ display: 'flex',paddingTop:5,paddingLeft:16}}>
       
      <CssBaseline />

      {/* <AppBar style={{backgroundColor:'yellow'}}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="yellow"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
           Service Center Dashboard 
           
          </Typography>
        </Toolbar>
      </AppBar> */}

      <Box
        
        component="nav"
        style={{
          height:"100%",
          backgroundColor:'red'
          
        }}
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
        aria-label="mailbox folders"
      >
        <div>
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, 
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
        </div>
        
      </Box>
      {/* //green box */}
      <Box
        style={{backgroundColor:'white', borderRadius:20,width:1050,height:'auto',paddingLeft:25,paddingRight:25,paddingBottom:25,
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
      }}
        component="main"
        // sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        
        {
            para    === "Services" ?  <AddEvent sc_id={sc_id}></AddEvent>
            : para  === "Reservations" ? <ReservationPage sc_id={sc_id}/> 
            : para  ==="Breakdown Request" ? <BreakdownReqPage sc_id={sc_id} /> 
            : para  === "Feedbacks" ? <Feedback sc_id={sc_id}/>
            : <Dashboard sc_id={sc_id}></Dashboard>
        }  
        
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {

  windows: PropTypes.func,
};


const Dashboard =(props) => {
  const  [pageLoad,setPageLoad]= useState(false)
    useEffect(()=>{
        // console.log(pageLoad + "test")
    },[pageLoad])
  return(
  <><h1>Home Dashboard</h1>
    <div> 
      <Typography variant="h6" noWrap component="div">
           Upcoming Breakdown Requests
          </Typography><br></br>
      <BreakdownReqTable sc_id={props.sc_id} status="Pending" pageLoad={pageLoad} setPageLoad={setPageLoad} ></BreakdownReqTable><br></br></div>
    <div> 
      <Typography variant="h6" noWrap component="div">
           Upcoming Reservations
          </Typography><br></br>
          <ServiceRequestTable sc_id={props.sc_id} status="Pending" pageLoad={pageLoad} setPageLoad={setPageLoad}> </ServiceRequestTable><br></br></div>
  </>
  )
}
export default ResponsiveDrawer;
