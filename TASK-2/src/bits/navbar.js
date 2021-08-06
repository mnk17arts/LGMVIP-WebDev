import React from 'react'
import './navbar.css'

const Navbar = ({onButtonSubmit}) => {
    return (
        <div className="nb">
            <div className="navbar" id="navbar">
                {/* eslint-disable-next-line  */}
                <a href="" className="messi"> messi<span>.</span>io </a>
                <button href="#" className="getusers" onClick={onButtonSubmit}><h6>GET USERS</h6></button>  
            </div>
        </div>
    );
};

export default Navbar