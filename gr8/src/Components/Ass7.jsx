import React from "react"; 
import img1 from "../Images/Morph/morph.png"; 

function Features6(){
    return(
        <div id="features6"> 
        <div className='features-text'>
            <h1 id="title">Synthesis</h1> 
            <hr className="divider" /> 
            
            <br /> 

            <h3 id="subject">Improvement through Recombination</h3> 

            <p id="description">
            While the intended function of Pathosense has already been identified, its methodology 
            has yet to be perfected. However, by referring to previous design implementations, improvements 
            can be made by incorporating the most important elements from each revision in order to 
            piece together a more solidified solution. 
             </p> 

             <br /> 

             <h3 id="subject">Morphological Chart</h3> 

             <img className="img2" src={img1} /> 

             <br /> 

            <p id="description">
            Use machine learning to analyze sentiment and numerically quantify emotions. Dedicated team of 
            engineers will continuously optimize the program. To keep customers happy, we will strive to add 
            quality of life changes and minimize intrusive advertisements. 
             </p> 

             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features6; 
