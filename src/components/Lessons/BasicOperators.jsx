import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const BasicOperators = () => {
    return (
        <ContentContainer>
            <h2 id="operators">4. Basic Operators</h2>
            <h3>Introduction to Operators</h3>
            <p>
                Operators are symbols that perform operations on variables and values. In JavaScript, 
                there are different types of operators, each serving a specific purpose. 
                The most commonly used operators are arithmetic, comparison, and logical operators.
            </p>

            <h3 id="operators-arithmetic">Arithmetic Operators</h3>
            <p>
                Arithmetic operators are used to perform basic mathematical operations such as addition, 
                subtraction, multiplication, and division. Here are the most common arithmetic operators in JavaScript:
            </p>
            <ul>
                <li><code>+</code> (Addition): Adds two numbers together. Example: <code>5 + 3</code> results in <code>8</code>.</li>
                <li><code>-</code> (Subtraction): Subtracts one number from another. Example: <code>5 - 3</code> results in <code>2</code>.</li>
                <li><code>*</code> (Multiplication): Multiplies two numbers. Example: <code>5 * 3</code> results in <code>15</code>.</li>
                <li><code>/</code> (Division): Divides one number by another. Example: <code>6 / 3</code> results in <code>2</code>.</li>
                <li><code>%</code> (Modulus): Returns the remainder of a division. Example: <code>7 % 3</code> results in <code>1</code>.</li>
                <li><code>++</code> (Increment): Increases a number by one. Example: <code>let a = 5; a++;</code> results in <code>6</code>.</li>
                <li><code>--</code> (Decrement): Decreases a number by one. Example: <code>let a = 5; a--;</code> results in <code>4</code>.</li>
            </ul>

            <h3 id="operators-comparison">Comparison Operators</h3>
            <p>
                Comparison operators are used to compare two values and return a boolean (true or false) result. 
                Here are the most common comparison operators in JavaScript:
            </p>
            <ul>
                <li><code>==</code> (Equal to): Checks if two values are equal. Example: <code>5 == '5'</code> results in <code>true</code>.</li>
                <li><code>===</code> (Strict equal to): Checks if two values are equal and of the same type. Example: <code>5 === '5'</code> results in <code>false</code>.</li>
                <li><code>!=</code> (Not equal to): Checks if two values are not equal. Example: <code>5 != '5'</code> results in <code>false</code>.</li>
                <li><code>!==</code> (Strict not equal to): Checks if two values are not equal and of the same type. Example: <code>5 !== '5'</code> results in <code>true</code>.</li>
                <li><code>&gt;</code> (Greater than): Checks if one value is greater than another. Example: <code>5 &gt; 3</code> results in <code>true</code>.</li>
                <li><code>&lt;</code> (Less than): Checks if one value is less than another. Example: <code>5 &lt; 3</code> results in <code>false</code>.</li>
                <li><code>&gt;=</code> (Greater than or equal to): Checks if one value is greater than or equal to another. Example: <code>5 &gt;= 5</code> results in <code>true</code>.</li>
                <li><code>&lt;=</code> (Less than or equal to): Checks if one value is less than or equal to another. Example: <code>5 &lt;= 5</code> results in <code>true</code>.</li>
            </ul>


            <h3 id="operators-logical">Logical Operators</h3> 
            <p>
                Logical operators are used to combine multiple boolean expressions and return a boolean result. 
                Here are the most common logical operators in JavaScript:
            </p>
            <ul>
                <li><code>&&</code> (Logical AND): Returns true if both operands are true. Example: <code>true && false</code> results in <code>false</code>.</li>
                <li><code>||</code> (Logical OR): Returns true if at least one operand is true. Example: <code>true || false</code> results in <code>true</code>.</li>
                <li><code>!</code> (Logical NOT): Inverts the boolean value of an operand. Example: <code>!true</code> results in <code>false</code>.</li>
            </ul>

            <h3>Examples of Basic Operators</h3>
            <pre>
                {`// Arithmetic Operators
let a = 10;
let b = 5;
console.log(a + b); // Output: 15
console.log(a - b); // Output: 5
console.log(a * b); // Output: 50
console.log(a / b); // Output: 2
console.log(a % b); // Output: 0

// Comparison Operators
console.log(a == b); // Output: false
console.log(a === b); // Output: false
console.log(a != b); // Output: true
console.log(a !== b); // Output: true
console.log(a > b); // Output: true
console.log(a < b); // Output: false
console.log(a >= b); // Output: true
console.log(a <= b); // Output: false

// Logical Operators
console.log(a > b && b > 0); // Output: true
console.log(a > b || b < 0); // Output: true
console.log(!(a > b)); // Output: false`}
            </pre>

            <h3>Why Operators Matter</h3>
            <p>
                Understanding operators is essential for performing calculations, making decisions, and controlling the flow of a program. 
                They are fundamental tools that you will use frequently in your coding journey.
            </p>
        </ContentContainer>
    );
};
