import React, { useState } from 'react';
import { LessonsWrapper, LessonsContainer, ContentContainer, Sidebar, Content, Dropdown, DropdownContent, StyledNavLink, StyledLink } from "./Lessons.styles";
import { NavBar } from "../Nav/Nav";

export const Lessons = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeLink, setActiveLink] = useState("");
    const [activeDropdownLink, setActiveDropdownLink] = useState("");

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
        setActiveLink(""); 
    };

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setActiveDropdown(null);
    };

    const handleDropdownLinkClick = (link) => {
        setActiveDropdownLink(link);
    };

    return (
        <LessonsWrapper>
            <NavBar />
            <div className="lessons_h3-container">
                <h1>Lessons</h1>
            </div>
            <LessonsContainer>
                <Sidebar>
                    <h2>Index</h2>
                    <StyledLink
                        to="#introduction"
                        className={activeLink === '#introduction' ? 'active' : ''}
                        onClick={() => handleLinkClick('#introduction')}
                    >
                        Introduction to JavaScript
                    </StyledLink>
                    <Dropdown className={activeDropdown === 'setup' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('setup')} className={activeDropdown === 'setup' ? 'active' : ''}>Setting Up Your Development Environment</div>
                        {activeDropdown === 'setup' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#setup-tools"
                                    className={activeDropdownLink === '#setup-tools' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#setup-tools')}
                                >
                                    Tools Needed
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#setup-installation"
                                    className={activeDropdownLink === '#setup-installation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#setup-installation')}
                                >
                                    Installation
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#setup-configuration"
                                    className={activeDropdownLink === '#setup-configuration' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#setup-configuration')}
                                >
                                    Configuration
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'variables' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('variables')} className={activeDropdown === 'variables' ? 'active' : ''}>Variables and Data Types</div>
                        {activeDropdown === 'variables' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#variables-declaration"
                                    className={activeDropdownLink === '#variables-declaration' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#variables-declaration')}
                                >
                                    Declaration
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#variables-types"
                                    className={activeDropdownLink === '#variables-types' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#variables-types')}
                                >
                                    Data Types
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#variables-usage"
                                    className={activeDropdownLink === '#variables-usage' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#variables-usage')}
                                >
                                    Usage
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'operators' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('operators')} className={activeDropdown === 'operators' ? 'active' : ''}>Basic Operators</div>
                        {activeDropdown === 'operators' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#operators-arithmetic"
                                    className={activeDropdownLink === '#operators-arithmetic' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#operators-arithmetic')}
                                >
                                    Arithmetic
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#operators-comparison"
                                    className={activeDropdownLink === '#operators-comparison' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#operators-comparison')}
                                >
                                    Comparison
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#operators-logical"
                                    className={activeDropdownLink === '#operators-logical' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#operators-logical')}
                                >
                                    Logical
                                </StyledNavLink>
                            </DropdownContent> 
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'controlStructures' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('controlStructures')} className={activeDropdown === 'controlStructures' ? 'active' : ''}>Control Structures</div>
                        {activeDropdown === 'controlStructures' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#controlStructures-ifElse"
                                    className={activeDropdownLink === '#controlStructures-ifElse' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#controlStructures-ifElse')}
                                >
                                    If/Else
                                </StyledNavLink> 
                                <StyledNavLink
                                    to="#controlStructures-switch"
                                    className={activeDropdownLink === '#controlStructures-switch' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#controlStructures-switch')}
                                >
                                    Switch
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'loops' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('loops')} className={activeDropdown === 'loops' ? 'active' : ''}>Loops</div>
                        {activeDropdown === 'loops' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#loops-for"
                                    className={activeDropdownLink === '#loops-for' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#loops-for')}
                                >
                                    For Loops
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#loops-while"
                                    className={activeDropdownLink === '#loops-while' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#loops-while')}
                                >
                                    While Loops
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'functions' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('functions')} className={activeDropdown === 'functions' ? 'active' : ''}>Functions</div>
                        {activeDropdown === 'functions' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#functions-declaration"
                                    className={activeDropdownLink === '#functions-declaration' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#functions-declaration')}
                                >
                                    Function Declaration
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#functions-expression"
                                    className={activeDropdownLink === '#functions-expression' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#functions-expression')}
                                >
                                    Function Expression
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#functions-arrow"
                                    className={activeDropdownLink === '#functions-arrow' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#functions-arrow')}
                                >
                                    Arrow Functions
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'objects' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('objects')} className={activeDropdown === 'objects' ? 'active' : ''}>Objects</div>
                        {activeDropdown === 'objects' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#objects-creation"
                                    className={activeDropdownLink === '#objects-creation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#objects-creation')}
                                >
                                    Object Creation
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#objects-methods"
                                    className={activeDropdownLink === '#objects-methods' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#objects-methods')}
                                >
                                    Methods
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#objects-prototypes"
                                    className={activeDropdownLink === '#objects-prototypes' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#objects-prototypes')}
                                >
                                    Prototypes
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'arrays' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('arrays')} className={activeDropdown === 'arrays' ? 'active' : ''}>Arrays</div>
                        {activeDropdown === 'arrays' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#arrays-creation"
                                    className={activeDropdownLink === '#arrays-creation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#arrays-creation')}
                                >
                                    Array Creation
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#arrays-methods"
                                    className={activeDropdownLink === '#arrays-methods' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#arrays-methods')}
                                >
                                    Array Methods
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#arrays-iteration"
                                    className={activeDropdownLink === '#arrays-iteration' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#arrays-iteration')}
                                >
                                    Iteration
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'events' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('events')} className={activeDropdown === 'events' ? 'active' : ''}>Events</div>
                        {activeDropdown === 'events' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#events-handling"
                                    className={activeDropdownLink === '#events-handling' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#events-handling')}
                                >
                                    Event Handling
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#events-listeners"
                                    className={activeDropdownLink === '#events-listeners' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#events-listeners')}
                                >
                                    Event Listeners
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#events-propagation"
                                    className={activeDropdownLink === '#events-propagation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#events-propagation')}
                                >
                                    Event Propagation
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'dom' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('dom')} className={activeDropdown === 'dom' ? 'active' : ''}>DOM Manipulation</div>
                        {activeDropdown === 'dom' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#dom-selection"
                                    className={activeDropdownLink === '#dom-selection' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#dom-selection')}
                                >
                                    Selecting Elements
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#dom-modification"
                                    className={activeDropdownLink === '#dom-modification' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#dom-modification')}
                                >
                                    Modifying Elements
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#dom-creation"
                                    className={activeDropdownLink === '#dom-creation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick('#dom-creation')}
                                >
                                    Creating Elements
                                </StyledNavLink>
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
