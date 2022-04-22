import React from "react"; 
import img1 from "../Images/Design/DesignTree.jpg"; 

function Features9(){
    return(
        <div id="features9"> 
        <div className='features-text'>
            <h1 id="title">Design Diagrams</h1> 
            <hr className="divider" /> 
            
            <br /> 

             <h3 id="subject">Pathosense Design Tree</h3> 

             <img className="img2" src={img1} />

             <p id="description">
             This diagram provides an overview of the process that the Pathosense software would 
             complete for a given interface. In this scenario, we once again refer to Foodies as 
             the interface. The first step in the process is a webscraping execution that collects 
             all possible text data from the feedback section of the website. From there, the 
             preprocessing procedure commences, beginning with a tokenization function that splits 
             all of the text data into individual units that can be analyzed. Then, the units are 
             given identification tags based on their linguistic properties (i.e. ugly = adjective, 
             and the adjective tag could simply be 'a'). 
             </p> 

             <p id="description">
             After the text data is preprocessed, opinion-based words are exctracted, and the software 
             identifies the sentiment behind each term. The sentences are then reformed, with any previously 
             collected scentences that contained an opinion-based word now being identified based on the 
             sentiment of the seed word(s) that were processed and indentified under specific sentiment 
             categories. Collectively, the review sentence (given that it was subjective) is classified 
             based on the sentiment behind its implementation. 
             </p> 

             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features9; 
