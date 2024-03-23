import React, { useEffect, useState } from 'react'
import "./style.css"
import im13 from "../../im13.jpg"
import im10 from "../../im10.jpg"
import im12 from "../../im12.jpg"
import { SlMouse } from "react-icons/sl";
import { FaPlay } from "react-icons/fa";
const imagesArray = [im12, im10,im13];
function Aboutceo() {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesArray.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className='About'  id='about'>
   
   <div className='About-img'>
   {imagesArray.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`image test ${index === currentImageIndex ? "visible" : "hidden"}`}
          />
        ))}
   
   </div>
   <div className='About-content'>
    <div className='About-content-header'>About Us</div>
    <div className='About-content-content'>At SSB BullsEye, we excel in guiding candidates toward success in SSB & NDA exams. With experienced mentors and a proven track record, our tailored approach ensures comprehensive preparation. We equip you with skills and confidence needed to conquer these rigorous assessments. The SSB training modules have been carefully designed keeping the cognitive and leadership abilities of the aspirants.
</div>
   </div>
    
</div>
  )
}

export default Aboutceo