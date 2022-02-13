import React from "react"; 
import { Link } from "react-router-dom"; 

function Navbar(){
    return(
        <>
            <nav>
                <a href='http://cupokoffi8.github.io/the-website' className='logo'>
                    <h1>Group 8</h1>  
                </a>
                <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 
                <ul className='menu'>
                    <li><a href='http://cupokoffi8.github.io/the-website' className='active'>Home</a></li>
                    <li><a href='http://cupokoffi8.github.io/the-website' className='active'>About</a></li>
                    <li><Link to='/' className='active'>Projects</Link></li> 
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 