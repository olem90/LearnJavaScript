import React from 'react';
import { useRef, useState } from 'react';
import { LessonsWrapper, LessonsContainer, ContentContainer, Sidebar, Content, Dropdown, DropdownContent, StyledNavLink } from "./Lessons.styles";
import { NavBar } from "../Nav/Nav"; 
import { NavLink } from 'react-router-dom';

export const Lessons = () => {
/*
const [activeLink, setActiveLink] = useState('');
const [isSetupOpen, setIsSetupOpen] = useState(false);
const [isVariablesOpen, setIsVariablesOpen] = useState(false);
const [isOperatorsOpen, setIsOperatorsOpen] = useState(false);
const [isControlStructuresOpen, setIsControlStructuresOpen] = useState(false);
const [isLoopsOpen, setIsLoopsOpen] = useState(false);
const [isFunctionsOpen, setIsFunctionsOpen] = useState(false);
const [isScopeOpen, setIsScopeOpen] = useState(false);
const [isObjectsOpen, setIsObjectsOpen] = useState(false);
const [isArraysOpen, setIsArraysOpen] = useState(false);
const [isDOMOpen, setIsDOMOpen] = useState(false);
const [isEventsOpen, setIsEventsOpen] = useState(false);
const [isAsyncOpen, setIsAsyncOpen] = useState(false);
const [isErrorHandlingOpen, setIsErrorHandlingOpen] = useState(false);
const [isJSONOpen, setIsJSONOpen] = useState(false);
const [isES6Open, setIsES6Open] = useState(false);
const [isAPIsOpen, setIsAPIsOpen] = useState(false);

const setupToolsRef = useRef(null);
const setupInstallationRef = useRef(null);
const setupConfigurationRef = useRef(null);

const scrollToRef = (ref, link) => {
    setActiveLink(link);
    ref.current.scrollIntoView({ behavior: 'smooth' });
};

const toggleSetup = () => {
    setIsSetupOpen(!isSetupOpen);
};

const toggleVariables = () => {
    setIsVariablesOpen(!isVariablesOpen);
};

const toggleOperators = () => {
    setIsOperatorsOpen(!isOperatorsOpen);
};

const toggleControlStructures = () => {
    setIsControlStructuresOpen(!isControlStructuresOpen);
};

const toggleLoops = () => {
    setIsLoopsOpen(!isLoopsOpen);
};

const toggleFunctions = () => {
    setIsFunctionsOpen(!isFunctionsOpen);
};

const toggleScope = () => {
    setIsScopeOpen(!isScopeOpen);
};

const toggleObjects = () => {
    setIsObjectsOpen(!isObjectsOpen);
};

const toggleArrays = () => {
    setIsArraysOpen(!isArraysOpen);
};

const toggleDOM = () => {
    setIsDOMOpen(!isDOMOpen);
};

const toggleEvents = () => {
    setIsEventsOpen(!isEventsOpen);
};

const toggleAsync = () => {
    setIsAsyncOpen(!isAsyncOpen);
};

const toggleErrorHandling = () => {
    setIsErrorHandlingOpen(!isErrorHandlingOpen);
};

const toggleJSON = () => {
    setIsJSONOpen(!isJSONOpen);
};

const toggleES6 = () => {
    setIsES6Open(!isES6Open);
};

const toggleAPIs = () => {
    setIsAPIsOpen(!isAPIsOpen);
};
*/

const [activeDropdown, setActiveDropdown] = useState(null);
const [activeLink, setActiveLink] = useState('');

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
       /*  <LessonsWrapper>
            <NavBar />
            <div className="lessons_h3-container">
                <h1>Lessons</h1>
            </div>
            
            <LessonsContainer > 
                <Sidebar>
                    <h2>Index</h2> 
                    <a href="#introduction">1. Introduction to JavaScript</a>
                    <a href="#setup">2. Setting Up Your Development Environment</a>
                    <a href="#basic-syntax">3. Basic Syntax</a>
                    <a href="#operators">4. Operators</a>
                    <a href="#control-structures">5. Control Structures</a>
                    <a href="#loops">6. Loops</a>
                    <a href="#functions">7. Functions</a>
                    <a href="#objects">8. Objects</a>
                    <a href="#arrays">9. Arrays</a>
                    <a href="#events">10. Events</a>
                    <a href="#dom">11. DOM Manipulation</a>  
                </Sidebar>
                <Content>
                    <ContentContainer>
                    <h2 id="introduction">1. Introduction to JavaScript</h2>
                    <p>
                        JavaScript is a versatile programming language primarily used to 
                        create interactive and dynamic content on web pages. 
                        Unlike HTML and CSS, which are used to structure and style a webpage respectively, 
                        JavaScript adds behavior and interactivity.
                    </p>
                    <p>
                        JavaScript can be used for a variety of tasks:
                    </p> 
                    <ul> 
                        <li>Creating dynamic web pages</li>
                        <li>Validating form input</li>
                        <li>Building web applications</li>
                        <li>Manipulating the Document Object Model (DOM)</li>
                        <li>Fetching data from servers (AJAX)</li>
                    </ul>

                    <h2 id="setup">2. Setting Up Your Development Environment</h2>
                    <p>To start coding in JavaScript, you need two main tools:</p>
                    <ul>
                        <li><strong>A Code Editor:</strong> Visual Studio Code, Atom, or any other code editor.</li>
                        <li><strong>A Web Browser:</strong> Google Chrome, Firefox, or any modern browser with developer tools.</li>
                    </ul>

                    <h3>Your First JavaScript Program</h3>
                    <p>To write your first JavaScript code, follow these steps:</p>
                    <h3>Open Visual Studio Code</h3>
                    <p>Open Visual Studio Code on your computer.</p>

                    <h3>Open a Folder</h3>
                    <p><strong>Why Do This?</strong> Opening a folder in VSCode allows you to work on your project and manage all the files within that project from a single place. Think of it as creating a workspace where you can easily access all your project files.</p>
                    <p><strong>Steps to Open a Folder:</strong></p>
                    <ol>
                        <li><strong>Locate the "Start" Section:</strong> When you open VSCode, you'll see a "Start" section in the main window with options like "New File...", "Open File...", and "Open Folder...".</li>
                        <li><strong>Click "Open Folder...":</strong> Under the "Start" section, click on the "Open Folder..." button. This action will open a file explorer window that lets you browse your computer's files and folders.</li>
                        <li><strong>Navigate to the Desired Location:</strong> In the file explorer window, navigate to the location where you want to create your project folder. This could be your Desktop, Documents, or any other place you prefer to store your projects. To navigate, click on the folders in the file explorer until you reach the desired location.</li>
                        <li><strong>Create a New Folder (if needed):</strong> If you don't already have a folder for your project, you can create one. Look for an option to create a new folder (usually a button or right-click option in the file explorer window). Name your new folder something meaningful, like "MyFirstProject" or "JavaScriptIntro".</li>
                        <li><strong>Select the Folder:</strong> Once you've navigated to the desired location or created a new folder, click on the folder to select it. Click "Select Folder" or "Open" (depending on your operating system) to open the folder in VSCode. You should now see the folder name appear in the Explorer pane on the left side of VSCode, indicating that it's open and ready for you to add files.</li>
                    </ol>

                    <h3>Create the HTML File</h3>
                    <p><strong>Why Do This?</strong> Creating an HTML file is the first step to building a web page. This file will structure your web content and link to your JavaScript file.</p>
                    <p><strong>Steps to Create an HTML File:</strong></p>
                    <ol>
                        <li><strong>Locate the "New File" Option:</strong> Under the "Start" section in the main window of VSCode, click on the "New File..." button.</li>
                        <li><strong>Create and Name the File:</strong> A new untitled file will open in the editor. Save this file by selecting "File" &gt; "Save As" from the top menu. In the save dialog, navigate to the folder you opened earlier, name the file <code>index.html</code>, and click "Save". The new file will now appear in the Explorer pane on the left side of VSCode.</li>
                    </ol>

                    <h3>Write the HTML Code</h3>
                    <p><strong>Why Do This?</strong> Writing the code in the <code>index.html</code> file will allow you to create a basic HTML page that includes a reference to your JavaScript file.</p>
                    <pre>
                        {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Introduction</title>
    <script src="script.js" defer></script>
</head>
<body>
    <button onclick="showMessage()">Click Me!</button>
</body>
</html>`}
                    </pre>

                    <h3>Create the JavaScript File</h3>
                    <p><strong>Why Do This?</strong> Creating a separate JavaScript file allows you to keep your code organized and maintainable. This file will contain the JavaScript code that adds interactivity to your web page.</p>
                    <p><strong>Steps to Create a JavaScript File:</strong></p>
                    <ol>
                        <li><strong>Create a New File:</strong> In the Explorer pane, click on the "New File" icon (a blank sheet with a plus sign). Name the new file <code>script.js</code> and press Enter. The new file will open in the editor.</li>
                    </ol>

                    <h3>Write the JavaScript Code</h3>
                    <p><strong>Why Do This?</strong> Writing the code in the <code>script.js</code> file will define the behavior that you want to add to your web page.</p>
                    <pre>
                        {`function showMessage() {
    alert('Hello, World!');
}`}
                    </pre>

                    <h3>Save the Files</h3>
                    <p><strong>Why Do This?</strong> Saving the files ensures that your changes are stored on your computer and can be opened in a web browser.</p>
                    <p><strong>Steps to Save the Files:</strong></p>
                    <ol>
                        <li><strong>Save the HTML File:</strong> Click on the <code>index.html</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                        <li><strong>Save the JavaScript File:</strong> Click on the <code>script.js</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                    </ol>

                    <h3>Open the HTML File in a Web Browser</h3>
                    <p><strong>Why Do This?</strong> Opening the file in a web browser allows you to see your code in action.</p>
                    <p><strong>Steps to Open the File:</strong></p>
                    <ol>
                        <li><strong>Navigate to the Folder:</strong> Use your computer's file explorer to navigate to the folder where you saved the <code>index.html</code> file.</li>
                        <li><strong>Open the File:</strong> Double-click on the <code>index.html</code> file. This action will open the file in your default web browser.</li>
                    </ol>

                    <h3>Interact with the Web Page</h3>
                    <p><strong>Why Do This?</strong> Interacting with the web page lets you see the result of your code.</p>
                    <p><strong>Steps to Interact with the Web Page:</strong></p>
                    <ol>
                        <li><strong>See the Button:</strong> You should see a web page with a button that says "Click Me!".</li>
                        <li><strong>Click the Button:</strong> Click the button to see a pop-up message saying "Hello, World!".</li>
                    </ol>

                    </ContentContainer>
                    
                </Content>
            </LessonsContainer>
        </LessonsWrapper>
    )*/

/*
    <LessonsWrapper>
    <NavBar />
    <div className="lessons_h3-container">
        <h1>Lessons</h1>
    </div>
    <LessonsContainer>
        <Sidebar>
            <h2>Index</h2>
            <Dropdown onClick={toggleIntroduction}>
                1. Introduction to JavaScript
                {isIntroductionOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'introduction-overview')}
                            className={activeLink === 'introduction-overview' ? 'active' : ''}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionUsageRef, 'introduction-usage')}
                            className={activeLink === 'introduction-usage' ? 'active' : ''}
                        >
                            Usage
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionHistoryRef, 'introduction-history')}
                            className={activeLink === 'introduction-history' ? 'active' : ''}
                        >
                            History
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleSetup}>
                2. Setting Up Your Development Environment
                {isSetupOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(setupToolsRef, 'setup-tools')}
                            className={activeLink === 'setup-tools' ? 'active' : ''}
                        >
                            Tools Needed
                        </button>
                        <button
                            onClick={() => scrollToRef(setupInstallationRef, 'setup-installation')}
                            className={activeLink === 'setup-installation' ? 'active' : ''}
                        >
                            Installation
                        </button>
                        <button
                            onClick={() => scrollToRef(setupConfigurationRef, 'setup-configuration')}
                            className={activeLink === 'setup-configuration' ? 'active' : ''}
                        >
                            Configuration
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleBasicSyntax}>
                3. Basic Syntax
                {isBasicSyntaxOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'basic-syntax-introduction')}
                            className={activeLink === 'basic-syntax-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'basic-syntax-variables')}
                            className={activeLink === 'basic-syntax-variables' ? 'active' : ''}
                        >
                            Variables
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'basic-syntax-data-types')}
                            className={activeLink === 'basic-syntax-data-types' ? 'active' : ''}
                        >
                            Data Types
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleOperators}>
                4. Operators
                {isOperatorsOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'operators-arithmetic')}
                            className={activeLink === 'operators-arithmetic' ? 'active' : ''}
                        >
                            Arithmetic
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'operators-comparison')}
                            className={activeLink === 'operators-comparison' ? 'active' : ''}
                        >
                            Comparison
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'operators-logical')}
                            className={activeLink === 'operators-logical' ? 'active' : ''}
                        >
                            Logical
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleControlStructures}>
                5. Control Structures
                {isControlStructuresOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'control-structures-if')}
                            className={activeLink === 'control-structures-if' ? 'active' : ''}
                        >
                            If Statements
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'control-structures-switch')}
                            className={activeLink === 'control-structures-switch' ? 'active' : ''}
                        >
                            Switch Statements
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleLoops}>
                6. Loops
                {isLoopsOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'loops-for')}
                            className={activeLink === 'loops-for' ? 'active' : ''}
                        >
                            For Loops
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'loops-while')}
                            className={activeLink === 'loops-while' ? 'active' : ''}
                        >
                            While Loops
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleFunctions}>
                7. Functions
                {isFunctionsOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'functions-introduction')}
                            className={activeLink === 'functions-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'functions-parameters')}
                            className={activeLink === 'functions-parameters' ? 'active' : ''}
                        >
                            Parameters
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'functions-return')}
                            className={activeLink === 'functions-return' ? 'active' : ''}
                        >
                            Return Values
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleObjects}>
                8. Objects
                {isObjectsOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'objects-introduction')}
                            className={activeLink === 'objects-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'objects-properties')}
                            className={activeLink === 'objects-properties' ? 'active' : ''}
                        >
                            Properties
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'objects-methods')}
                            className={activeLink === 'objects-methods' ? 'active' : ''}
                        >
                            Methods
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleArrays}>
                9. Arrays
                {isArraysOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'arrays-introduction')}
                            className={activeLink === 'arrays-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'arrays-operations')}
                            className={activeLink === 'arrays-operations' ? 'active' : ''}
                        >
                            Operations
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'arrays-methods')}
                            className={activeLink === 'arrays-methods' ? 'active' : ''}
                        >
                            Methods
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleEvents}>
                10. Events
                {isEventsOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'events-introduction')}
                            className={activeLink === 'events-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'events-handling')}
                            className={activeLink === 'events-handling' ? 'active' : ''}
                        >
                            Event Handling
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
            <Dropdown onClick={toggleDOM}>
                11. DOM Manipulation
                {isDOMOpen && (
                    <DropdownContent>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'dom-introduction')}
                            className={activeLink === 'dom-introduction' ? 'active' : ''}
                        >
                            Introduction
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'dom-selection')}
                            className={activeLink === 'dom-selection' ? 'active' : ''}
                        >
                            Element Selection
                        </button>
                        <button
                            onClick={() => scrollToRef(introductionOverviewRef, 'dom-manipulation')}
                            className={activeLink === 'dom-manipulation' ? 'active' : ''}
                        >
                            Element Manipulation
                        </button>
                    </DropdownContent>
                )}
            </Dropdown>
        </Sidebar>
        <Content>
            <ContentContainer>
                <h2 ref={introductionOverviewRef}>1. Introduction to JavaScript</h2>
                <p>
                    Welcome to the world of JavaScript! 🌐 If you're here, it means you're ready to dive into the exciting and dynamic world of web development. So, what exactly is JavaScript? Let's break it down!
                </p>
                <p>
                    JavaScript is like the engine in your car – while HTML and CSS build the car's structure and paint it beautifully, JavaScript is what makes the car move. It's a powerful programming language used to add interactivity and functionality to web pages. Without JavaScript, websites would be static and boring. With JavaScript, they come alive!
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

                <h2 ref={setupToolsRef}>2. Setting Up Your Development Environment</h2>
                <p>To start coding in JavaScript, you need two main tools:</p>
                <ul>
                    <li><strong>A Code Editor:</strong> Visual Studio Code, Atom, or any other code editor.</li>
                    <li><strong>A Web Browser:</strong> Google Chrome, Firefox, or any modern browser with developer tools.</li>
                </ul>

                <h3>Your First JavaScript Program</h3>
                <p>To write your first JavaScript code, follow these steps:</p>
                <h3>Open Visual Studio Code</h3>
                <p>Open Visual Studio Code on your computer.</p>

                <h3>Open a Folder</h3>
                <p><strong>Why Do This?</strong> Opening a folder in VSCode allows you to work on your project and manage all the files within that project from a single place. Think of it as creating a workspace where you can easily access all your project files.</p>
                <p><strong>Steps to Open a Folder:</strong></p>
                <ol>
                    <li><strong>Locate the "Start" Section:</strong> When you open VSCode, you'll see a "Start" section in the main window with options like "New File...", "Open File...", and "Open Folder...".</li>
                    <li><strong>Click "Open Folder...":</strong> Under the "Start" section, click on the "Open Folder..." button. This action will open a file explorer window that lets you browse your computer's files and folders.</li>
                    <li><strong>Navigate to the Desired Location:</strong> In the file explorer window, navigate to the location where you want to create your project folder. This could be your Desktop, Documents, or any other place you prefer to store your projects. To navigate, click on the folders in the file explorer until you reach the desired location.</li>
                    <li><strong>Create a New Folder (if needed):</strong> If you don't already have a folder for your project, you can create one. Look for an option to create a new folder (usually a button or right-click option in the file explorer window). Name your new folder something meaningful, like "MyFirstProject" or "JavaScriptIntro".</li>
                    <li><strong>Select the Folder:</strong> Once you've navigated to the desired location or created a new folder, click on the folder to select it. Click "Select Folder" or "Open" (depending on your operating system) to open the folder in VSCode. You should now see the folder name appear in the Explorer pane on the left side of VSCode, indicating that it's open and ready for you to add files.</li>
                </ol>

                <h3>Create the HTML File</h3>
                <p><strong>Why Do This?</strong> Creating an HTML file is the first step to building a web page. This file will structure your web content and link to your JavaScript file.</p>
                <p><strong>Steps to Create an HTML File:</strong></p>
                <ol>
                    <li><strong>Locate the "New File" Option:</strong> In the Explorer pane on the left side of VSCode, right-click on the open folder and select "New File".</li>
                    <li><strong>Create and Name the File:</strong> Name the new file <code>index.html</code> and press Enter. The new file will now appear in the Explorer pane and open in the editor.</li>
                </ol>

                <h3>Write the HTML Code</h3>
                <p><strong>Why Do This?</strong> Writing the code in the <code>index.html</code> file will allow you to create a basic HTML page that includes a reference to your JavaScript file.</p>
                <pre>
                    {`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
<title>JavaScript Introduction</title>
<script src="script.js" defer></script>
</head>
<body>
<button onclick="showMessage()">Click Me!</button> 
</body>
</html>`}
                </pre>

                <h3>Create the JavaScript File</h3>
                <p><strong>Why Do This?</strong> Creating a separate JavaScript file allows you to keep your code organized and maintainable. This file will contain the JavaScript code that adds interactivity to your web page.</p>
                <p><strong>Steps to Create a JavaScript File:</strong></p>
                <ol>
                    <li><strong>Create a New File:</strong> In the Explorer pane, right-click on the open folder and select "New File". Name the new file <code>script.js</code> and press Enter. The new file will open in the editor.</li>
                </ol>

                <h3>Write the JavaScript Code</h3>
                <p><strong>Why Do This?</strong> Writing the code in the <code>script.js</code> file will define the behavior that you want to add to your web page.</p>
                <pre>
                    {`function showMessage() {
alert('Hello, World!');
}`}
                </pre>

                <h3>Save the Files</h3>
                <p><strong>Why Do This?</strong> Saving the files ensures that your changes are stored on your computer and can be opened in a web browser.</p>
                <p><strong>Steps to Save the Files:</strong></p>
                <ol>
                    <li><strong>Save the HTML File:</strong> Click on the <code>index.html</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                    <li><strong>Save the JavaScript File:</strong> Click on the <code>script.js</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                </ol>

                <h3>Open the HTML File in a Web Browser</h3>
                <p><strong>Why Do This?</strong> Opening the file in a web browser allows you to see your code in action.</p>
                <p><strong>Steps to Open the File:</strong></p>
                <ol>
                    <li><strong>Navigate to the Folder:</strong> Use your computer's file explorer to navigate to the folder where you saved the <code>index.html</code> file.</li>
                    <li><strong>Open the File:</strong> Double-click on the <code>index.html</code> file. This action will open the file in your default web browser.</li>
                </ol>

                <h3>Interact with the Web Page</h3>
                <p><strong>Why Do This?</strong> Interacting with the web page lets you see the result of your code.</p>
                <p><strong>Steps to Interact with the Web Page:</strong></p>
                <ol>
                    <li><strong>See the Button:</strong> You should see a web page with a button that says "Click Me!".</li>
                    <li><strong>Click the Button:</strong> Click the button to see a pop-up message saying "Hello, World!".</li>
                </ol>
            </ContentContainer>
        </Content>
    </LessonsContainer>
</LessonsWrapper>
) */


<LessonsWrapper>
            <NavBar />
            <div className="lessons_h3-container">
                <h1>Lessons</h1>
            </div>
            <LessonsContainer>
                <Sidebar>
                    <h2>Index</h2>
                    <StyledNavLink to="#introduction" activeClassName="active" onClick={() => handleLinkClick('#introduction')}
                        className={activeLink === '#introduction' ? 'active' : ''}>
                        Introduction to JavaScript
                    </StyledNavLink>
                    <Dropdown onClick={() => toggleDropdown('setup')} className={activeDropdown === 'setup' ? 'active' : ''}>
                        Setting Up Your Development Environment
                        {activeDropdown === 'setup' && (
                            <DropdownContent>
                                <StyledNavLink to="#setup-tools">Tools Needed</StyledNavLink>
                                <StyledNavLink to="#setup-installation">Installation</StyledNavLink>
                                <StyledNavLink to="#setup-configuration">Configuration</StyledNavLink> 
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('variables')} className={activeDropdown === 'variables' ? 'active' : ''}>
                        Variables and Data Types
                        {activeDropdown === 'variables' && (
                            <DropdownContent>
                                <StyledNavLink to="#variables-declaration">Declaration</StyledNavLink>
                                <StyledNavLink to="#variables-types">Data Types</StyledNavLink>
                                <StyledNavLink to="#variables-usage">Usage</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('operators')} className={activeDropdown === 'operators' ? 'active' : ''}>
                        Basic Operators
                        {activeDropdown === 'operators' && (
                            <DropdownContent>
                                <StyledNavLink to="#operators-arithmetic">Arithmetic</StyledNavLink>
                                <StyledNavLink to="#operators-comparison">Comparison</StyledNavLink>
                                <StyledNavLink to="#operators-logical">Logical</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('controlStructures')} className={activeDropdown === 'controlStructures' ? 'active' : ''}>
                        Control Structures
                        {activeDropdown === 'controlStructures' && (
                            <DropdownContent>
                                <StyledNavLink to="#controlStructures-ifElse">If/Else</StyledNavLink>
                                <StyledNavLink to="#controlStructures-switch">Switch</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown> 
                    <Dropdown onClick={() => toggleDropdown('loops')} className={activeDropdown === 'loops' ? 'active' : ''}>
                        Loops
                        {activeDropdown === 'loops' && (
                            <DropdownContent>
                                <StyledNavLink to="#loops-for">For Loops</StyledNavLink>
                                <StyledNavLink to="#loops-while">While Loops</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('functions')} className={activeDropdown === 'functions' ? 'active' : ''}>
                        Functions
                        {activeDropdown === 'functions' && (
                            <DropdownContent>
                                <StyledNavLink to="#functions-declaration">Function Declaration</StyledNavLink>
                                <StyledNavLink to="#functions-expression">Function Expression</StyledNavLink>
                                <StyledNavLink to="#functions-arrow">Arrow Functions</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('objects')} className={activeDropdown === 'objects' ? 'active' : ''}>
                        Objects
                        {activeDropdown === 'objects' && (
                            <DropdownContent>
                                <StyledNavLink to="#objects-creation">Object Creation</StyledNavLink>
                                <StyledNavLink to="#objects-methods">Methods</StyledNavLink>
                                <StyledNavLink to="#objects-prototypes">Prototypes</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('arrays')} className={activeDropdown === 'arrays' ? 'active' : ''}>
                        Arrays
                        {activeDropdown === 'arrays' && (
                            <DropdownContent>
                                <StyledNavLink to="#arrays-creation">Array Creation</StyledNavLink>
                                <StyledNavLink to="#arrays-methods">Array Methods</StyledNavLink>
                                <StyledNavLink to="#arrays-iteration">Iteration</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('events')} className={activeDropdown === 'events' ? 'active' : ''}>
                        Events
                        {activeDropdown === 'events' && (
                            <DropdownContent>
                                <StyledNavLink to="#events-handling">Event Handling</StyledNavLink>
                                <StyledNavLink to="#events-listeners">Event Listeners</StyledNavLink>
                                <StyledNavLink to="#events-propagation">Event Propagation</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown onClick={() => toggleDropdown('dom')} className={activeDropdown === 'dom' ? 'active' : ''}>
                        DOM Manipulation
                        {activeDropdown === 'dom' && (
                            <DropdownContent>
                                <StyledNavLink to="#dom-selection">Selecting Elements</StyledNavLink>
                                <StyledNavLink to="#dom-modification">Modifying Elements</StyledNavLink>
                                <StyledNavLink to="#dom-creation">Creating Elements</StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                </Sidebar>
                <Content>
                    <ContentContainer>
                        <h2 id="introduction">1. Introduction to JavaScript</h2>
                        <p>
                            Welcome to the world of JavaScript! 🌐 If you're here, it means you're ready to dive into the exciting and dynamic world of web development. So, what exactly is JavaScript? Let's break it down!
                        </p>
                        <p>
                            JavaScript is like the engine in your car – while HTML and CSS build the car's structure and paint it beautifully, JavaScript is what makes the car move. It's a powerful programming language used to add interactivity and functionality to web pages. Without JavaScript, websites would be static and boring. With JavaScript, they come alive!
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

                        <h2 id="setup-tools">2. Setting Up Your Development Environment</h2>
                        <h3 id="setup-tools">Tools Needed</h3>
                        <p>To start coding in JavaScript, you need two main tools:</p>
                        <ul>
                            <li><strong>A Code Editor:</strong> Visual Studio Code, Atom, or any other code editor.</li>
                            <li><strong>A Web Browser:</strong> Google Chrome, Firefox, or any modern browser with developer tools.</li>
                        </ul>

                        <h3 id="setup-installation">Installation</h3>
                        <p>To write your first JavaScript code, follow these steps:</p>
                        <h3>Open Visual Studio Code</h3>
                        <p>Open Visual Studio Code on your computer.</p>

                        <h3>Open a Folder</h3>
                        <p><strong>Why Do This?</strong> Opening a folder in VSCode allows you to work on your project and manage all the files within that project from a single place. Think of it as creating a workspace where you can easily access all your project files.</p>
                        <p><strong>Steps to Open a Folder:</strong></p>
                        <ol>
                            <li><strong>Locate the "Start" Section:</strong> When you open VSCode, you'll see a "Start" section in the main window with options like "New File...", "Open File...", and "Open Folder...".</li>
                            <li><strong>Click "Open Folder...":</strong> Under the "Start" section, click on the "Open Folder..." button. This action will open a file explorer window that lets you browse your computer's files and folders.</li>
                            <li><strong>Navigate to the Desired Location:</strong> In the file explorer window, navigate to the location where you want to create your project folder. This could be your Desktop, Documents, or any other place you prefer to store your projects. To navigate, click on the folders in the file explorer until you reach the desired location.</li>
                            <li><strong>Create a New Folder (if needed):</strong> If you don't already have a folder for your project, you can create one. Look for an option to create a new folder (usually a button or right-click option in the file explorer window). Name your new folder something meaningful, like "MyFirstProject" or "JavaScriptIntro".</li>
                            <li><strong>Select the Folder:</strong> Once you've navigated to the desired location or created a new folder, click on the folder to select it. Click "Select Folder" or "Open" (depending on your operating system) to open the folder in VSCode. You should now see the folder name appear in the Explorer pane on the left side of VSCode, indicating that it's open and ready for you to add files.</li>
                        </ol>

                        <h3 id="setup-configuration">Configuration</h3>
                        <p><strong>Why Do This?</strong> Creating an HTML file is the first step to building a web page. This file will structure your web content and link to your JavaScript file.</p>
                        <p><strong>Steps to Create an HTML File:</strong></p>
                        <ol>
                            <li><strong>Locate the "New File" Option:</strong> In the Explorer pane on the left side of VSCode, right-click on the open folder and select "New File".</li>
                            <li><strong>Create and Name the File:</strong> Name the new file <code>index.html</code> and press Enter. The new file will now appear in the Explorer pane and open in the editor.</li>
                        </ol>

                        <h3>Write the HTML Code</h3>
                        <p><strong>Why Do This?</strong> Writing the code in the <code>index.html</code> file will allow you to create a basic HTML page that includes a reference to your JavaScript file.</p>
                        <pre>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Introduction</title>
    <script src="script.js" defer></script>
</head>
<body>
    <button onclick="showMessage()">Click Me!</button>
</body>
</html>`}
                        </pre>

                        <h3>Create the JavaScript File</h3>
                        <p><strong>Why Do This?</strong> Creating a separate JavaScript file allows you to keep your code organized and maintainable. This file will contain the JavaScript code that adds interactivity to your web page.</p>
                        <p><strong>Steps to Create a JavaScript File:</strong></p>
                        <ol>
                            <li><strong>Create a New File:</strong> In the Explorer pane, right-click on the open folder and select "New File". Name the new file <code>script.js</code> and press Enter. The new file will open in the editor.</li>
                        </ol>

                        <h3>Write the JavaScript Code</h3>
                        <p><strong>Why Do This?</strong> Writing the code in the <code>script.js</code> file will define the behavior that you want to add to your web page.</p>
                        <pre>
                            {`function showMessage() {
    alert('Hello, World!');
}`}
                        </pre>

                        <h3>Save the Files</h3>
                        <p><strong>Why Do This?</strong> Saving the files ensures that your changes are stored on your computer and can be opened in a web browser.</p>
                        <p><strong>Steps to Save the Files:</strong></p>
                        <ol>
                            <li><strong>Save the HTML File:</strong> Click on the <code>index.html</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                            <li><strong>Save the JavaScript File:</strong> Click on the <code>script.js</code> tab in VSCode. Click on "File" in the top menu of VSCode and select "Save", or simply press <code>Ctrl + S</code> (Windows) or <code>Cmd + S</code> (Mac).</li>
                        </ol>

                        <h3>Open the HTML File in a Web Browser</h3>
                        <p><strong>Why Do This?</strong> Opening the file in a web browser allows you to see your code in action.</p>
                        <p><strong>Steps to Open the File:</strong></p>
                        <ol>
                            <li><strong>Navigate to the Folder:</strong> Use your computer's file explorer to navigate to the folder where you saved the <code>index.html</code> file.</li>
                            <li><strong>Open the File:</strong> Double-click on the <code>index.html</code> file. This action will open the file in your default web browser.</li>
                        </ol>

                        <h3>Interact with the Web Page</h3>
                        <p><strong>Why Do This?</strong> Interacting with the web page lets you see the result of your code.</p>
                        <p><strong>Steps to Interact with the Web Page:</strong></p>
                        <ol>
                            <li><strong>See the Button:</strong> You should see a web page with a button that says "Click Me!".</li>
                            <li><strong>Click the Button:</strong> Click the button to see a pop-up message saying "Hello, World!".</li>
                        </ol>
                    </ContentContainer>
                </Content>
            </LessonsContainer>
        </LessonsWrapper>
    );  

 
};        