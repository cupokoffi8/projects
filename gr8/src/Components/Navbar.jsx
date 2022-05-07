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
                    <li><Link to='features6' className='active' smooth={true} duration={1000}>Synthesis</Link></li> 
                    <li><Link to='features7' className='active' smooth={true} duration={1000}>Ethics and Liability</Link></li> 
                    <li><Link to='features8' className='active' smooth={true} duration={1000}>Design Analysis</Link></li> 
                    <li><Link to='features9' className='active' smooth={true} duration={1000}>Design Diagrams</Link></li> 
                    <li><Link to='features10' className='active' smooth={true} duration={1000}>Gantt Chart</Link></li> 
                    <li><Link to='features10' className='active' smooth={true} duration={1000}>Senior Design Plan</Link></li> 
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 