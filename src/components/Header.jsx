import React from "react"
import portrait from "../assets/portrait.png"
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Header(){

return (
    <div className="header">
        <img className="portrait-image"src={portrait} alt="business portrait"></img>
        <h3 className="name">Arreya Ahrom</h3>
        <p className="description">Frontend Developer</p>
        <div className="socials">
        <button className="email--button"><MailOutlineIcon/><a href="mailto:ahromarreya@gmail.com"  target="_blank">Email</a></button>
        <button className="linkedin--button"><LinkedInIcon/><a href="https://www.linkedin.com/in/arreyaahrom/" target="_blank">LinkedIn</a></button>
        </div>
    </div>

);
}