import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const VariablesAndDataTypes = () => {

    return (
        <ContentContainer>
            <h2 id="variables">3. Variables and Data Types</h2>
            <h3 id="variables-declaration">Declaration</h3>
            <h4>Understanding Variables</h4>  
            <p>
                Imagine a box where you can store your favorite toy. You can take it out, play with it, and put it back. 
                In programming, variables are like those boxes. They allow you to store data (like numbers or text) 
                and use it whenever you need.
            </p>
            <p>  
                To create a variable in JavaScript, you use the <code>var</code>, <code>let</code>, or <code>const</code> keyword. 
                Each has its own special rules:
            </p>
            <ul>
                <li><code>var</code>: The old way of creating variables. You might still see it, but we use <code>let</code> and <code>const</code> now.</li>
                <li><code>let</code>: The new way to create variables that can change (mutable).</li>
                <li><code>const</code>: Use this for variables that shouldn't change (immutable).</li>
            </ul>
    
            <h3>Examples of Variables</h3>
            <pre>
                {`// Using let
    let favoriteToy = "Action Figure";
    console.log(favoriteToy); // Output: Action Figure
    
    // Using const
    const birthYear = 2000; 
    console.log(birthYear); // Output: 2000
    
    // Using var (not recommended)
    var petName = "Buddy";
    console.log(petName); // Output: Buddy`}
            </pre>
    
            <h3>Variable Naming Conventions</h3>
            <p>
                When naming your variables, it's important to follow some conventions to keep your code readable and maintainable:
            </p>
            <ul>
                <li>Use camelCase for variable names: <code>let myVariableName = 'value';</code></li>
                <li>Variable names should be descriptive but concise: <code>let userName = 'John';</code></li>
                <li>Avoid using reserved keywords: <code>let let = 'value'; // Not allowed</code></li>
                <li>Start variable names with a letter, underscore (_), or dollar sign ($): <code>let _privateVar = 'value';</code></li>
            </ul>
    
            <h3 id="variables-types">Data Types</h3>
            <p>
                Just like the real world has different types of things (like numbers, letters, and pictures), 
                JavaScript has different types of data you can store in variables. Here are the most common ones:
            </p>
            <ul>
                <li><strong>Numbers:</strong> For any kind of number, like <code>42</code> or <code>3.14</code>.</li>
                <li><strong>Strings:</strong> Text wrapped in quotes, like <code>"Hello, World!"</code>.</li>
                <li><strong>Booleans:</strong> True or false values, like <code>true</code> or <code>false</code>.</li>
                <li><strong>Arrays:</strong> Lists of items, like <code>[1, 2, 3]</code> or <code>["apple", "banana", "cherry"]</code>.</li>
                <li><strong>Objects:</strong> Collections of related data, like <code>{`{name: "Alice", age: 25}`}</code>.</li>
            </ul>
    
            <h3>Examples of Data Types</h3>
            <pre>
                {`// Number
    let age = 25;
    console.log(age); // Output: 25
    
    // String
    let greeting = "Hello, World!";
    console.log(greeting); // Output: Hello, World!
    
    // Boolean
    let isJavaScriptFun = true;
    console.log(isJavaScriptFun); // Output: true
    
    // Array
    let fruits = ["apple", "banana", "cherry"];
    console.log(fruits); // Output: ["apple", "banana", "cherry"]
    
    // Object
    let person = {
        name: "Alice",
        age: 25,
        isStudent: true
    };
    console.log(person); // Output: {name: "Alice", age: 25, isStudent: true}`}
            </pre>
    
            <h3>Why Variables and Data Types Matter</h3>
            <p>
                Variables and data types are the building blocks of any program. 
                They allow you to store, manipulate, and retrieve data, making your code dynamic and interactive. 
                Understanding them is key to becoming a great programmer!
            </p>
        </ContentContainer>
        );
};
