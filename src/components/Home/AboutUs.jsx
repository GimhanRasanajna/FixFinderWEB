import React from 'react'
import Navbar from './Navbar';
import './HomepageStyle.css';

function AboutUs() {
  return (
        <>
         <Navbar></Navbar>

            <div className="main" style={{ width: 670, height:100,}}>
                < div className='qrTxtBox'>
                <p className='appTxt1'>AboutUs</p>
              </div>
            </div> 

        <div style={{
            width:'100%',
            height:450,
           
            paddingLeft:150,
            paddingRight:150,
            display:'flex'
            }}>
            <div style={{
                marginTop:50,
                width:1300,
                height:300,
                // backgroundColor:'blue',
                borderRadius:25,
                borderWidth:0.5,
                borderColor:'D9D9D9'
            }}>
                <p>We are a user-friendly platform connecting vehicle owners with trustworthy garages and service centers. Our mobile app uses location services to find nearby options. Users can explore detailed profiles, including services, ratings, and reviews. Our web platform empowers service centers to showcase their expertise and efficiently manage service requests. Experience convenience and reliability in finding automotive services with us.</p>
            </div>
          
            
        </div>
       </>
  )
}

export default AboutUs;