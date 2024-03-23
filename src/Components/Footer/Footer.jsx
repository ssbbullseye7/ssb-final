import React from 'react'
import "./style.css"
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosGlobe } from "react-icons/io";
import { SiGooglemeet } from "react-icons/si";
import { BiLogoZoom } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import svglogo from "../../Primarygreen.svg";
import { FaLinkedinIn } from "react-icons/fa";
import tnc from "../../tnc.pdf";
import rnc from "../../rnc.pdf"
function Footer() {
  return (
    <div className='Footer'>
        <div className='footer-container'>
         <div className='logo-container'>
         {/* <img src={svglogo} alt="" width={200}/> */}
            <div className='logo-quote'>Master Your SSB & NDA Exams!</div>
            <div className='logo-icon-container'>
                <div className='logo-icon'><a href="https://www.facebook.com/SSBBullsEye" target="_blank" rel="noopener noreferrer"><FaFacebookF style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://twitter.com/ssbbullseye" target="_blank" rel="noopener noreferrer"><FaTwitter style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.youtube.com/channel/UCd1VO9G4BzNXmKFNHTGkK4w" target="_blank" rel="noopener noreferrer"><FaYoutube style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.instagram.com/ssbbullseye/" target="_blank" rel="noopener noreferrer"><FaInstagram style={{    color: "darkolivegreen"}}/></a></div>
                <div className='logo-icon'><a href="https://www.linkedin.com/company/ssbbullseye/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FaLinkedinIn style={{    color: "darkolivegreen"}}/></a></div>
            </div>
         </div>
         <div className='Contact-Us'>
            <div className='Contact-Us-header'>Policies</div>
            <div className='Contact-Us-content'>
            {/* We are always there to help you with your queries. Please feel free to contact us. */}
            <div><a href={tnc} className='tnc' target="_blank" rel="noopener noreferrer">Terms and Conditions</a></div>
            <div><a href={rnc}  className='tnc' target="_blank" rel="noopener noreferrer">Refunds / Cancellations Policy</a></div>
            {/* <div> < MdEmail style={{height:"15px",width:"15px"}}/> support@ssbbullseye.com</div> */}
            </div>
         </div>
         <div className='Contact-Us'>
            <div className='Contact-Us-header'>Contact Us</div>
            <div className='Contact-Us-content'>
            {/* We are always there to help you with your queries. Please feel free to contact us. */}
            <div> <FaPhoneAlt style={{height:"15px",width:"15px"}}/> +(91) 97427 53113</div>
            <div> <IoLogoWhatsapp  style={{height:"15px",width:"15px"}}/> +(91) 83103 89908</div>
            <div> < MdEmail style={{height:"15px",width:"15px"}}/> support@ssbbullseye.com</div>
            <div> <IoIosGlobe style={{height:"15px",width:"15px"}}/> www.ssbbullseye.com</div>
            </div>
         </div>
         <div className='Contact-Us'>
            <div className='Contact-Us-header'>Online Mentoring Session</div>
            <div className='Contact-Us-content'>
            The online mentoring sessions will be conducted On
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> <SiGooglemeet style={{height:"25px",width:"25px"}}/> Google Meet</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px"}}> < BiLogoZoom  style={{height:"30px",width:"30px"}}/> Zoom</div>
    
            </div>
         </div>
        </div>
        <div className='copyright'>
            Copyright © 2019 - 2023 , ssbbullseye.com - All Rights Reserved.
          
        </div>
    </div>
  )
}

export default Footer