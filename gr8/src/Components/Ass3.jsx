import React from "react"; 
import Duncker from "../Images/Image.jpg"; 

function Features2(){
    return(
        <div id="features2"> 
        <div className='features-text'>
            <h1 id="title">Assignment 3: Problem Formulation</h1> 
            <hr className="divider" /> 
            <h2 id="title">Sentiment Analysis</h2>

            <h3 id="subject">Statement-Restatement Technique</h3>
            <p id="description">Problem:<br /> There is an urgency to keep up with information in an organized and fast way.<br /> 
            <br />
            Constraints:<br /> It is perhaps impossible for software in its current state to reach a level at which it can interpret emotions 
in the same way that the human brain can. The current methods of sentiment analysis can find trouble with more complicated 
vocabulary, such as compound words, which can create a false meaning in the eyes of a software that is designed to determine 
emotions based on words alone. <br /> 
<br />
Goals:<br /> Effectively generate user perspectives based on their use of words and information. </p>

<h3 id="subject">Duncker Diagram</h3>
<img src={Duncker} className="img" />
        
        <h3 id="subject">KT Analysis</h3>
                
            </div> 
        </div> 
    )
}

export default Features2; 
