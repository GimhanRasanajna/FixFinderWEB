import { Box } from "@mui/material";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Typography from "@mui/material/Typography";
import "./singleRVP.css";


import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

const SingleReservationPageView =(props)=>{
    const style = {
        width: '100%',
        maxWidth: 360,
        bgcolor: 'background.paper',
      };
    return(
    <Box>
        <Grid container spacing={2}>
                <Grid xs={12}>
                    <br/>
                    <Typography gutterBottom variant="h5" component="div" align="center">
                        Reservation View
                    </Typography>
                </Grid>
                <Grid xs={12} md={4}>
                    <Card varient="outlined">
                    <List sx={style} component="nav" aria-label="mailbox folders">
                        <ListItem button>
                            <div className="list-text-container">
                            <ListItemText primary="Reservation ID" classes={{
                                             primary:'minwith-list-text'
    
                                     }}/>
                            </div>
                            <div className="list-text-container">
                            <ListItemText primary="r1" />
                            </div>
                        </ListItem>
                        <Divider />
                        <ListItem button divider>
                        <div className="list-text-container">
                            <ListItemText primary="Service" classes={{
                                             primary:'minwith-list-text'
    
                                     }}/>
                        </div>
                        <div className="list-text-container">
                            <ListItemText primary="Maintain" />
                            </div>
                        </ListItem>
                        <ListItem button divider>
                        <div className="list-text-container">
                            <ListItemText primary="Customer Name"className="minwith-list-text"/>
                        </div>
                        <div className="list-text-container">
                            <ListItemText primary="Akila"/>
                        </div>
                        </ListItem>
                        <ListItem button divider>
                        <div className="list-text-container">
                        <ListItemText primary="Contact No"/>
                        </div>
                        <div className="list-text-container">
                            <ListItemText primary="Akila"/>
                        </div>
                        </ListItem>
                        <Divider light />
                        <ListItem button divider>
                        <div className="list-text-container">
                            <ListItemText primary="Time" />
                        </div>
                        <div className="list-text-container">
                            <ListItemText primary="10.50"/>
                        </div>
                        </ListItem>
                        <ListItem button divider>
                        <div className="list-text-container">
                            <ListItemText primary="Date" />
                        </div>
                        <div className="list-text-container">
                            <ListItemText primary="2021-11-11"/>
                        </div>
                        </ListItem>

                    </List>
                    <ButtonGroup
                        aria-label="vertical outlined button group"
                                >
                        <Button variant="contained" color="success">Accept</Button>
                         <Button variant="contained" color="error" >Decline</Button>
                         <Button variant="contained">Back</Button>
                    </ButtonGroup>
                    </Card>
                </Grid>
        </Grid>
    </Box>
    );

}
export default  SingleReservationPageView
