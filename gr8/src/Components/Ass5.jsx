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
            comes to protecting a name or logo that differentiates our products from others in 
            the same industry. <br /> 
            <br />
            A notable feature that should be trademarked would be our product name and logo. This is 
            because it can be marked on various items to signify them as being under our brand. An 
            example of this is a pen with a company's logo on it. While that company may not manufacture 
            pens, the fact that their logo is on it associates it with that brand.<br /> 
            <br /> 
            According to the United States Patent and Trademark Organization, there are no existing or 
            previously existing trademarks for the name "Pathosense." When searching with the keyword 
            "Sentiment Analysis," 80 unique trademarks are found. 
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
            acheives a unique status that allows it to outshine its competitors. As such, it would provide legal 
            protection over our design, preventing extraneous sources from blatantly copying our work. 
            </p> 

            <h id="topic">Pricing:</h> 
            <p id="description">
            According to LegalZoom, a patent can cost upwards of $199. Typically, it requires the involvement of a lawyer or 
            equivalent representative. 
            </p> 

            <h id="topic">Related Patents:</h> 
            <br /> 
            <a href="https://patents.google.com/patent/US9208502B2/en" 
            className="link">
            US9208502B2: Sentiment Analysis Using Video/Audio Data
            </a> 
            <a href="https://patents.google.com/patent/US10558751B2/en?q=~patent%2fUS9208502B2" 
            className="link">
            US10558751B2: Webscraping and Finding Specific Keywords
            </a> 

            <br /> 
            <h3 id="subject"> Copyrights</h3>
            
            <p id="description">
            Copyright laws are essential to protecting the rights of software developers and the companies they work for. The source code this group develops will be wholly original and protected from use by other parties once we file a claim.  <br /> 
            <br />
            According to www.copyright.gov/records, the keyword sentiment analysis has over 10,000 results. The application titles range from “Sentiment Analysis for PTSD Signals” to “Stakeholder and sentiment analysis in web forums.” The description for sentiment analysis copyrights generally under “Computer text data” and “Electronic file (eService).” Other important information to include when filing a copyright claim include type of work, nation of first publication, rights and permissions, date of creation and date of publication. 
            </p>
            <br />


            <hr /> 
        
                
            </div> 
        </div> 
    )
}

export default Features4; 
