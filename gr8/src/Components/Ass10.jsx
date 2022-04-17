import React from "react"; 
import img1 from "../Images/Design/Team.png"; 
import img2 from "../Images/Design/Factors.png";

function Features8(){
    return(
        <div id="features8"> 
        <div className='features-text'>
            <h1 id="title">Design Analysis</h1> 
            <hr className="divider" /> 
            
            <br /> 

            <h3 id="subject">Revised KT Analysis</h3> 

            <p id="description">
            After narrowing down our design path with the previously completed Morphological Chart, we 
            can revisit the KT Analysis tables that were done at the beginning of our Problem Formulation 
            process: 
             </p> 

            <br /> 

            <p id="description">
             Alternatives to the machine learning based approach to sentiment analysis of PathoSense include:
             Corpus Based (Statistical): Label sentences as positive or negative based on the frequency of emotional language.
             Corpus Based (Semantic): Assign values to individual words based on their synonyms and antonyms.
             Review Sites: Use data from review sites instead of analyzing consumers directly.
             Dictionary Based: Create a dictionary from online sources and expand until no other words can added.
             </p> 

            <br /> 
             <p>
                 tables will go hereeeeee
             </p>

             <br /> 

             <h3 id="subject">Weighing Design Factors</h3> 

            <p id="description">
            Using Microsoft Excel, a set of tables collecting preferences from each of our teammates was 
            fabricated with the goal of supplying the most common input (among the teammates) to a parent 
            table that quantitatively provides the most important and least important factors with respect 
            to the development of Pathosense. 
             </p> 

             <br /> 

             <img className="img2" src={img1} /> 

             <br /> 

             <p id="description">
            The parent table displays the design goals ranked based on their importance, where A column goal 
            is more (1), equal (0.5), or less (0) important than a row goal depending on the number inserted. 
            </p> 

            <br/> 

            <img className="img2" src={img2} /> 

             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features8; 
