import styled from "styled-components";
 
export const BeginnerTestsWrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid gold;
    height: 100vh;
    min-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #5A3E1B, #8B4513 25%, #A86F0B 50%, #8B4513 75%, #5A3E1B);
`;

export const BeginnerTestsContainer = styled.div`
    box-sizing: border-box;
    margin-top: 60px;
    width: 100%;
    max-width: 800px;
    border-radius: 8px;

    h1 {
        text-align: center;
        color: #F5F5F5;
        padding-top: 10px;
    }

    .question-section {
        margin-bottom: 20px;
    }

    .question-count {
        font-size: 18px;
        margin-bottom: 10px;
    }

    .question-text {
        font-size: 24px;
    }

    .answer-section,
    .coding-section {
        display: flex;
        flex-direction: column;

        label {
            display: flex;
            align-items: center;
            padding: 10px;
            border: 1px solid #ddd;
            margin-bottom: 10px;
            border-radius: 5px;
            cursor: pointer;

            &:hover {
                border: 1px solid #007bff;
            }

            &.selected {
                background-color: #f0f8ff;
                border: 1px solid #007bff;
                font-weight: bold;
                color: #007bff;
            }
        }

        textarea {
            padding: 10px;
            border: 1px solid #ddd;
            border-radius: 5px;
            margin-bottom: 10px;
            width: 100%;
            height: 100px;
        }
    }

    button {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #007bff;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }

    .score-section {
        font-size: 24px;
        font-weight: bold;
    }
`;

export const TestContentContainer = styled.div`
    box-sizing: border-box;
    width: 100%;
    padding: 20px;
    border-radius: 10px;
    background-color: #F5F5DC;
`;