import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Events = () => {

    return (
        <ContentContainer>
            <h2 id="events">9. Events</h2>

            <h3 id="events-introduction">Introduction to Events</h3>
            <p>
                Events are actions or occurrences that happen in the browser, such as when a user clicks a button, submits a form, or presses a key. JavaScript allows you to respond to these events by using event listeners.
            </p>

            <h3 id="events-handling">Event Handling</h3>
            <p>
                You can handle events in JavaScript by using the <code>addEventListener</code> method, which attaches an event handler to a specified element.
            </p>
            <pre>
                {`const button = document.getElementById('myButton');
button.addEventListener('click', function() {
    alert('Button clicked!');
});`}
            </pre>
            <p>
                In this example, an event listener is attached to a button with the ID <code>myButton</code>. When the button is clicked, an alert message is displayed.
            </p>

            <h3 id="events-listeners">Event Listeners</h3>
            <p>
                Event listeners can be used to handle various types of events, such as <code>click</code>, <code>mouseover</code>, <code>mouseout</code>, <code>keydown</code>, and more.
            </p>
            <pre>
                {`const inputField = document.getElementById('myInput');
inputField.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);
});`}
            </pre>
            <p>
                In this example, an event listener is attached to an input field with the ID <code>myInput</code>. When a key is pressed, the key value is logged to the console.
            </p>

            <h3 id="events-propagation">Event Propagation</h3>
            <p>
                Event propagation is the process by which an event travels through the DOM tree. It consists of three phases: capturing, target, and bubbling.
            </p>
            <p>
                You can control event propagation by using the <code>stopPropagation</code> method to prevent the event from propagating further.
            </p>
            <pre>
                {`const parentDiv = document.getElementById('parentDiv');
const childDiv = document.getElementById('childDiv');

parentDiv.addEventListener('click', function() {
    alert('Parent DIV clicked!');
});

childDiv.addEventListener('click', function(event) {
    event.stopPropagation();
    alert('Child DIV clicked!');
});`}
            </pre>
            <p>
                In this example, clicking the child <code>div</code> triggers an alert, but the event does not propagate to the parent <code>div</code> because <code>stopPropagation</code> is called.
            </p>

            <h3 id="events-preventdefault">Preventing Default Actions</h3>
            <p>
                The <code>preventDefault</code> method can be used to prevent the default action of an event from occurring.
            </p>
            <pre>
                {`const link = document.getElementById('myLink');
link.addEventListener('click', function(event) {
    event.preventDefault();
    alert('Link click prevented!');
});`}
            </pre>
            <p>
                In this example, clicking the link does not navigate to the URL because <code>preventDefault</code> is called.
            </p>

            <h3 id="events-usecase">Real Use Case: Interactive Form</h3>
            <p>
                Imagine you're building a form for user registration. You can use events to provide instant feedback to the user and validate the form before submission.
            </p>
            <pre>
                {`const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (usernameInput.value === '' || passwordInput.value === '') {
        alert('Please fill out all fields.');
    } else {
        alert('Form submitted successfully!');
    }
});

usernameInput.addEventListener('input', function() {
    if (usernameInput.value.length < 3) {
        usernameInput.style.borderColor = 'red';
    } else {
        usernameInput.style.borderColor = '';
    }
});`}
            </pre>
            <p>
                In this example, the form submission is prevented if any fields are empty. Additionally, the username input field provides instant feedback if the username is too short.
            </p>

            <h3>Task: Create a To-Do List</h3>
            <p>
                Now it's your turn! Create a simple to-do list application. Allow users to add items to the list, mark items as completed, and remove items from the list.
            </p>
            <pre>
                {`const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(newTodo);
    });

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.addEventListener('click', function() {
        newTodo.style.textDecoration = 'line-through';
    });

    newTodo.appendChild(completeButton);
    newTodo.appendChild(deleteButton);
    todoList.appendChild(newTodo);
    todoInput.value = '';
});

`}
            </pre>
            <p>
                Great job! You've created a to-do list application that allows users to add, complete, and delete tasks using event listeners. Keep practicing to become more comfortable with handling events in JavaScript!
            </p>
        </ContentContainer>
    );
};
