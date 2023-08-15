import React from 'react'
import { useState, useEffect } from 'react';
import logoNew from '../../images/logoNew.png';
import './HomepageStyle.css';
function Navbar() {
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
    const backgroundStyle = {
        background: "linear-gradient(174.87deg, #7942D5 36.02%, rgba(137, 93, 211, 0) 168.78%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
      };
     
  return (
    <>
    <header className={isSticky ? "sticky" : ""}>
    <img src={logoNew} alt="" style={{ width: '50px', height: 'auto', transform: 'scaleX(-1)' }} />
    <a href="/" className="logo">FixFinder</a>
    <ul>
        <li><a href="/">Home</a></li>
        <li><a href={"/aboutus"}>About Us</a></li>
        <li><a href={"/sign/Login"}>Log in</a></li>
        <li><a href={"/sign/reg"}>Sign up</a></li>
       
        
        
        
    </ul>
</header>
{/* <li><a href={"/dashboard/:para"}>Services</a></li> */}
</>
  )
}

export default Navbar