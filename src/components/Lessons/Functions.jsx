import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Functions = () => {
    return (
        <ContentContainer>
            <h2 id="functions">7. Functions</h2>

            <h3 id="functions-declaration">Function Declarations</h3>
            <p>
                A function declaration defines a named function. The function can be called using its name.
            </p>
            <pre>
                {`function greet(name) {
    return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!`}
            </pre>
            <p>
                Function declarations are hoisted, meaning they can be called before they are defined in the code.
            </p>

            <h3 id="functions-expression">Function Expressions</h3>
            <p>
                A function expression defines a function inside an expression. The function can be anonymous or named.
            </p>
            <pre>
                {`const greet = function(name) {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Output: Hello, Alice!`}
            </pre>
            <p>
                Function expressions are not hoisted, meaning they cannot be called before they are defined in the code.
            </p>

            <h3 id="functions-arrow">Arrow Functions</h3>
            <p>
                Arrow functions provide a shorter syntax for writing function expressions. They do not have their own <code>this</code> value.
            </p>
            <pre>
                {`const greet = (name) => {
    return "Hello, " + name + "!";
};

console.log(greet("Alice")); // Output: Hello, Alice!`}
            </pre>
            <p>
                If the function body contains only a single expression, you can omit the curly braces and the <code>return</code> keyword.
            </p>
            <pre>
                {`const greet = name => "Hello, " + name + "!";

console.log(greet("Alice")); // Output: Hello, Alice!`}
            </pre>

            <h3 id="functions-parameters">Parameters and Arguments</h3>
            <p>
                Parameters are placeholders for the values that are passed to the function, and arguments are the actual values passed to the function when it is called.
            </p>
            <pre>
                {`function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5`}
            </pre>

            <h3 id="functions-default-parameters">Default Parameters</h3>
            <p>
                Default parameters allow you to initialize named parameters with default values if no values or undefined are passed.
            </p>
            <pre>
                {`function greet(name = "Guest") {
    return "Hello, " + name + "!";
}

console.log(greet()); // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!`}
            </pre>

            <h3 id="functions-rest-parameters">Rest Parameters</h3>
            <p>
                Rest parameters allow you to pass an indefinite number of arguments as an array.
            </p>
            <pre>
                {`function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // Output: 15`}
            </pre>

            <h3 id="functions-anonymous">Anonymous Functions</h3>
            <p>
                Anonymous functions are functions without a name. They are often used as arguments to other functions.
            </p>
            <pre>
                {`setTimeout(function() {
    console.log("This is an anonymous function.");
}, 1000);`}
            </pre>

            <h3 id="functions-callback">Callback Functions</h3>
            <p>
                A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.
            </p>
            <pre>
                {`function fetchData(callback) {
    setTimeout(() => {
        const data = { user: "Alice" };
        callback(data);
    }, 1000);
}

function handleData(data) {
    console.log("Received data:", data);
}

fetchData(handleData);`}
            </pre>

            <h3 id="functions-higher-order">Higher-Order Functions</h3>
            <p>
                Higher-order functions are functions that operate on other functions, either by taking them as arguments or by returning them.
            </p>
            <pre>
                {`function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
console.log(double(5)); // Output: 10`}
            </pre>

            <h3 id="functions-closures">Closures</h3>
            <p>
                A closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
            </p>
            <pre>
                {`function outerFunction() {
    const outerVariable = "I'm outside!";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const inner = outerFunction();
inner(); // Output: I'm outside!`}
            </pre>

            <h3>When to Use Each Function Type</h3>
            <p>
                <strong>Function Declarations:</strong> Use when you need to define a function that can be called before its definition in the code.
            </p>
            <p>
                <strong>Function Expressions:</strong> Use when you need to define a function as part of a larger expression or when the function needs to be passed as an argument to another function.
            </p>
            <p>
                <strong>Arrow Functions:</strong> Use when you need a shorter syntax and do not need to use the <code>this</code> keyword inside the function.
            </p>
        </ContentContainer>
    );
};
