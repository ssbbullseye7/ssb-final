import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import Feature from '../Components/Feature/Feature';
import Classroom from '../Components/Classroom/Classroom';
import Aboutceo from '../Components/Aboutceo/Aboutceo';
import Point from '../Components/Point/Point';
import Testimonials from '../Components/Testimonials/Testimonials';
import Employee from '../Components/Employee/Employee';
import Blogs from '../Components/Blogs/Blogs';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';
import "../App.css"
import { useLocation } from 'react-router-dom';
import Enroll from './Enroll';
function Container() {
 const [enroll,setenroll]=useState(false);
  return (
    <div>
            <Navbar enroll={enroll} setenroll={setenroll}/>
            {enroll&&<Enroll/>}
            {!enroll&&<>
              <Hero enroll={enroll} setenroll={setenroll}/>
              <Aboutceo />
        <Feature  enroll={enroll} setenroll={setenroll}/>
        <Testimonials/>
        {/* <Classroom enroll={enroll} setenroll={setenroll}/> */}
        {/* <Point/> */}
        
      
        {/* <Employee/> */}
        <Blogs/>
        <Contact/>
            </>}
       
        {/* <Enroll/> */}
        <Footer/>

    </div>
  )
}

export default Container