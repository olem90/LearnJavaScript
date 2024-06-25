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
    }
 
    h2 {
        margin-top: 20px;
        color: #F5F5F5; 
        margin-inline: auto;
        max-width: fit-content; 
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

    .task-solution {
        background: #272822;  
        border: 2px solid gold;
    }

    p {
        color: #f8f8f2; 
        margin-inline: auto; 
        max-width: fit-content;  
    }

`     

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
        display: flex;
        margin-left: auto;
        padding: 5px;
        border-radius: 2px;
        margin-top: 10px;
        height: 30px;
        font-size: 16px;
        align-items: center;
        justify-content: center;
    }

    .runCodeBtn {   
        box-sizing: border-box; 
        background: #000;    
        padding: 5px; 
        margin-top: 10px;  
        font-size: 16px; 
        font-weight: bold;   
        color: #32CD32;  
        border: 2px solid #000;
        display: flex;
        border-radius: 0;        
        margin-left: 0;  
        margin-right: auto;
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

export const ConsoleOutputContainer = styled.div`
    box-sizing: border-box;
    background-color: #333;
    color: #F5F5F5;
    padding: 0;
    border-radius: 4px;
    width: 100%;
    max-width: 1000px;
    margin: 20px auto;
    display: flex; 
    min-height: 66px;       

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

