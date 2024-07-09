import React, { useState, useEffect } from 'react';
import { BeginnerQuizzesWrapper, BeginnerQuizzesContainer, QuizContentContainer } from "./BeginnerQuizzes.styles"; 
import { NavBar } from "../Nav/Nav";

export const BeginnerQuizzes = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [clearCheckedBox, setClearCheckedBox] = useState(false);


    const questions = [ 
        {  
            questionText: "What is the correct syntax to output 'Hello, World!' in JavaScript?",
            answerOptions: [ 
                { answerText: "print('Hello, World!')", isCorrect: false },
                { answerText: "console.log('Hello, World!')", isCorrect: true },
                { answerText: "echo 'Hello, World!'", isCorrect: false }, 
                { answerText: "document.write('Hello, World!')", isCorrect: false },
            ],
        }, 
        {
            questionText: "Which of the following is used to declare a variable in JavaScript?",
            answerOptions: [
                { answerText: "var", isCorrect: false },
                { answerText: "let", isCorrect: false }, 
                { answerText: "const", isCorrect: false },  
                { answerText: "All of the above", isCorrect: true }, 
            ], 
        },  
        { 
            questionText: "How do you write a comment in JavaScript?",
            answerOptions: [
                { answerText: "# This is a comment", isCorrect: false }, 
                { answerText: "// This is a comment", isCorrect: true },
                { answerText: "<!-- This is a comment -->", isCorrect: false },
                { answerText: "/* This is a comment */", isCorrect: true },
            ],
        },
        {
            questionText: "What does the following code output?\nconsole.log(5 > 3);",
            answerOptions: [
                { answerText: "true", isCorrect: true },
                { answerText: "false", isCorrect: false },
                { answerText: "undefined", isCorrect: false },
                { answerText: "null", isCorrect: false },
            ],
        },
        {
            questionText: "Which method can be used to round a number to the nearest integer?",
            answerOptions: [
                { answerText: "Math.round()", isCorrect: true },
                { answerText: "Math.floor()", isCorrect: false },
                { answerText: "Math.ceil()", isCorrect: false },
                { answerText: "Math.random()", isCorrect: false },
            ],
        },
        {
            questionText: "What is the correct way to create an array in JavaScript?",
            answerOptions: [
                { answerText: "var arr = [];", isCorrect: true },
                { answerText: "var arr = {};", isCorrect: false },
                { answerText: "var arr = ();", isCorrect: false },
                { answerText: "var arr = <>;", isCorrect: false },
            ],
        },
        {
            questionText: "Which event occurs when the user clicks on an HTML element?",
            answerOptions: [
                { answerText: "onmouseover", isCorrect: false },
                { answerText: "onchange", isCorrect: false },
                { answerText: "onclick", isCorrect: true },
                { answerText: "onmouseclick", isCorrect: false },                              
            ],
        },
        {
            questionText: "How do you create a function in JavaScript?",
            answerOptions: [
                { answerText: "function myFunction() {}", isCorrect: true },
                { answerText: "def myFunction() {}", isCorrect: false },
                { answerText: "function:myFunction() {}", isCorrect: false },
                { answerText: "create function myFunction() {}", isCorrect: false },
            ],
        },
        {
            questionText: "How do you call a function named 'myFunction'?",
            answerOptions: [
                { answerText: "call myFunction()", isCorrect: false },
                { answerText: "myFunction()", isCorrect: true },
                { answerText: "call function myFunction()", isCorrect: false },
                { answerText: "execute myFunction()", isCorrect: false },
            ],
        },
        {
            questionText: "How do you add a comment that has more than one line?",
            answerOptions: [
                { answerText: "/* This comment has\nmore than one line */", isCorrect: true },
                { answerText: "// This comment has\nmore than one line //", isCorrect: false },
                { answerText: "<!-- This comment has\nmore than one line -->", isCorrect: false },
                { answerText: "# This comment has\nmore than one line #", isCorrect: false },
            ],
        },
    ];

    useEffect(() => {
        // Load the quiz state from localStorage when the component mounts
        const savedAnswers = JSON.parse(localStorage.getItem('quizState'));
        if (savedAnswers) {
            console.log("Loaded quiz state from localStorage:", savedAnswers);
            setCurrentQuestion(savedAnswers.currentQuestion);
            setScore(savedAnswers.score);
            setShowScore(savedAnswers.showScore);
            setSelectedAnswer(savedAnswers.selectedAnswer);
        }
    }, []);

    useEffect(() => {
        // Skip the initial state saving
        if (currentQuestion === 0 && score === 0 && !showScore && selectedAnswer === null) {
            return;
        }
        // Save the current quiz state to localStorage whenever it changes
        const quizState = { currentQuestion, score, showScore, selectedAnswer };
        localStorage.setItem('quizState', JSON.stringify(quizState));
        console.log("Saved quiz state to localStorage:", quizState);
    }, [currentQuestion, score, showScore, selectedAnswer]);
    
    useEffect(() => {
        if (showScore) {
            localStorage.removeItem('quizState');
            console.log('Cleared quiz state from localStorage');
        }
    }, [showScore]); 

    const handleAnswerOptionClick = () => { 
        if (selectedAnswer && selectedAnswer.isCorrect) {
            setScore(score + 1); 
        } 

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setClearCheckedBox(!clearCheckedBox);
        } else {
            setShowScore(true);
        }
    };

    return (
        <BeginnerQuizzesWrapper>
            <NavBar />
            <BeginnerQuizzesContainer>
                <h1>Beginner Quizzes</h1>  
                <QuizContentContainer>
                    <h2>Beginner JavaScript Quiz</h2>
                    {showScore ? (
                        <div className="score-section">
                            You scored {score} out of {questions.length}
                        </div> 
                    ) : (
                        <>
                            <div className="question-section">
                                <div className="question-count">
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className="question-text">{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className="answer-section">
                                {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                    <label
                                        key={index}
                                        className={`answer-option ${selectedAnswer && selectedAnswer.answerText === answerOption.answerText ? 'selected' : ''}`}
                                    >
                                        <input 
                                            type="radio" 
                                            id={`answer-${index}`}
                                            key={`${currentQuestion}-${index}-${clearCheckedBox}`}
                                            name="answer"   
                                            value={answerOption.answerText}       
                                            onChange={() => { 
                                                setSelectedAnswer(answerOption);  
                                            }}      
                                            onClick={() => setSelectedAnswer(answerOption)}
                                        />
                                        <span>{answerOption.answerText}</span> 
                                    </label> 
                                ))} 
                            </div> 
                            <button onClick={handleAnswerOptionClick} disabled={!selectedAnswer}>
                                Submit
                            </button>
                        </>
                    )}
                </QuizContentContainer>
            </BeginnerQuizzesContainer>
        </BeginnerQuizzesWrapper>
    );
};
 