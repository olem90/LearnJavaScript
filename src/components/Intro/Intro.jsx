import { IntroStyles, IntroStylesContainer, IntroTextStyles } from "./Intro.styles";

export const Intro = () => {
    return (
        <IntroStylesContainer>
            <IntroStyles> 
                <h1>Intro</h1> 
                <IntroTextStyles> 
                    Welcome to Learn JavaScript, your ultimate destination for mastering the art of web development. 
                    Whether you're a complete beginner or an experienced developer looking to hone your skills, 
                    our platform is designed to cater to all levels of expertise.
                </IntroTextStyles>
                <IntroTextStyles>
                    <h2>What You'll Learn</h2> 
                    JavaScript is the backbone of modern web development, 
                    powering everything from simple interactive features to complex web applications.  
                    Here at Learn JavaScript, we offer a comprehensive curriculum that covers all the essential topics, including:
                </IntroTextStyles>
                <IntroTextStyles className="subjects">  
                    <strong>Basic Syntax and Variables:</strong> Understand the building blocks of JavaScript, including data types, variables, and operators. 
                </IntroTextStyles>     
                <IntroTextStyles className="subjects"> 
                    <strong>Functions and Scope:</strong> Learn how to write reusable code with functions, and understand the nuances of scope and closures.
                </IntroTextStyles> 
                <IntroTextStyles className="subjects"> 
                    <strong>DOM Manipulation:</strong> Discover how to interact with the Document Object Model (DOM) to create dynamic and responsive web pages.
                </IntroTextStyles> 
                <IntroTextStyles className="subjects"> 
                    <strong>Event Handling:</strong> Master the art of handling user interactions and events to create interactive user experiences.
                </IntroTextStyles> 
                <IntroTextStyles className="subjects"> 
                    <strong>ES6 and Beyond:</strong> Stay up-to-date with the latest features of JavaScript, including arrow functions, classes, and modules.
                </IntroTextStyles> 
                <IntroTextStyles className="subjects"> 
                    <strong>Asynchronous Programming:</strong> Dive into asynchronous programming with promises, async/await, and learn how to handle API requests.
                </IntroTextStyles> 
                <IntroTextStyles className="subjects">
                    <strong>Frameworks and Libraries: </strong> Get introduced to popular JavaScript frameworks and libraries like React, Angular, and Vue.js.
                </IntroTextStyles> 
            </IntroStyles> 
        </IntroStylesContainer> 
        
    ) 

}