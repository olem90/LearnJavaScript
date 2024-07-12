import React, { useState } from 'react';
import { BeginnerTestsWrapper, BeginnerTestsContainer, TestContentContainer } from "./BeginnerTests.styles";
import { NavBar } from "../Nav/Nav";

export const BeginnerTests = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [codingAnswer, setCodingAnswer] = useState("");

    const questions = [
        {
            type: "multiple-choice",
            questionText: "What is the correct syntax to output 'Hello, World!' in JavaScript?",
            answerOptions: [
                { answerText: "print('Hello, World!')", isCorrect: false },
                { answerText: "console.log('Hello, World!')", isCorrect: true },
                { answerText: "echo 'Hello, World!'", isCorrect: false },
                { answerText: "document.write('Hello, World!')", isCorrect: false },
            ],
        },
        {
            type: "true-false",
            questionText: "JavaScript is a statically typed language.",
            answerOptions: [
                { answerText: "True", isCorrect: false },
                { answerText: "False", isCorrect: true },
            ],
        },
        {
            type: "coding",
            questionText: "Write a function named 'greet' that takes a name as a parameter and returns 'Hello, ' followed by the name.",
            correctAnswer: "function greet(name) { return 'Hello, ' + name; }",
        }
    ];

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
            setSelectedAnswer(null);
            setCodingAnswer("");
        } else {
            setShowScore(true);
            localStorage.removeItem('testState'); // Clear localStorage when test is finished
        }
    };

    const handleCodingAnswerSubmit = () => {
        const isCorrect = codingAnswer.trim() === questions[currentQuestion].correctAnswer.trim();
        handleAnswerOptionClick(isCorrect);
    };

    return (
        <BeginnerTestsWrapper>
            <NavBar />
            <BeginnerTestsContainer>
                <h1>Beginner Tests</h1>
                <TestContentContainer>
                    <h2>Beginner JavaScript Test</h2>
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
                            {questions[currentQuestion].type === "multiple-choice" && (
                                <div className="answer-section">
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <label
                                            key={index}
                                            className={`answer-option ${selectedAnswer === answerOption ? 'selected' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                id={`answer-${index}`}
                                                name="answer"
                                                value={answerOption.answerText}
                                                checked={selectedAnswer === answerOption}
                                                onChange={() => setSelectedAnswer(answerOption)}
                                            />
                                            <span>{answerOption.answerText}</span>
                                        </label>
                                    ))}
                                    <button onClick={() => handleAnswerOptionClick(selectedAnswer.isCorrect)} disabled={!selectedAnswer}>
                                        Submit
                                    </button>
                                </div>
                            )}
                            {questions[currentQuestion].type === "true-false" && (
                                <div className="answer-section">
                                    {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                                        <label
                                            key={index}
                                            className={`answer-option ${selectedAnswer === answerOption ? 'selected' : ''}`}
                                        >
                                            <input
                                                type="radio"
                                                id={`answer-${index}`}
                                                name="answer"
                                                value={answerOption.answerText}
                                                checked={selectedAnswer === answerOption}
                                                onChange={() => setSelectedAnswer(answerOption)}
                                            />
                                            <span>{answerOption.answerText}</span>
                                        </label>
                                    ))}
                                    <button onClick={() => handleAnswerOptionClick(selectedAnswer.isCorrect)} disabled={!selectedAnswer}>
                                        Submit
                                    </button>
                                </div>
                            )}
                            {questions[currentQuestion].type === "coding" && (
                                <div className="coding-section">
                                    <textarea
                                        value={codingAnswer}
                                        onChange={(e) => setCodingAnswer(e.target.value)}
                                        placeholder="Write your code here..."
                                    />
                                    <button onClick={handleCodingAnswerSubmit} disabled={!codingAnswer}>
                                        Submit
                                    </button>
                                </div>
                            )} 
                        </>
                    )}
                </TestContentContainer>
            </BeginnerTestsContainer>
        </BeginnerTestsWrapper>
    );
}     