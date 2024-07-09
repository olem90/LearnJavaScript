import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const DomManipulation = () => {

    return (
        <ContentContainer>
            <h2 id="dom-manipulation">10. DOM Manipulation</h2>

            <h3 id="dom-introduction">Introduction to the DOM</h3>
            <p>
                The Document Object Model (DOM) is like a tree structure that represents the content of a web page. It allows JavaScript to interact with and manipulate HTML elements dynamically.
            </p>

            <h3 id="dom-selection">Selecting Elements</h3>
            <p>
                To manipulate an element, you first need to select it. You can use methods like <code>getElementById</code>, <code>getElementsByClassName</code>, <code>getElementsByTagName</code>, and <code>querySelector</code>.
            </p>
            <pre>
                {`// Select an element by ID
const elementById = document.getElementById('myElement');

// Select elements by class name
const elementsByClass = document.getElementsByClassName('myClass');

// Select elements by tag name
const elementsByTag = document.getElementsByTagName('div');

// Select an element using a CSS selector
const elementBySelector = document.querySelector('.myClass');`}
            </pre>

            <h3 id="dom-modification">Modifying Elements</h3>
            <p>
                Once you've selected an element, you can modify it. You can change its content, style, attributes, and more.
            </p>
            <pre>
                {`const element = document.getElementById('myElement');

// Change content
element.textContent = 'Hello, World!';

// Change style
element.style.color = 'red';

// Change attributes
element.setAttribute('title', 'This is a title');`}
            </pre>
            <p>
                Imagine your web page as a garden, and each HTML element as a plant. Using DOM manipulation, you can water the plants (change content), paint them different colors (change styles), or label them with names (change attributes).
            </p>

            <h3 id="dom-creation">Creating Elements</h3>
            <p>
                You can create new elements and add them to the DOM. This is useful for dynamic content generation, like adding new items to a list.
            </p>
            <pre>
                {`// Create a new element
const newElement = document.createElement('div');
newElement.textContent = 'I am a new element';

// Append the new element to the body
document.body.appendChild(newElement);`}
            </pre>

            <h3 id="dom-removal">Removing Elements</h3>
            <p>
                Removing elements is just as easy. You select the element and call the <code>remove</code> method.
            </p>
            <pre>
                {`const elementToRemove = document.getElementById('myElement');
elementToRemove.remove();`}
            </pre>

            <h3 id="dom-usecase">Real Use Case: Dynamic To-Do List</h3>
            <p>
                Let's create a dynamic to-do list where users can add, complete, and remove tasks.
            </p>
            <pre>
                {`const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Create a new list item
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;

    // Create a complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        newTodo.style.textDecoration = 'line-through';
    });

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTodo);
    });

    // Append buttons to the list item
    newTodo.appendChild(completeButton);
    newTodo.appendChild(deleteButton);

    // Append the list item to the to-do list
    todoList.appendChild(newTodo);

    // Clear the input field
    todoInput.value = '';
});`}
            </pre>
            <p>
                In this example, users can add new tasks, mark them as completed, and delete them. This demonstrates various DOM manipulation techniques like element creation, modification, and removal.
            </p>

            <h3>Task: Create a Shopping List</h3>
            <p>
                Now it's your turn! Create a shopping list application where users can add items, mark them as bought, and remove items from the list.
            </p>
            <pre>
                {`const shoppingForm = document.getElementById('shoppingForm');
const shoppingInput = document.getElementById('shoppingInput');
const shoppingList = document.getElementById('shoppingList');

shoppingForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = shoppingInput.value;

    // Create a bought button
    const boughtButton = document.createElement('button');
    boughtButton.textContent = 'Bought';
    boughtButton.addEventListener('click', function() {
        newItem.style.textDecoration = 'line-through';
    });

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        shoppingList.removeChild(newItem);
    });

    // Append buttons to the list item
    newItem.appendChild(boughtButton);
    newItem.appendChild(deleteButton);

    // Append the list item to the shopping list
    shoppingList.appendChild(newItem);

    // Clear the input field
    shoppingInput.value = '';
});`}
            </pre>
            <p>
                Awesome job! You've created a shopping list application that allows users to add, mark as bought, and delete items using DOM manipulation. Keep practicing to master your DOM manipulation skills!
            </p>
        </ContentContainer>
    );
};
