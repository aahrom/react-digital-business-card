import React from "react"
import portrait from "../assets/portrait.png"

export default function Header(){

return (
    <div className="header">
        <img className="portrait-image"src={portrait} alt="business portrait"></img>
        <h3 className="name">Arreya Ahrom</h3>
        <p className="description">Frontend Developer</p>
        <div className="socials">
        <button>Email</button>
        <button>LinkedIn</button>
        </div>
    </div>

);
}