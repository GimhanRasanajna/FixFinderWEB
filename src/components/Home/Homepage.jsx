import React from 'react'

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import anime from 'animejs';
import './HomepageStyle.css';
import Login from '../Main/Login';
import Qrbtn from './Qrbtn'

//images
import PhoneLeft from '../../images/phoneLeft.png';
import PhoneRight from '../../images/phoneRight.png';
import Vector from '../../images/Vector.png';
import myVideo from '../../Video/car.mp4';
import logoNew from '../../images/logoNew.png';

//icons
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Avatar from '@mui/material/Avatar';

import { Link } from 'react-router-dom'
// ***************************


// **************************
export default function Homepage() {
  


      // **************console code here*************
      useEffect(() => {
        consoleText(["FixFinder", "Get more", "Join us now"], "text", [
          "tomato",
          "rebeccapurple",
          "lightblue"
        ]);
      }, []);
    
      function consoleText(words, id, colors) {
        if (colors === undefined) colors = ["#fff"];
        var visible = true;
        var con = document.getElementById("console");
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id);
        if (target) {
          target.setAttribute("style", "color:" + colors[0]);
          window.setInterval(function () {
            if (letterCount === 0 && waiting === false) {
              waiting = true;
              target.innerHTML = words[0].substring(0, letterCount);
              window.setTimeout(function () {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute("style", "color:" + colors[0]);
                letterCount += x;
                waiting = false;
              }, 1000);
            } else if (letterCount === words[0].length + 1 && waiting === false) {
              waiting = true;
              window.setTimeout(function () {
                x = -1;
                letterCount += x;
                waiting = false;
              }, 1000);
            } else if (waiting === false) {
              target.innerHTML = words[0].substring(0, letterCount);
              letterCount += x;
            }
          }, 120);
          window.setInterval(function () {
            if (visible === true) {
              con.className = "console-underscore hidden";
              visible = false;
            } else {
              con.className = "console-underscore";
              visible = true;
            }
          }, 400);
        }
      }
    
