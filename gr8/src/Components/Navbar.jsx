import React from "react"; 
import { Link } from "react-scroll"; 
import img from "../Images/Pathosense-Bar.png"; 

function Navbar(){
    return(
        <>
            <nav>
                <a href='http://cupokoffi8.github.io/the-website' className='logo'>
                    <img className="test" src={img} /> 
                </a>
                <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 
                <ul className='menu'>
                    {/* <li><a href='http://cupokoffi8.github.io/the-website' className='active'>Home</a></li> */}
                    <li><Link to='features' className='active' smooth={true} duration={1000}>Needs Assessment</Link></li> 
                    <li><Link to='features2' className='active' smooth={true} duration={1000}>Problem Formulation</Link></li>
                    <li><Link to='features3' className='active' smooth={true} duration={1000}>Solution Development</Link></li>
                    <li><Link to='features4' className='active' smooth={true} duration={1000}>Intellectual Properties</Link></li>
                    <li><Link to='features5' className='active' smooth={true} duration={1000}>Abstraction and Modeling</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 