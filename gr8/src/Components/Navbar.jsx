import React from "react"; 
import { Link } from "react-scroll"; 

function Navbar(){
    return(
        <>
            <nav>
                <a href='http://cupokoffi8.github.io/the-website' className='logo'>
                    <h1 className="test">Group 8</h1>  
                </a>
                <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 
                <ul className='menu'>
                    <li><a href='http://cupokoffi8.github.io/the-website' className='active'>Home</a></li>
                    <li><Link to='features' className='active' smooth={true} duration={1000}>Needs Assessment</Link></li> 
                    <li><Link to='features2' className='active' smooth={true} duration={1000}>Problem Formulation</Link></li>
                    <li><Link to='features3' className='active' smooth={true} duration={1000}>Solution Development</Link></li>
                    <li><Link to='features4' className='active' smooth={true} duration={1000}>Intellectual Properties</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 