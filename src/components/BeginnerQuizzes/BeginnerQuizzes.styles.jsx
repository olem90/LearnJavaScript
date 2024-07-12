import styled from "styled-components";

export const BeginnerQuizzesWrapper = styled.div`
    box-sizing: border-box;
    border: 2px solid gold;
    height: 100vh;
    min-width: 100%; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to bottom right, #5A3E1B, #8B4513 25%, #A86F0B 50%, #8B4513 75%, #5A3E1B); 
` 
 
export const BeginnerQuizzesContainer = styled.div`  
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
        margin-bottom: 15px; 
    }

    .question-text {
        font-size: 22px; 
    }

    .answer-section {
        display: flex;
        flex-direction: column;

        .selected { 
            background: #F5DEB3;   
        }  
    } 
    
    .answer-option {  
        box-sizing: border-box; 
        display: flex;  
        align-items: center; 
        margin-bottom: 10px;
        border-radius: 5px;  
        cursor: pointer;
        padding: 12px 5px;  
      
        &:hover {     
            background: #F5DEB3;   
        }  
    }
     
    .answer-option input[type="radio"] { 
        margin-right: 10px;
    } 
 
    .submitBtn {
        padding: 10px 20px;
        font-size: 16px;
        color: #fff;
        background-color: #B5651D; 
        border: none;
        border-radius: 5px;
        cursor: pointer;
        margin-right: auto; 

        &:disabled {
            background-color: #ccc; 
        } 
    }

    .btnContainer {
        box-sizing: border-box;
        display: flex;
        margin-top: 20px;  
    }
 
    .resetBtn { 
        padding: 10px 20px;  
        border: none;  
        border-radius: 5px;  
        margin-left: auto; 
        margin-right: 0;
        color: #fff; 
        background-color: #A52A2A;    
    }  

    .score-section {
        font-size: 24px;
        font-weight: bold;
    }    
`; 

export const QuizContentContainer = styled.div`
    box-sizing: border-box;
    width: 100%; 
    padding: 20px;
    border-radius: 10px;
    background-color: #F5F5DC;
`