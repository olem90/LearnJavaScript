import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Introduction = () => (
    <ContentContainer>
        <h2 id="introduction">1. Introduction to JavaScript</h2>
        <p>
            Welcome to the world of JavaScript! If you're here, it means you're ready to dive into the exciting 
            and dynamic world of web development. So, what exactly is JavaScript? Let's break it down!
        </p>
        <h3>What is JavaScript?</h3>
        <p>
            JavaScript is like the engine in your car – while HTML and CSS build the car's structure and 
            paint it beautifully, JavaScript is what makes the car move. It's a powerful programming language 
            used to add interactivity and functionality to web pages. Without JavaScript, websites would be static
            and boring. With JavaScript, they come alive!
        </p>
        <p>
            JavaScript is a high-level, interpreted programming language that is supported by all modern web browsers. 
            It allows developers to create interactive elements on web pages, such as form validations, dynamic content 
            updates, animations, and more. JavaScript can be used both on the client-side (in the browser) 
            and server-side (with environments like Node.js).
        </p>
        <p>
            Here are a few things you can do with JavaScript: 
        </p> 
        <ul> 
            <li><strong>Make Web Pages Dynamic:</strong> Change content, styles, and attributes without reloading the page.</li>
            <li><strong>Validate Form Inputs:</strong> Ensure users fill out forms correctly before submitting them.</li>
            <li><strong>Build Complex Web Applications:</strong> From games to social media platforms, JavaScript is the backbone.</li>
            <li><strong>Manipulate the DOM:</strong> Access and modify the structure of your web page dynamically.</li>
            <li><strong>Fetch Data:</strong> Retrieve information from APIs and servers to display on your site.</li>
        </ul>
        <p>
            Pretty cool, right? JavaScript is a versatile language that's easy to learn but powerful enough to build robust web applications.
        </p>
    </ContentContainer>
);
