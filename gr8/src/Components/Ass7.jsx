import React from "react"; 
import img1 from "../Images/Morph/new-morph.png"; 

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

             <p id="description">
            The Morphological Chart below effectively lays out the most important characteristics of our 
            software, and allows us to rennovate our initial solution development process based on changes 
            and experiences gained through the inevitable passage of time and subsequent effort conducted by 
            our team. 
             </p>

             <br /> 

             <h3 id="subject">Morphological Chart</h3> 

             <img className="img2" src={img1} /> 

             <br /> 

            <p id="description">
            The Pathosense software boasts an efficient algorithm that uses machine learning
            to analyze sentiment and numerically quantify emotions. The results are provided rapidly 
            thanks to our team of dedicated team of engineers who will also continuously optimize the program 
            over its long lifespan. To keep customers happy and improve the user experience,
            we will strive to add quality of life changes and minimize intrusive advertisements. 
             </p> 
             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features6; 
