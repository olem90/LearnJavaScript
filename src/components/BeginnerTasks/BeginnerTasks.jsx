import React, { useState } from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { BeginnerTasksWrapper, BeginnerTasksContainer, CodeEditorContainer, BeginnerTasksButtonContainer, ConsoleOutputContainer } from "./BeginnerTasks.styles";
import { NavBar } from "../Nav/Nav";

const tasks = [
    {
        title: "Declare and Use Variables",
        description: "Learn how to declare and use variables in JavaScript.", 
        task: ` Task 1:  
        Declare a variable named \`myName\` and assign your name to it. 
        Then, create another variable named \`myAge\` and assign your age to it. Finally, print both variables to the console.`,
        starterCode: ``,  
        solution: `Solution:
        
let myName = "John Doe"; // Replace with your name 
let myAge = 25; // Replace with your age 
  
console.log("My name is " + myName);  
console.log("I am " + myAge + " years old");`
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
                        <h2>{task.title}</h2>
                        <p>{task.description}</p>
                        <pre>{task.task}</pre>
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
                        {showSolution[index] && <pre className="task-solution">{task.solution}</pre>}
                    </div>
                ))} 
 
            </BeginnerTasksContainer>
           
            
        </BeginnerTasksWrapper>
    );
}; 