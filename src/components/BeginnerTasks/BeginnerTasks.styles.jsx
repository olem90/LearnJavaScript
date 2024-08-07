import styled from "styled-components";

export const BeginnerTasksWrapper = styled.div`
    min-height: 100vh; 
    min-width: 100%; 
    box-sizing: border-box;
`

export const BeginnerTasksContainer = styled.div`
    box-sizing: border-box;
    margin-top: 60px;

    h1 {
        text-align: center;
        color: #F5F5F5;
        padding-block: 70px 30px;
        font-size: 36px; 
    }
 
    h2 {
        margin-top: 20px;
        color: #F5F5F5; 
        margin-inline: auto;
        max-width: -moz-fit-content; 
        max-width: fit-content;
        padding: 10px;
        text-align: center; 
        font-size: 28px;   
    }

    pre {
        box-sizing: border-box;  
        color: #f8f8f2;
        background: #2E2E2E;  
        padding: 10px;  
        border-radius: 4px;
        overflow-x: auto;
        color: #F5F5F5;  
        max-width: 1000px; 
        margin-inline: auto; 
    }

    p {
        color: #f8f8f2; 
        margin-inline: auto; 
        max-width: fit-content;  
    }

    .margin-top {
        margin-top: 90px;
    }

    .clearConsoleBtn {
        box-sizing: border-box; 
        background: #000;    
        padding: 5px; 
        margin-top: 10px;  
        font-size: 14px;    
        color: #F0EAD6;   
        border: 2px solid #000;
        display: flex; 
        border-radius: 0;        
        margin-left: 0;  
        margin-right: auto;
        cursor: pointer;
        transition: all 0.3s ease; 
        box-shadow: 0 0 4px 2px rgba(245, 245, 245, 0.5); 

        &:hover { 
            border-color: rgba(245, 245, 245, 0.5);    
        }  
    
        &:focus {
            outline: 1px solid #F0EAD6; 
            border-color: rgba(245, 245, 245, 0.5);
            box-shadow: 0 0 7px 2px rgba(245, 245, 245, 0.5);   
        }
    }

    .taskTitle {
        padding: 15px;
    }
    
    .taskDescription {
        
        @media(max-width: 520px) {
            text-align: center; 
        }
    }

    @media(max-width: 1100px)  {
        max-width: 90%;    
        margin-inline: auto; 
    }

    @media(max-width: 900px)  {
         
        margin-inline: auto;  

        pre, code {
            white-space: pre-wrap; 
            word-wrap: break-word;
        }
    }

    @media(max-width: 650px)  {

        h1 {
            font-size: 32px;  
        }

        h2 { 
            font-size: 22px;      
        }
    } 
`;
 
export const CodeEditorContainer = styled.div`
    box-sizing: border-box; 
    width: 100%;  
    max-width: 1000px;
    margin: 0 auto;
` 

export const BeginnerTasksButtonContainer = styled.div`
    box-sizing: border-box; 
    max-width: 1000px;
    margin: 0 auto;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    margin-bottom: 20px;  

    .solutionBtn {
        box-sizing: border-box; 
        background: #000;    
        padding: 5px; 
        margin-top: 10px;  
        font-size: 14px;  
        color: #FFD700;  
        border: 2px solid #000;
        display: flex;
        border-radius: 0;        
        margin-left: auto;  
        margin-right: 0;
        cursor: pointer;
        transition: all 0.3s ease; 
        box-shadow: 0 0 2px 2px rgba(255, 215, 0, 0.5); 
     
    &:hover {
        border-color: rgba(255, 215, 0, 0.5);   
    }   

    &:focus {
        outline: 1px solid #FFC107;   
        border-color: rgba(255, 215, 0, 0.5); 
        box-shadow: 0 0 7px 2px rgba(50, 205, 50, 0.5);   
    }    
    }

    .runCodeBtn {   
        box-sizing: border-box;  
        background: #000;    
        padding: 5px; 
        margin-top: 10px;  
        font-size: 14px;    
        color: #32CD32;  
        border: 2px solid #000;
        display: flex;
        border-radius: 0;        
        margin-left: 0;  
        margin-right: 15px;
        cursor: pointer;
        transition: all 0.3s ease; 
        box-shadow: 0 0 4px 2px rgba(50, 205, 50, 0.5);  
     
    &:hover {
        border-color: rgba(50, 205, 50, 0.5);  
    }  

    &:focus {
        outline: 1px solid #6D4678;
        border-color: rgba(50, 205, 50, 0.5);
        box-shadow: 0 0 7px 2px rgba(50, 205, 50, 0.5);
    }    
    }
` 

export const ClearConsoleBtnContainer = styled.div`
    box-sizing: border-box;
    max-width: 1000px;
    margin-inline: auto; 
    margin-bottom: 15px; 
`

export const ConsoleOutputContainer = styled.div`
    box-sizing: border-box;
    background-color: #333;
    color: #F5F5F5;
    padding: 0;
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
    display: flex; 
    min-height: 66px;
    border-radius: 2px;     

    h3 { 
        padding: 10px; 
        margin-block: auto;  
        white-space: nowrap;
    }

    .console-output { 
        height: 100%;      
        margin-inline: 15px; 
        width: 100%;
        display: flex;   
        flex: 1; 
        align-items: center;
        margin-block: auto; 
        font-size: 18px;   
    }
`;

export const TaskSolutionContainer = styled.div`
    box-sizing: border-box;  
    background: #272822;  
    max-width: 1000px;
    margin-inline: auto; 
    margin-bottom: 10px;  
    border-radius: 2px;   
    box-shadow: 0 0 5px 2px rgba(255, 215, 0, 0.5);    
`;

export const TaskTitle = styled.span`
    font-weight: bold;
    font-size: 18px; 
`;

export const SolutionWrapper = styled.div`
    box-sizing: border-box;    
    width: 100%;
`; 
