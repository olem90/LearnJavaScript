import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { BeginnerTasksWrapper, BeginnerTasksContainer, CodeEditorContainer, 
    BeginnerTasksButtonContainer, ConsoleOutputContainer, TaskSolutionContainer, TaskTitle } from "./BeginnerTasks.styles";
import { NavBar } from "../Nav/Nav";

const tasks = [
    {
        title: "Introducing Yourself with JavaScript Variables", 
        description: "Let's start by creating some simple variables to introduce yourself!", 
        task: ` Task 1: 

            1. Declare a variable named 'myName' and set it to your name. 
            2. Declare another variable named 'myAge' and set it to your age.
            3. Print both variables to the console to see the results.`,
        starterCode: ``,  
        solution: `Solution:
        
let myName = "John Doe"; // Replace with your name 
let myAge = 25; // Replace with your age 
  
console.log("My name is " + myName);   
console.log("I am " + myAge + " years old");`,
        consoleOutput: `My name is John Doe
                         I am 25 years old`
    },  
    {
        title: "Playing with Numbers: Basic Math Operations",
        description: "Let's practice some basic math operations with JavaScript variables!",
        task: ` Task 2: 

            1. Declare two variables named \`num1\` and \`num2\` and assign them any numbers you like.
            2. Create variables to store the results of adding, subtracting, multiplying, and dividing these two numbers.
            3. Print all the results to the console to see the magic of JavaScript math!`,
        starterCode: ``,  
        solution: `const num1 = 20;
const num2 = 3;
        
const added = num1 + num2;
const subtracted = num1 - num2;
const multiplied = num1 * num2;
const divided = num1 / num2;

console.log("added: " + added);
console.log("subtracted: " + subtracted);
console.log("multiplied: " + multiplied);
console.log("divided: " + divided);`,
        consoleOutput: `added: 23
                         subtracted: 17
                         multiplied: 60
                         divided: 6.666666666666667`
    }, 
    // Add other tasks here  
];

export const BeginnerTasks = () => {
    const [showSolution, setShowSolution] = useState(Array(tasks.length).fill(false));
    const [code, setCode] = useState(tasks.map(task => task.starterCode));
    const [consoleOutput, setConsoleOutput] = useState('');

    const toggleSolution = (index) => {
        const updatedShowSolution = [...showSolution];
        updatedShowSolution[index] = !updatedShowSolution[index];
        setShowSolution(updatedShowSolution);
    };

    const handleCodeChange = (index, newCode) => {
        const updatedCode = [...code];
        updatedCode[index] = newCode;
        setCode(updatedCode);
    };

    const handleRunCode = (index) => {
        const userCode = code[index];
        setConsoleOutput(""); // Clear previous output
        const customConsole = {
            log: (message) => {
                setConsoleOutput((prevOutput) => `${prevOutput}\n${message}`);
            }
        };
        try {
            // eslint-disable-next-line no-eval
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
                        <p>{task.description}</p>
                        <pre>
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
                            <button className="solutionBtn" onClick={() => toggleSolution(index)}>
                                {showSolution[index] ? "Hide Solution" : "Show Solution"}
                            </button>
                        </BeginnerTasksButtonContainer>
                        <ConsoleOutputContainer>
                            <h3>Console Output:</h3>
                            <p className="console-output">{consoleOutput}</p> 
                        </ConsoleOutputContainer>
                        {showSolution[index] && (
                            <TaskSolutionContainer>
                                <pre>{task.solution}</pre>
                                <pre>Expected Console Output: {task.consoleOutput}</pre>
                            </TaskSolutionContainer>
                        )}
                    </div>
                ))} 
 
            </BeginnerTasksContainer>
           
            
        </BeginnerTasksWrapper>
    );
}; 