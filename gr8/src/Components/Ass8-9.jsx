import React from "react"; 
import img1 from "../Images/Ethics/Ethic.png"; 

function Features7(){
    return(
        <div id="features7"> 
        <div className='features-text'>
            <h1 id="title">Ethics and Liability</h1> 
            <hr className="divider" /> 
            
            <br /> 

            <h3 id="subject">Ethical Issues</h3> 

            <p id="description">
            Sentiment can be applied to many things, and in many contexts. When it comes to the ethical 
            nature of its performance, these contexts become quite crucial in determining its morality. For 
            example, many would consider automated insurance premium decisions based on automatically inferred 
            emotions to be inappropriate. However, studying how people use language to express gratitude, sadness, 
            etc. would be deemed a much more appropriate application.  
             </p> 

             <p id="description">
            That being said, the main ethical concerns with sentiment analysis software would be manipulating 
            results based on emotion, as previously discussed. While it is beneficial for analytic purposes, it 
            can be used by companies to essentially "pick favorites" based on the emotions different users present 
            towards their product. Of course, it is not always a bad thing to have favored customers, as many 
            companies rely on repeat business from loyal customers. Rather, the issue becomes more prominent when 
            users are shunned simply due to criticism that is deemed negative by a sentiment analysis software. 
             </p> 

             <br /> 

             <img className="img4" src={img1} /> 

             <br /> 

             <p id="description">
            We see in the image above that two reviews of opposing emotion are being compared. However, while the 
            feedback from Carlitos is deemed negative by the sentiment analysis software due to the lexicon involved, 
            his intention behind the comment is just to provide constructive criticism. Despite his intentions, the 
            company may automatically favor Nikola due to his feedback that is deemed positive by the recognition 
            software. 
             </p> 

             <br /> 

             <h3 id="subject">Product Liability</h3> 

            <p id="description">
            
             </p> 

             <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features7; 
