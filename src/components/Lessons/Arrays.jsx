import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Arrays = () => {

    return (
        <ContentContainer>
            <h2 id="arrays">8. Arrays</h2>

            <h3 id="arrays-creation">Array Creation</h3>
            <p>
                An array is a special type of variable that can hold multiple values. You can create an array using square brackets <code>[]</code>.
            </p>
            <pre>
                {`const fruits = ["apple", "banana", "cherry"];
console.log(fruits); // Output: ["apple", "banana", "cherry"]`}
            </pre>

            <h3 id="arrays-access">Accessing Array Elements</h3>
            <p>
                You can access elements in an array using their index, which starts at 0 for the first element.
            </p>
            <pre>
                {`const firstFruit = fruits[0];
console.log(firstFruit); // Output: "apple"`}
            </pre>

            <h3 id="arrays-methods">Array Methods</h3>
            <p>
                Arrays come with a variety of built-in methods to help you manipulate them. Here are a few commonly used methods:
            </p>
            <ul>
                <li><code>push()</code>: Adds a new element to the end of an array.</li>
                <li><code>pop()</code>: Removes the last element from an array.</li>
                <li><code>shift()</code>: Removes the first element from an array.</li>
                <li><code>unshift()</code>: Adds a new element to the beginning of an array.</li>
                <li><code>forEach()</code>: Executes a provided function once for each array element.</li>
            </ul>
            <pre>
                {`fruits.push("date");
console.log(fruits); // Output: ["apple", "banana", "cherry", "date"]

const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "date"
console.log(fruits); // Output: ["apple", "banana", "cherry"]

fruits.forEach(fruit => {
    console.log(fruit);
});
// Output:
// "apple"
// "banana"
// "cherry"`}
            </pre>

            <h3 id="arrays-usecase">Real Use Case: Shopping Cart</h3>
            <p>
                Imagine you're building an online store. You can use arrays to manage the items in a user's shopping cart.
            </p>
            <pre>
                {`let shoppingCart = [];

function addItem(item) {
    shoppingCart.push(item);
    console.log(item + " has been added to your cart.");
}

function removeItem(item) {
    const index = shoppingCart.indexOf(item);
    if (index > -1) {
        shoppingCart.splice(index, 1);
        console.log(item + " has been removed from your cart.");
    } else {
        console.log(item + " is not in your cart.");
    }
}

function viewCart() {
    console.log("Your shopping cart contains:");
    shoppingCart.forEach(item => {
        console.log("- " + item);
    });
}

addItem("Laptop");
addItem("Smartphone");
viewCart();
// Output:
// "Laptop has been added to your cart."
// "Smartphone has been added to your cart."
// "Your shopping cart contains:"
// "- Laptop"
// "- Smartphone"

removeItem("Laptop");
viewCart();
// Output:
// "Laptop has been removed from your cart."
// "Your shopping cart contains:"
// "- Smartphone"`}
            </pre>
            <p>
                In this example, we use an array to store the items in the shopping cart and functions to add, remove, and view items.
            </p>

            <h3>Task: Manage Your Favorite Movies</h3>
            <p>
                Now it's your turn! Create an array to store your favorite movies and write functions to add a movie, remove a movie, and view all movies.
            </p>
            <pre>
                {`let favoriteMovies = [];

function addMovie(movie) {
    favoriteMovies.push(movie);
    console.log(movie + " has been added to your favorite movies.");
}

function removeMovie(movie) {
    const index = favoriteMovies.indexOf(movie);
    if (index > -1) {
        favoriteMovies.splice(index, 1);
        console.log(movie + " has been removed from your favorite movies.");
    } else {
        console.log(movie + " is not in your favorite movies.");
    }
}

function viewMovies() {
    console.log("Your favorite movies are:");
    favoriteMovies.forEach(movie => {
        console.log("- " + movie);
    });
}

addMovie("Inception");
addMovie("The Matrix");
viewMovies();
// Output:
// "Inception has been added to your favorite movies."
// "The Matrix has been added to your favorite movies."
// "Your favorite movies are:"
// "- Inception"
// "- The Matrix"

removeMovie("Inception");
viewMovies();
// Output:
// "Inception has been removed from your favorite movies."
// "Your favorite movies are:"
// "- The Matrix"`}
            </pre>
            <p>
                Great job! You've created functions to manage your favorite movies using arrays. Keep practicing to become more comfortable with arrays and their methods!
            </p>
        </ContentContainer>
    );
};
