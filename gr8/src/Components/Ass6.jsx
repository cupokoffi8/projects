import React from "react"; 
import img1 from "../Images/Figma/Model.jpg"; 
import img2 from "../Images/Figma/Phone1.png"; 
import img3 from "../Images/Figma/Phone2.png"; 
import img4 from "../Images/Figma/Phone3.png"; 
import img5 from "../Images/Figma/Phone4.png"; 
import img6 from "../Images/Figma/Foodies.png";  

function Features5(){
    return(
        <div id="features5"> 
        <div className='features-text'>
            <h1 id="title">Abstraction and Modeling</h1> 
            <hr className="divider" /> 
            
            <br /> 

            <h3 id="subject">Systematic Overview</h3> 

            <p id="description">
            As we delve further into the design process, a system overview can be constructed to 
            provide a basic concept of the counterparts associated with the functionality of Pathosense. 
             </p> 

             <img className="img2" src={img1} /> 

             <br /> 

             <h3 id="subject">The Process</h3> 

            <p id="description">
            Let us consider a hypothetical food delivery service called Foodies, operating in the 
            New York Metropolitan area. On their mobile app, users can provide feedback on their 
            experience with the app. This is done simply by tapping the "+" on the top right to 
            initiate a review. 
             </p> 

             <br /> 

            <div className="the-imgs"> 
             <img id="img-ab" src={img2} /> 
             <img id="img-ab" src={img3} />
             </div> 

             <br /><br /> 

             <p id="description">
            By tapping the text box, the user can discuss how their experience with the app has been. 
            While detail is encouraged, even a simple description should be enough for the Pathosense 
            software to properly interpret the emotion behind each review. 
             </p> 

             <br /> 

            <div className="the-imgs"> 
             <img id="img-ab" src={img4} /> 
             <img id="img-ab" src={img5} />
             </div> 
           
            <br /><br /> 

            <p id="description">
            After the review is submitted, Foodies would receive an update on their end. Via a database, 
            a user analytics dashboard is displayed with statistics about the customer feedback. This includes 
            Pathosense Sentiment Analytics that provide a collective estimation on how users feel about the 
            app. This includes a section that displays recent reviews, as well as a chart that compares feelings 
            captured from the reviews. A positivity index meter is used as a scoring system to help Foodies 
            easily observe how their customers are feeling about their product. 
             </p> 

             <br /> 

             <img className="img2" src={img6} /> 

             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features5; 
