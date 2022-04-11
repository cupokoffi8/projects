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
            Pathosense is designed to be used by companies for analytics, and thus, when it comes to liability in the 
            event of a security/data breach, a common implementation would be a formal agreement that must be made between 
            the customer and the company on behalf of Pathosense (acting as a middleman) regarding the possible use of 
            data for analytical purposes. 
             </p> 

             <p id="description">
            A reasonable comparison to this would be how Apple iPhones will ask users if they are willing to share data 
            with them as a means of analyzing bugs in order to make necessary improvements. Of course, if these terms and 
            conditions are not agreed to, the company may or may not grant certain privileges to that customer, depending 
            on what their goal is. 
             </p> 

             <p id="description">
            Were a customer's data to be wrongfully confiscated against the terms of the "contract" that was previously 
            accepted, the customer is obligated to take legal action, with the previously agreed to "terms and conditions" 
            acting as the backbone of their dispute. For example, if a company, like Apple, is caught selling your private 
            data to third-party companies, and this has not been agreed upon in the terms and conditions, the company is 
            liable to pay a hefty penalty as a result.  
             </p> 

             <h id="topic">Here is a real example of what could happen in this scenario:</h> 
            <br /> 
            <a href="https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook" 
            className="link">
            FTC Penalizes Facebook After Privacy Violations
            </a> 

             <br /> 

             <h3 id="subject">Social Impact</h3> 

            <p id="description">
            Because Pathosense is strictly software-based, there is no need to be concerned about physical waste at the end of its 
            lifetime. In fact, as a software, it will last as long is it can be supported by the hardware it is being used on. Even 
            after it is no longer supported, it can always be revived through necessary software updates. 
            </p> 

            <p id="description">
            An example of a software reaching its "end of life" period is a mobile app called Zenonia 3. It was quite popular game on 
            both the App Store and the Google Play Store, but unfortunately, was discontinued after its software stopped being supported 
            by the OS it was being offered on. However, instead of being completely abandoned, it was instead rebooted into a sequel 
            called Zenonia 4, which is still being updated and available to download on iOS and Android today. 
            </p> 

            <br /> 

            <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features7; 
