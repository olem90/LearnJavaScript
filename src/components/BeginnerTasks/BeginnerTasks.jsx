import React, { useState, useRef } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { BeginnerTasksWrapper, BeginnerTasksContainer, CodeEditorContainer, 
         BeginnerTasksButtonContainer, ConsoleOutputContainer, TaskSolutionContainer, 
         TaskTitle, SolutionWrapper, ClearConsoleBtnContainer } from "./BeginnerTasks.styles";
import { NavBar } from "../Nav/Nav"; 

const tasks = [
    {
        title: "Introducing Yourself with JavaScript Variables", 
        description: "Let's start by creating some simple variables to introduce yourself!", 
        task: `Task 1: 


1. Declare a variable named \`myName\` and set it to your name. 
2. Declare another variable named \`myAge\` and set it to your age.
3. Print both variables to the console with messages that introduce yourself.`, 
        starterCode: ``,  
        solution: `Solution:
        
let myName = "John Doe"; // Replace with your name 
let myAge = 25; // Replace with your age 
  
console.log("My name is " + myName);    
console.log("I am " + myAge + " years old");`,
        consoleOutput: `My name is John Doe I am 25 years old`
    },  
    
    {
        title: "Adding Hobbies to Your Introduction",
        description: "Let's add more details to your introduction by including your hobbies!",
        task: `Task 2:


1. Declare a variable named \`myHobbies\` and set it to a list of your hobbies (as a string).
2. Print the variable to the console with a message that includes your hobbies.`,
        starterCode: ``, 
        solution: `Solution:

let myHobbies = "playing poker, working out, and coding"; // Replace with your hobbies

console.log("My hobbies are: " + myHobbies);`,
        consoleOutput: `My hobbies are: playing poker, working out, and coding`
    },
    {
        title: "Combining Personal Details",
        description: "Let's combine everything we've learned so far into one cohesive introduction!",
        task: `Task 3:


1. Declare variables named \`myName\`, \`myAge\`, and \`myHobbies\`, and assign them appropriate values.
2. Combine these variables into a single message that introduces yourself.
3. Print the complete introduction message to the console.`,
        starterCode: ``, 
        solution: `Solution:
        
let myName = "Ole"; // Replace with your name
let myAge = 34; // Replace with your age
let myHobbies = "playing poker, working out, and coding"; // Replace with your hobbies

let introduction = "Hello! My name is " + myName + ", I am " + myAge + " years old, and my hobbies are " + myHobbies + ".";
console.log(introduction);`,
        consoleOutput: `Hello! My name is Ole, I am 34 years old, and my hobbies are playing poker, working out, and coding.`
    },
 
    {
        title: "Playing with Numbers: Basic Math Operations",
        description: "Let's practice some basic math operations with JavaScript variables!",
        task: `Task 4:


1. Declare two variables named \`num1\` and \`num2\` and assign them any numbers you like.
2. Create variables to store the results of adding, subtracting, multiplying, and dividing these two numbers.
3. Print all the results to the console to see the magic of JavaScript math!`,
        starterCode: ``,  
        solution: `Solution:

const num1 = 20; 
const num2 = 3;

const added = num1 + num2;
const subtracted = num1 - num2;
const multiplied = num1 * num2;
const divided = num1 / num2; 

console.log("added: " + added + ", "); 
console.log("subtracted: " + subtracted + ", ");
console.log("multiplied: " + multiplied + ", ");
console.log("divided: " + divided + ", ");`,
        consoleOutput: `added: 23, subtracted: 17, multiplied: 60, divided: 6.666666666666667`
    }, 

    {
        title: "Calculating the Area of a Rectangle",
        description: "Let's learn how to calculate the area of a rectangle by multiplying its length and width.",
        task: `Task 5:

    
1. Declare two variables named \`length\` and \`width\`, and assign them any values.
2. Calculate the area by multiplying \`length\` and \`width\`, and store the result in a variable named \`area\`.
3. Print the value of \`area\` to the console.`,
        starterCode: ``, 
        solution: `Solution:
const length = 5; // Replace with any length
const width = 3; // Replace with any width
    
const area = length * width;
    
console.log("The area of the rectangle is " + area);`,
        consoleOutput: `The area of the rectangle is 15`
    },

    {
        title: "Calculating the Perimeter of a Rectangle",
        description: "Let's learn how to calculate the perimeter of a rectangle by adding its length and width twice.",
        task: `Task 6:

    
1. Declare two variables named \`length\` and \`width\`, and assign them any values.
2. Calculate the perimeter by adding \`length\` and \`width\` twice, and store the result in a variable named \`perimeter\`.
3. Print the value of \`perimeter\` to the console.`,
        starterCode: ``, 
        solution: `Solution:
const length = 5; // Replace with any length
const width = 3; // Replace with any width
    
const perimeter = 2 * (length + width);
    
console.log("The perimeter of the rectangle is " + perimeter);`,
        consoleOutput: `The perimeter of the rectangle is 16`
    },
    
    {
        title: "Working with Strings",
        description: "Let's practice working with strings by creating a simple greeting message!",
        task: `Task 7:


1. Create a variable named \`greeting\` and assign it a string value of "Hello".
2. Add another string variable named \`name\` and set it to your name.
3. Concatenate these two strings to form a message and store it in a new variable named \`message\`.
4. Print the \`message\` variable to the console.`,
        starterCode: ` `, 
        solution: `Solution:
 
const greeting = "Hello";
const name = "John"; // Replace with your name 

const message = greeting + ", " + name + "!";
 
console.log(message);`, 
        consoleOutput: `Hello, John!` 
    },   

    {
        title: "Changing String Case",
        description: "Let's practice changing the case of a string using JavaScript string methods.",
        task: `Task 8:


1. Create a variable named \`originalString\` and assign it a value of "JavaScript is Fun".
2. Use the \`toUpperCase\` method to convert the string to uppercase and store the result 
in a variable named \`upperCaseString\`. 
3. Use the \`toLowerCase\` method to convert the string to lowercase and store the result 
in a variable named \`lowerCaseString\`.
4. Print both \`upperCaseString\` and \`lowerCaseString\` to the console.`,
        starterCode: ``, 
        solution: `Solution:

const originalString = "JavaScript is Fun"; 

const upperCaseString = originalString.toUpperCase();

const lowerCaseString = originalString.toLowerCase();

console.log(upperCaseString);
console.log(lowerCaseString);`,
        consoleOutput: `JAVASCRIPT IS FUN javascript is fun`
    },

    {
        title: "Finding the Length of a String",
        description: "Let's practice finding the length of a string using the length property.",
        task: `Task 9:


1. Create a variable named \`myString\` and assign it a value of "Learning JavaScript".
2. Use the \`length\` property to find the length of the string and store the result in a variable named \`stringLength\`.
3. Print the \`stringLength\` variable to the console.`,
        starterCode: ``, 
        solution: `Solution:

const myString = "Learning JavaScript"; // The string

const stringLength = myString.length;

console.log(stringLength);`,
        consoleOutput: `19`
    },

    {
        title: "Arrays and Looping Through Them",
        description: "Let's learn how to create an array and loop through its elements to print each one. This is fundamental in handling lists of data in JavaScript.",
        task: `Task 10:


1. Declare an array named \`colors\` and initialize it with three color names (e.g., \`"red"\`, \`"green"\`, \`"blue"\`).
2. Use a \`for\` loop to print each color in the array to the console.`,
        starterCode: ``, 
        solution: `Solution:

const colors = ["red", "green", "blue"];
 
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]); 
}`,
        consoleOutput: `red green blue`
    },

    {
        title: "Arrays and Looping Through Them",
        description: "Let's learn how to create an array and loop through its elements to print each one. This is fundamental in handling lists of data in JavaScript.",
        task: `Task 11:


1. Create an empty array named \`fruits\`.
2. Use the \`push\` method to add three different fruit names to the array.
3. Print the \`fruits\` array to the console.`,
        starterCode: ``, 
        solution: `Solution:
        
const fruits = []; // Empty array

fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");

console.log(fruits);`,
        consoleOutput: `["Apple", "Banana", "Cherry"]`
    },
 
    {
        title: "Looping Through an Array with forEach",
        description: "Let's practice looping through an array using the forEach method.",
        task: `Task 12:


1. Create an array named \`colors\` and initialize it with three color names.
2. Use the \`forEach\` method to print each color in the array to the console.`,
        starterCode: ``, 
        solution: `Solution:
        
const colors = ["Red", "Green", "Blue"]; // Array of colors

colors.forEach(function(color) {
console.log(color);
});`,
        consoleOutput: `Red Green Blue`
    },
 
    {
        title: "Working with Functions",
        description: "Functions allow you to encapsulate code that performs a specific task. They can be reused multiple times throughout your code.",
        task: `Task 13:


1. Declare a function named \`greet\` that takes one parameter named \`name\`.
2. Inside the function, print a greeting message that includes the provided \`name\`.
3. Call the \`greet\` function and pass your name as an argument.`,
        starterCode: ``, 
        solution: `Solution:

function greet(name) {
console.log("Hello, " + name + "!");
}

greet("John");`,
        consoleOutput: `Hello, John!`
    },

    {
        title: "Function to Add Two Numbers",
        description: "Let's practice creating a function that performs a specific task. In this case, we'll create a function that adds two numbers.",
        task: `Task 14:


1. Declare a function named \`addNumbers\` that takes two parameters: \`num1\` and \`num2\`.
2.
3. Print the \`sum\` variable to the console.
4. Call the \`addNumbers\` function with two numbers of your choice.`,
        starterCode: ``, 
        solution: `Solution:
        
function addNumbers(num1, num2) {
const sum = num1 + num2;
console.log("The sum is: " + sum);
}

addNumbers(5, 3); // Replace with your numbers`,
        consoleOutput: `The sum is: 8`
    },

    {
        title: "Function to Calculate the Area of a Circle",
        description: "Let's practice creating a function that calculates the area of a circle given its radius.",
        task: `Task 15:


1. Declare a function named \`calculateArea\` that takes one parameter: \`radius\`.
2. Inside the function, calculate the area using the formula \`area = Math.PI * radius * radius\` 
and store the result in a variable named \`area\`.
3. Print the \`area\` variable to the console.
4. Call the \`calculateArea\` function with a radius of your choice.`,
        starterCode: ``, 
        solution: `Solution:
        
function calculateArea(radius) {
const area = Math.PI * radius * radius;
console.log("The area of the circle is: " + area);
}

calculateArea(4); // Replace with your radius`,
        consoleOutput: `The area of the circle is: 50.26548245743669`
    },

    {
        title: "Using Conditionals",
        description: "Conditionals allow you to execute different code based on certain conditions. This is essential for making decisions in your code.",
        task: `Task 16:


1. Declare a variable named \`temperature\` and assign it a value.
2. Use an \`if-else\` statement to print "It's hot!" if the temperature is above 30, 
and "It's cold!" if the temperature is 30 or below.`,
        starterCode: ``, 
        solution: `Solution:
        
let temperature = 25; // You can change this value to test different conditions

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's cold!");
}`,
        consoleOutput: `It's cold!`
    },

    {
        title: "Using Conditionals",
        description: "Let's practice using conditionals to determine if a number is even or odd.",
        task: `Task 17:


1. Declare a function named \`checkEvenOdd\` that takes one parameter: \`number\`.
2. Inside the function, use an \`if-else\` statement to check if the number is even or odd.
3. Print "The number is even" if the number is even, and "The number is odd" if the number is odd.
4. Call the \`checkEvenOdd\` function with a number of your choice.`,
        starterCode: ``, 
        solution: `Solution:
        
function checkEvenOdd(number) {
if (number % 2 === 0) {
console.log("The number is even");
}   else {
        console.log("The number is odd");
    }
}

checkEvenOdd(7); // Replace with your number`,
        consoleOutput: `The number is odd`
    },

    {
        title: "Using Conditionals",
        description: "Let's practice using conditionals to find the largest of three numbers.",
        task: `Task 18:


1. Declare a function named \`findLargest\` that takes three parameters: \`num1\`, \`num2\`, and \`num3\`.
2. Inside the function, use an \`if-else\` statement to determine which number is the largest.
3. Print the largest number to the console.
4. Call the \`findLargest\` function with three numbers of your choice.`,
        starterCode: ``, 
        solution: `Solution:
        
function findLargest(num1, num2, num3) {
if (num1 >= num2 && num1 >= num3) {
    console.log("The largest number is: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("The largest number is: " + num2);
} else {
    console.log("The largest number is: " + num3);
}
}

findLargest(10, 5, 8); // Replace with your numbers`,
        consoleOutput: `The largest number is: 10`
    },

    {
        title: "Looping with While Loop",
        description: "Loops allow you to repeat a block of code multiple times. The \`while\` loop repeats as long as a specified condition is true.",
        task: `Task 19:


1. Declare a variable named \`count\` and set it to 0.
2. Use a \`while\` loop to print the numbers from 0 to 4. Increment \`count\` by 1 in each iteration.`,
        starterCode: ``, 
        solution: `Solution:
        
let count = 0;

while (count < 5) {
    console.log(count);
    count++;
}`,
        consoleOutput: `0 1 2 3 4`
    },
    // Add other tasks here  
];

