import React from "react"; 
import img from "../Images/Pathosense.jpg"; 

function Features4(){
    return(
        <div id="features4"> 
        <div className='features-text'>
            <h1 id="title">Intellectual Properties</h1> 
            <hr className="divider" /> 
            
            <br /> 

            <h3 id="subject">Trademarks</h3> 

            <p id="description">
            When working with a unique software like Pathosense, a Trademark would be ideal when it 
            comes to protecting a design or logo that differentiates our products from others in 
            the same industry. <br /> 
            <br />
            A notable feature that should be trademarked would be our company logo. This is because 
            it can be marked on various items to signify them as being under our brand. An example of 
            this is a pen with a company's logo on it. While that company may not manufacture pens, 
            the fact that their logo is on it associates it with that brand. 
            </p> 

            <h id="topic">Pathosense Logo:</h>
            <br /> 
            <img className="img3" src={img} /> 

            <br /> 

            <h3 id="subject">Patents</h3> 

            <p id="description">
            A patent is of essence in the scenario that we qualify our software's architecture as 
            a unique, transformative design that is noticeably dissimilar to competitors. <br /> 
            <br /> 
            With Pathosense, it would be ideal to acquire a patent for our source code, assuming its functionality 
            acheives a unique status that allows it to outshine its competitors. 
            </p> 

            <br /> 

            <hr /> 
        
                
            </div> 
        </div> 
    )
}

export default Features4; 