// **************************
    
        const [isSticky, setSticky] = useState(false);
    
        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);
    
        const handleScroll = () => {
            if (window.pageYOffset > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
         
       
       

        //************************* */
   
      
        //************************** */
        //    ----------------------
        React.useEffect(() => {
            AOS.init({
              duration: 3000,
            });
          }, []);
        //    ----------------------
          
        // *************************
        const backgroundStyle = {
          background: "linear-gradient(174.87deg, #7942D5 36.02%, rgba(137, 93, 211, 0) 168.78%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          textFillColor: "transparent",
        };
        // *************************
        return (
            <>
            {/* ------------ ------------- */}
            <header className={isSticky ? "sticky" : ""}>
            <img src={logoNew} alt="" style={{ width: '50px', height: 'auto', transform: 'scaleX(-1)' }} />
                <a href="/" className="logo">FixFinder</a>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href={"/aboutus"}>About Us</a></li>            
                    {/* <li><a href={"/dashboard/:para"}>Services</a></li> */}
                    <li><a href={"/sign/Login"}>Log in</a></li>
                    <li><a href={"/sign/reg"}>Sign up</a></li>
                    {/* <li><a href={"/admin"}>Admin Dashbaord</a></li>
                    <li><a href={"/webservice"}>web services</a></li> */}
                    
                </ul>
            </header>
            <section class="banner">
            
            <video src={myVideo} autoPlay loop muted playsInline className='myVideo' controls={false}></video>
           
            </section>
        
            {/* ----------------------- ------------- */}
               {/* console code here */}
               <div className="console-container">
                <span id="text"></span>
                <div className="console-underscore" id="console">
                  &#95;
                </div>
              </div>
            {/* ---------------------------------------- */}
            {/* ------------ ------------- */}
        
            {/* ------------ ------------- */}
            <div className="container">
      <img
        src={PhoneLeft}
        className="img_one"
        data-aos="fade-down"
        data-aos-delay="0"
        alt="Left phone"
      />
      <img
        src={PhoneRight}
        className="img_two"
        data-aos="fade-up"
        data-aos-delay="0"
        alt="Right phone"
      />
      <img
        src={Vector}
        className="bcImg"
        data-aos="zoom-in"
        data-aos-delay="3000"
        alt="Background vector"
      />
    </div>
            {/* ------------ ------------- */}

            {/* ------------ ------------- */}
            {/* ******SCAN QR CODE******* */}
            <div className="main" style={{ width: 670, height: 610,}}>
                < div className='qrTxtBox'>
                <p className='appTxt1'>Get the</p>
                <p className='appTxt2'>FixFinder App</p>
                <p className='appTxt3'>now!</p>
                <p className='appTxt4'>Available for Android and Apple users.</p>
                </div>
                {/* ********QR code Width Button******* */}
                <div>
                <a className='dnBtn' href={"/Qrbtn"}>Download now</a>
    </div>
                {/* ********************************************** */}
                

              </div> 
      
      <div className="boxOne" data-aos="fade-down" data-aos-delay="0">
        <p id="boxTopic1" className="Topic" data-aos="fade-up" data-aos-delay="0">Request Service</p>
        <p id="boxTence1" style={backgroundStyle} data-aos="fade-up" data-aos-delay="0">To request service from a garage</p>
        <Avatar className="animate-avatar"  sx={{ bgcolor: 'common.white', color: '#000', marginLeft:'435px',marginTop:'-30px'}}>
        <ArrowForwardIcon  />
      </Avatar>
      </div>
      <div className="boxTwo"  data-aos="fade-left" data-aos-delay="0">
        <p id="boxTopic2" className="Topic"  data-aos="fade-left" data-aos-delay="0">Find Nearby Garages</p>
        <p id="boxTence2" style={backgroundStyle}  data-aos="fade-left" data-aos-delay="0">Use an app to find nearby garages based <br /> on your location.</p>
        <Avatar className="animate-avatar"  sx={{ bgcolor: 'common.white', color: '#000', marginLeft:'420px',marginTop:'210px'}}>
        <ArrowForwardIcon />
      </Avatar>
      </div>
      <div className="boxThree">
        <p id="boxTopic3"  style={backgroundStyle}data-aos="fade-left" data-aos-delay="0">Ease of use </p>
        <p id="boxTence3" className="Topic">Use an app to find nearby garages based <br /> on your location.</p>
        <Avatar className="animate-avatar"  sx={{ bgcolor: 'common.white', color: '#000', marginLeft:'420px',marginTop:'210px'}}>
        <ArrowForwardIcon />
      </Avatar>
      </div>
      <div className="boxFour">
        <p id="boxTopic4" style={backgroundStyle}  data-aos="fade-up" data-aos-delay="0">Online Payment</p>
        <p id="boxTence4"  data-aos="fade-up" data-aos-delay="0">Easily make online payments <br />  using a app</p>
        <Avatar className="animate-avatar"  sx={{ bgcolor: 'common.white', color: '#000', marginLeft:'370px',marginTop:'5px'}}>
        <ArrowForwardIcon />
      </Avatar>
      </div>
      <div className="boxFive"  data-aos="fade-up" data-aos-delay="0">
        <p id="boxTopic5"  data-aos="fade-down" data-aos-delay="0">Booking Service</p>
        <p id="boxTence5" style={backgroundStyle}  data-aos="fade-down" data-aos-delay="0">Book services for a service center easily <br /> and quickly using an app.</p>
        <Avatar className="animate-avatar"  sx={{ bgcolor: 'common.white', color: '#000', marginLeft:'490px',marginTop:'268px'}}>
        <ArrowForwardIcon />
      </Avatar>
      </div>
       
            {/* ------------ ------------- */}

            {/* ------------ ------------- */}
            

            <div className='topicDiv'>
              {/* ************************** */}

             

              {/* ************************ */}
            <div class="btmbox1">
              <p className='mainTopic'>Account 
                 Management</p>
               <p className='Topicdata'>Service centers can create <br />
                  an account on the Fixfinder
                  website to manage their 
                   profile.</p>
                   <p className='link'>Learn more</p>  

            </div>
            <div class="btmbox2">
              <p className='mainTopic'>Service <br />
                 Listing</p>
              <p  className='Topicdata'>On Fixfinder, service
                 centers can list their
                  services with pricing and
                   availability information.</p>
                   <p  className='link'>Learn more</p>  
            </div>
            <div class="btmbox3">
              <p className='mainTopic'>Booking
                 Management</p>
                 <p  className='Topicdata'>Service centers can
                    handle bookings and
                    accept/decline
                    requests based on
                    availability using
                    Fixfinder.</p>
                    <p  className='link'>Learn more</p>  
            </div>

            
            </div>
            <div className='footer'>
              
            </div>
            {/* ------------ ------------- */}
            
            </>
        );
    }
    
   
    

