import React from 'react';
import { ContentContainer } from "./Lessons.styles";

export const Objects = () => {

    return (
        <ContentContainer>
            <h2 id="objects">8. Objects</h2>

            <h3 id="objects-creation">Object Creation</h3>
            <p>
                Objects in JavaScript are collections of related data and functionality. They are created using curly braces <code>{}</code>. 
                Imagine you are building a small application to manage a library. Each book in the library can be represented as an object with properties like <code>title</code>, <code>author</code>, and <code>yearPublished</code>.
            </p>
            <pre>
                {`const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960
};`}
            </pre>
            <p>
                You can access the properties of an object using dot notation or bracket notation.
            </p>
            <pre>
                {`console.log(book.title); // Output: To Kill a Mockingbird
console.log(book["author"]); // Output: Harper Lee`}
            </pre>
            <p>
                You can also add, modify, or delete properties.
            </p>
            <pre>
                {`book.genre = "Fiction";
book.yearPublished = 1961;
delete book.genre;`}
            </pre>

            <h3 id="objects-methods">Methods</h3>
            <p>
                Methods are functions stored as properties in an object. They provide a way to include behavior in objects. 
                Let's enhance our library application by adding a method to the book object that allows us to display the book's information.
            </p>
            <pre>
                {`const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    yearPublished: 1960,
    displayInfo: function() {
        console.log(\`\${this.title} by \${this.author}, published in \${this.yearPublished}\`);
    }
};

book.displayInfo(); // Output: To Kill a Mockingbird by Harper Lee, published in 1960`}
            </pre>
            <p>
                This method uses the <code>this</code> keyword to refer to the current object, making it flexible and reusable.
            </p>

            <h3 id="objects-constructors">Constructor Functions</h3>
            <p>
                Constructor functions are templates for creating objects. They are defined using function declarations and called with the <code>new</code> keyword. 
                Imagine our library is growing, and we need a more efficient way to create multiple book objects.
            </p>
            <pre>
                {`function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
    this.displayInfo = function() {
        console.log(\`\${this.title} by \${this.author}, published in \${this.yearPublished}\`);
    };
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

book1.displayInfo(); // Output: To Kill a Mockingbird by Harper Lee, published in 1960
book2.displayInfo(); // Output: 1984 by George Orwell, published in 1949`}
            </pre>

            <h3 id="objects-prototypes">Prototypes</h3>
            <p>
                Prototypes allow you to add properties and methods to all instances of an object created with a constructor function. 
                Let's improve our library application by adding a shared method to all book objects without duplicating the function in each instance.
            </p>
            <pre>
                {`function Book(title, author, yearPublished) {
    this.title = title;
    this.author = author;
    this.yearPublished = yearPublished;
}

Book.prototype.displayInfo = function() {
    console.log(\`\${this.title} by \${this.author}, published in \${this.yearPublished}\`);
};

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

book1.displayInfo(); // Output: To Kill a Mockingbird by Harper Lee, published in 1960
book2.displayInfo(); // Output: 1984 by George Orwell, published in 1949`}
            </pre>
            <p>
                By using prototypes, we ensure that the <code>displayInfo</code> method is not recreated for each instance, making our code more efficient.
            </p>

            <h3 id="objects-es6-classes">ES6 Classes</h3>
            <p>
                ES6 introduced classes as a syntactic sugar over JavaScript's existing prototype-based inheritance. Classes make it easier to create and manage objects. 
                Let's take our library application to the next level by using ES6 classes.
            </p>
            <pre>
                {`class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    displayInfo() {
        console.log(\`\${this.title} by \${this.author}, published in \${this.yearPublished}\`);
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

book1.displayInfo(); // Output: To Kill a Mockingbird by Harper Lee, published in 1960
book2.displayInfo(); // Output: 1984 by George Orwell, published in 1949`}
            </pre>
            <p>
                Classes can also include getters, setters, and static methods, making them a powerful tool for building complex applications.
            </p>
            <pre>
                {`class Book {
    constructor(title, author, yearPublished) {
        this.title = title;
        this.author = author;
        this.yearPublished = yearPublished;
    }

    displayInfo() {
        console.log(\`\${this.title} by \${this.author}, published in \${this.yearPublished}\`);
    }

    get age() {
        return new Date().getFullYear() - this.yearPublished;
    }

    static libraryName() {
        return "City Library";
    }
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
console.log(book1.age); // Output: 61 (if current year is 2021)
console.log(Book.libraryName()); // Output: City Library`}
            </pre>

            <h3>When to Use Each Object Creation Method</h3>
            <p>
                <strong>Object Literals:</strong> Use for creating single objects or when you don't need a template.
            </p>
            <p>
                <strong>Constructor Functions:</strong> Use when you need a template to create multiple objects with the same structure.
            </p>
            <p>
                <strong>Prototypes:</strong> Use when you need to share methods and properties across instances.
            </p>
            <p>
                <strong>ES6 Classes:</strong> Use for a cleaner and more concise syntax, especially for complex object-oriented code.
            </p>

            <h3>Task: Create Your Own Object</h3>
            <p>
                Now it's your turn! Create an object to represent a car with properties like <code>make</code>, <code>model</code>, and <code>year</code>. 
                Add a method to display the car's information and create multiple instances of your car object.
            </p>
            <pre>
                {`class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(\`\${this.make} \${this.model}, \${this.year}\`);
    }
}

const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2018);

car1.displayInfo(); // Output: Toyota Camry, 2020
car2.displayInfo(); // Output: Honda Accord, 2018`}
            </pre>
            <p>
                Great job! You've just created your own objects and methods. Keep experimenting and see what else you can build!
            </p>
        </ContentContainer>
    );
};
 