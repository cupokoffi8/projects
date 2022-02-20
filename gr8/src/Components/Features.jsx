import React from "react"; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <br /> 
            <h1 id="title">Assignment 2: Needs Assessment</h1> 
            <hr className="divider" /> 
            <h2 id="title2">Sentiment Analysis</h2> 

            <br /> 

            <h3 id="subject">Overview: </h3>
            <p id="description">
                The group intends to look into sentiment analysis to gauge public opinion on current events. 
                Specifically the group wishes to use the twitter and facebook API to discern how people feel about topics such 
                as the 2022 winter olympics, Russia/Ukraine conflict, and trucker blockade. Companies could also use this information 
                to make or alter major decisions. Recently many gaming companies and celebrities have announced their support for NFTs 
                before retracting these statements. Movie studios could find out whether their advertisements have left a positive 
                or negative impact on their target demographics. Consumers could find out how other people feel about a certain 
                brand when deciding whether or not to buy a product. The possibilities for a well designed sentiment analysis application 
                are nearly limitless.
            </p>

                <h3 id="subject">Objective: </h3>
                <p id="description">
                    This can allow the feelings of the general public regarding a specific topic to be easily exposed, allowing for 
                    a simple method of determining how invested they are in the subject, and what actions would best suit their perspectives. 
                    This kind of software would be very useful to big companies, such as Netflix, movie studios, etc. in order to have a better
                     gauge of how their products are doing; instead of searching through surveys and multiple other sites. In addition to this, 
                     regular people rarely buy an item without first reading reviews, oftentimes to get the best reviews or opinions on 
                     different matters they would have to search on different sites. Our objective is therefore to make a simple solution to 
                     make all of these sentimental values in one space and easy to use. 
                </p>

                <h3 id="subject">Background: </h3>
                <p id="description">Our application would use APIs from current social media platforms and gather information from other sites and put it all together in one program that would enable customers and businesses to easily see the response of their products and make decisions without wasting time by visiting multiple sites. The group’s program would also curate the data to avoid providing  conflicting information.
                </p>

                <h3 id="subject">Methodology: </h3>
                <p id="description">The group could make a website that would run this software, and as users access the site there would be different preferences in order to group the things people would be sharing their sentimental opinion with. On the other hand  if companies use this software to gauge the reception of their products there should be ways to organize the data to make it easy to read and understand.  A working program would take a few weeks for the group to build and once it's operational, users can get results in seconds.
                </p>

                <h3 id="subject">Expected Results: </h3>
                <p id="description">The simplest results could be displayed as a score from 1 to 10, with 10 being overwhelmingly positive and 1 being overwhelmingly negative. We could also do breakdowns for demographics by age, gender, ethnicity, etc. In addition to this we could use different statistical analysis techniques to display the overall average response to a product based on all the reviews received. 
                </p>

                <h3 id="subject">Costs: </h3>
                <p id="description">Twitter offers developers its API for free, so there would be no extra cost. As this effort would be software-based, material cost is not a concern. If the group were to use a website for this software, we would need to host it on a server somewhere. There is the possibility of using our own server if one can be built to be reilabile. This alone could cost a few hundred dollars and more. On the other hand we could use a hosting site that would be able to do this for us for much cheaper and more reliable. Using a company to host  our site would cost on average anywhere from $80 to $300 per month. Other than this all the APIs and libraries we would use are free to use so no cost in the production stage. If the group were to publish this on the Apple App Store it would cost around $99 per year. 
                </p>

                <br /> 
                <hr /> 
                
            </div> 
        </div> 
    )
}

export default Features; 