import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const ControlStructures = () => {
    
    return (
        <ContentContainer>
            <h2 id="controlStructures">Control Structures</h2>
            <h3 id="controlStructures-ifElse">If/Else Statements</h3>
            <p>
                If/Else statements are used to perform different actions based on different conditions.
                They are fundamental to control the flow of a program.
            </p>
            <h4>Syntax</h4>
            <pre>
                {`if (condition) {
    // block of code to be executed if the condition is true
} else {
    // block of code to be executed if the condition is false
}`}
            </pre>
            <h4>Example</h4>
            <pre>
                {`let age = 20;

if (age < 18) {
    console.log("You are a minor.");
} else {
    console.log("You are an adult.");
}
// Output: You are an adult.
`}
            </pre>

            <h3 id="controlStructures-switch">Switch Statements</h3>
            <p>
                Switch statements are used to perform different actions based on different conditions.  
                They are often used when you have multiple possible conditions for a single variable.
            </p>
            <h4>Syntax</h4>
            <pre>
                {`switch(expression) {
    case x:
        // block of code to be executed if the expression equals x
        break;
    case y:
        // block of code to be executed if the expression equals y
        break;
    default:
        // block of code to be executed if the expression doesn't match any case
}`}
            </pre>
            <h4>Example</h4>
            <pre>
                {`let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday
`}
            </pre>
        </ContentContainer>
    );
};
