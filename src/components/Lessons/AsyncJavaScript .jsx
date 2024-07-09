import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const AsyncJavaScript = () => {

    return (
        <ContentContainer>
            <h2 id="asyncJavaScript">12. Async JavaScript</h2>

            <h3 id="promises">Promises</h3>
            <p>
                Promises are used to handle asynchronous operations in JavaScript. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
            </p>
            <p>
                Promises have three states:
            </p>
            <ul>
                <li><strong>Pending:</strong> Initial state, neither fulfilled nor rejected.</li>
                <li><strong>Fulfilled:</strong> Operation completed successfully.</li>
                <li><strong>Rejected:</strong> Operation failed.</li>
            </ul>
            <p>
                Here’s how you create and use a Promise:
            </p>
            <pre>
                {`const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation successful');
        } else {
            reject('Operation failed');
        }
    }, 1000);
});

myPromise.then(result => {
    console.log(result); // Output: 'Operation successful'
}).catch(error => {
    console.error(error); // Output: 'Operation failed'
});`}
            </pre>
            <p>
                In this example, <code>setTimeout</code> simulates an asynchronous operation. Depending on the value of <code>success</code>, the promise either resolves or rejects after one second.
            </p>

            <h3>Chaining Promises</h3>
            <p>
                Promises can be chained to handle sequences of asynchronous operations. Each <code>.then()</code> returns a new promise, making it easy to chain multiple asynchronous calls.
            </p>
            <pre>
                {`fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json())
    .then(post => {
        console.log(post);
        return fetch('https://jsonplaceholder.typicode.com/users/' + post.userId);
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.error('Error:', error);
    });`}
            </pre>
            <p>
                This example fetches a post and then fetches the user who created the post, chaining the promises together.
            </p>

            <h3 id="async-await">Async/Await</h3>
            <p>
                Async/Await is a modern way to work with asynchronous code in JavaScript. It is built on top of Promises and allows you to write asynchronous code that looks synchronous. An <code>async</code> function returns a Promise, and <code>await</code> can be used to pause execution until the Promise resolves.
            </p>
            <pre>
                {`async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchData();`}
            </pre>
            <p>
                The <code>fetchData</code> function is an async function that uses <code>await</code> to wait for the response from the API. If there is an error, it is caught and logged.
            </p>

            <h3 id="error-handling">Error Handling in Async Functions</h3>
            <p>
                When using async/await, you can handle errors using try/catch blocks. This makes it easy to manage errors in asynchronous code.
            </p>
            <pre>
                {`async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchData();`}
            </pre>
            <p>
                In this example, if the response is not okay, an error is thrown and caught in the catch block.
            </p>

            <h3 id="what-is-an-api">What is an API?</h3>
            <p>
                An API (Application Programming Interface) allows different software applications to communicate with each other. When you request data from an API, you are asking another service to provide you with specific information.
            </p>
            <p>
                Think of an API as a waiter in a restaurant. You (the client) tell the waiter (the API) what you want to eat (data request). The waiter then tells the kitchen (server) your order and brings back your food (data response).
            </p>

            <h3 id="finding-apis">Finding APIs</h3>
            <p>
                There are many free APIs available online that you can use to practice your skills. Here are a few examples:
            </p>
            <ul>
                <li><a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder</a>: A free fake online REST API for testing and prototyping.</li>
                <li><a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">PokeAPI</a>: An API for Pokémon data.</li>
                <li><a href="https://openweathermap.org/api" target="_blank" rel="noopener noreferrer">OpenWeatherMap</a>: An API for weather data.</li>
                <li><a href="https://www.thecocktaildb.com/api.php" target="_blank" rel="noopener noreferrer">TheCocktailDB</a>: An API for cocktail recipes.</li>
            </ul>

            <h3 id="real-usecase">Real Use Case: Fetching Data from an API</h3>
            <p>
                Let's create a simple application that fetches and displays user data from an API.
            </p>
            <pre>
                {`const userList = document.getElementById('userList');

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchUsers();`}
            </pre>
            <p>
                In this example, we fetch a list of users from an API and display their names in a list. This demonstrates how to work with async/await, Promises, and error handling.
            </p>

            <h3>Task: Fetch and Display Posts</h3>
            <p>
                Now it's your turn! Create a simple application that fetches and displays a list of posts from an API. An API is a service that allows different applications to communicate with each other. Display the post titles in a list.
            </p>
            <pre>
                {`const postList = document.getElementById('postList');

async function fetchPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const posts = await response.json();
        posts.forEach(post => {
            const listItem = document.createElement('li');
            listItem.textContent = post.title;
            postList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

fetchPosts();`}
            </pre>
            <p>
                Great job! You've created an application that fetches and displays posts using async/await and Promises. Keep practicing to master your asynchronous programming skills!
            </p>
        </ContentContainer>
    );
};
   