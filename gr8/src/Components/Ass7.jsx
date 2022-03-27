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
            The Pathosense software boasts an <u>efficient algorithm</u> that uses <b>machine learning</b>
            to analyze sentiment and <b>numerically quantify emotions</b>. The results are provided rapidly 
            thanks to our team of <b>dedicated team of engineers</b> who will also continuously <b>optimize the program</b> 
            over its <u>long lifespan</u>. To keep customers happy and improve the <u>user experience</u>,
            we will strive to add <b>quality of life changes</b> and <b>minimize intrusive advertisements</b>. 
             </p> 
             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features6; 
