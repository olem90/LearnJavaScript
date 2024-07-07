import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Loops = () => {

    return (
        <ContentContainer>
            <h2 id="loops">6. Loops</h2>

            <h3 id="loops-for">For Loops</h3>
            <p>
                A <code>for</code> loop repeats a block of code as long as a specified condition is true. It consists of three parts:
            </p>
            <ul>
                <li>Initialization: executed once before the loop starts.</li>
                <li>Condition: checked before each iteration. If true, the loop continues.</li>
                <li>Final Expression: executed at the end of each iteration.</li>
            </ul>
            <pre>
                {`for (let i = 0; i < 5; i++) {
    console.log(i);
}`}
            </pre>
            <p>This loop will output numbers 0 through 4.</p>
            <p>
                Here's a more practical example: iterating over an array.
            </p>
            <pre>
                {`const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}`}
            </pre>
            <p>This loop will output "apple", "banana", and "cherry".</p>

            <h3 id="loops-while">While Loops</h3>
            <p>
                A <code>while</code> loop repeats a block of code as long as the specified condition is true. The condition is evaluated before each iteration.
            </p>
            <pre>
                {`let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}`}
            </pre>
            <p>This loop will also output numbers 0 through 4.</p>
            <p>
                Here's a practical example: reading user input until a valid input is provided.
            </p>
            <pre>
                {`let input;
while (!input || input.trim() === "") {
    input = prompt("Enter a valid input:");
}
console.log("You entered:", input);`}
            </pre>
            <p>This loop will prompt the user for input until a non-empty input is provided.</p>

            <h3 id="loops-do-while">Do...While Loops</h3>
            <p>
                A <code>do...while</code> loop is similar to a <code>while</code> loop, but it guarantees that the loop body is executed at least once before the condition is checked.
            </p>
            <pre>
                {`let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);`}
            </pre>
            <p>This loop will output numbers 0 through 4.</p>
            <p>
                Here's a practical example: prompting the user for input at least once.
            </p>
            <pre>
                {`let input;
do {
    input = prompt("Enter a valid input:");
} while (!input || input.trim() === "");
console.log("You entered:", input);`}
            </pre>
            <p>This loop will prompt the user for input at least once and continue prompting until a non-empty input is provided.</p>

            <h3>When to Use Each Loop</h3>
            <p>
                <strong>For Loop:</strong> Use when you know the exact number of iterations, such as when iterating over arrays.
            </p>
            <p>
                <strong>While Loop:</strong> Use when the number of iterations is not known in advance, and you need to loop based on a condition.
            </p>
            <p>
                <strong>Do...While Loop:</strong> Use when you need to ensure the loop body is executed at least once, regardless of the condition.
            </p>
        </ContentContainer>
    );
};
 
