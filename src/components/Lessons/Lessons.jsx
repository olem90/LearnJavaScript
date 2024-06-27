import React from 'react';
import { LessonsWrapper, LessonsContainer, ContentContainer, Sidebar, Content } from "./Lessons.styles";
import { NavBar } from "../Nav/Nav";

export const Lessons = () => {
    return (
        <LessonsWrapper>
            <NavBar />
            <h1>Lessons</h1>
            <LessonsContainer >
                <Sidebar>
                    <h2>Index</h2>
                    <a href="#introduction">1. Introduction to JavaScript</a>
                    <a href="#setup">2. Setting Up Your Development Environment</a>
                    <a href="#first-program">3. Your First JavaScript Program</a>
                    <a href="#basic-syntax">4. Basic Syntax</a>
                    <a href="#operators">5. Operators</a>
                    <a href="#control-structures">6. Control Structures</a>
                    <a href="#loops">7. Loops</a>
                    <a href="#functions">8. Functions</a>
                    <a href="#objects">9. Objects</a>
                    <a href="#arrays">10. Arrays</a>
                    <a href="#events">11. Events</a>
                    <a href="#dom">12. DOM Manipulation</a> 
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
                        <li><strong>A Code Editor:</strong> Visual Studio Code, Sublime Text, or any other code editor.</li>
                        <li><strong>A Web Browser:</strong> Google Chrome, Firefox, or any modern browser with developer tools.</li>
                    </ul>

                    <h2 id="first-program">3. Your First JavaScript Program</h2>
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
    )
}
   