export const BeginnerTasks = () => {
    const [showSolution, setShowSolution] = useState(Array(tasks.length).fill(false));
    const [code, setCode] = useState(tasks.map(task => task.starterCode));
    const [consoleOutputs, setConsoleOutputs] = useState(Array(tasks.length).fill(''));

    const solutionRefs = useRef(tasks.map(() => React.createRef()));

    const toggleSolution = (index) => { 
        const updatedShowSolution = [...showSolution];
        updatedShowSolution[index] = !updatedShowSolution[index]; 
        setShowSolution(updatedShowSolution);

        if (!showSolution[index]) {
            setTimeout(() => {
                solutionRefs.current[index].current.scrollIntoView({  
                    behavior: 'smooth',
                    block: 'end',
                });
            }, 100);
        }
    };

    const handleCodeChange = (index, newCode) => {
        const updatedCode = [...code];
        updatedCode[index] = newCode;
        setCode(updatedCode);
    };

    const handleClearConsole = (index) => {
        setConsoleOutputs(prevOutputs => { 
            const newOutputs = [...prevOutputs];
            newOutputs[index] = ''; 
            return newOutputs;
        });
    };

    const handleClearEditor = (index) => {
        setCode(prevCode => {
            const newCode = [...prevCode];
            newCode[index] = tasks[index].starterCode;
            return newCode;
        });
    };

    const handleRunCode = (index) => { 
        const userCode = code[index];
        const customConsole = {
            log: (message) => {
                setConsoleOutputs(prevOutputs => {
                    const newOutputs = [...prevOutputs];
                    newOutputs[index] = `${newOutputs[index]}\n${message}`;
                    return newOutputs;
                });
            }
        };
        try {
            eval(userCode.replace(/console\.log/g, 'customConsole.log'));
        } catch (error) {
            customConsole.log(`Error: ${error.message}`); 
        }
    };

    return (
        <BeginnerTasksWrapper>
            <NavBar />
            <BeginnerTasksContainer>
                <h1>Beginner Tasks</h1>
                {tasks.map((task, index) => (
                    <div key={index}>
                        <h2 className={index > 0 ? "margin-top" : ""}>{task.title}</h2>
                        <p className="taskDescription">{task.description}</p> 
                        <pre className="taskTitle">
                            <TaskTitle>{task.task.split('\n')[0]}</TaskTitle>
                            {task.task.split('\n').slice(1).join('\n')}
                        </pre>
                        <CodeEditorContainer>
                            <AceEditor
                                mode="javascript" 
                                theme="monokai"
                                name={`editor_${index}`}  
                                value={code[index]}
                                onChange={(newCode) => handleCodeChange(index, newCode)}
                                fontSize={14} 
                                width="100%"
                                height="200px"  
                                setOptions={{ useWorker: false }}  
                            />   
                        </CodeEditorContainer>
                        <BeginnerTasksButtonContainer>
                            <button className="runCodeBtn" onClick={() => handleRunCode(index)}>Run Code</button> 
                            <button className="clearConsoleBtn" alt="clear code editor button" onClick={() => handleClearEditor(index)}>Clear Code</button>  
                            <button className="solutionBtn" alt="show solution toggle button" onClick={() => toggleSolution(index)}>
                                {showSolution[index] ? "Hide Solution" : "Show Solution"} 
                            </button>
                        </BeginnerTasksButtonContainer> 
                        <ConsoleOutputContainer>
                            <h3>Console Output:</h3>
                            <p className="console-output">{consoleOutputs[index]}</p>
                        </ConsoleOutputContainer>
                        <ClearConsoleBtnContainer>
                            <button className="clearConsoleBtn" onClick={() => handleClearConsole(index)}>Clear Console</button>
                        </ClearConsoleBtnContainer>
                        {showSolution[index] && ( 
                            <SolutionWrapper ref={solutionRefs.current[index]}>
                                <TaskSolutionContainer>
                                    <pre>{task.solution}</pre> 
                                    <pre>Expected Console Output: {task.consoleOutput}</pre>
                                </TaskSolutionContainer>
                            </SolutionWrapper>
                        )}  
                    </div>
                ))}
            </BeginnerTasksContainer>
        </BeginnerTasksWrapper>
    );
}; 