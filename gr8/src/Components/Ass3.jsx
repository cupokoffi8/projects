import React from "react"; 
import Duncker from "../Images/Image.jpg"; 

function Features2(){
    return(
        <div id="features2"> 
        <div className='features-text'>
            <h1 id="title">Assignment 3: Problem Formulation</h1> 
            <hr className="divider" /> 
            <h2 id="title2">Sentiment Analysis</h2>

            <br /> 

            <h3 id="subject">Statement-Restatement Technique</h3>

            <h id="topic">Problem:</h>
            <p id="description">There is an urgency to keep up with information in an organized and fast way.</p> 
            
            <h id="topic">Constraints:</h>
            <p id="description">It is perhaps impossible for software in its current state to reach a level at which it can interpret emotions 
            in the same way that the human brain can. The current methods of sentiment analysis can find trouble with more complicated 
            vocabulary, such as compound words, which can create a false meaning in the eyes of a software that is designed to determine 
            emotions based on words alone.</p> 
            
            <h id="topic">Goals:</h>
            <p id="description">Effectively generate user perspectives based on their use of words and information.</p>

            <br /> 

            <h3 id="subject">Revision Method Technique</h3>

            <h id="topic">Existing Software:</h>
            <p id="description-list">
                •Awar.io<br />
                •Brandwatch<br />
                •Lexalytics<br />
                •Hootsuite Insights
                </p>
            <p id="description-note">
                All of these softwares are mainly focused on analyzing customer opinions on products and competition for a 
                company to better understand what improvements need to be made 
                </p> 

                    <br /> 
            
            <h id="topic">Flaws with existing Products:</h>
            <p id="description">
                Current methods are completely reliant on labeled data, 
                which means it depends on the individual data being valid when submitted. 
                It also requires words that provide an accurate sense of sentiment, such as “enjoy,” 
                or “dislike.” More complex data can be extremely difficult to interpret with traditional 
                sentiment analysis. 
            </p>

            <br /> 

            <h3 id="subject">Duncker Diagram</h3>
            <img src={Duncker} className="img" />
                
            </div> 
        </div> 
    )
}

export default Features2; 