import styled from "styled-components";

export const IntroStyles = styled.div`
    box-sizing: border-box;
    max-width: 800px; 
    margin: auto;
    color: #F5F5F5;
    padding: 25px; 
  
    h1 { 
        padding: 15px; 
        color: #32CD32;
    } 

    .semi-title {
        font-size: 20px;
    }
`   
 
export const IntroStylesContainer = styled.div`  
    box-sizing: border-box;
    max-width: 1200px; 
    margin: auto;   
    box-shadow: 0 4px 8px rgba(50, 205, 50, 0.6);  
    min-height: 100vh;  
    margin-block: 30px;   
` 
  
export const IntroTextStyles = styled.p`  
    color: #F5F5F5; 
    padding: 15px;   
`     

export const StartLearningBtnStyles = styled.button`    
    background: #301934;
    padding: 15px 20px; 
    margin-block: 50px;     
    font-size: 24px;
    color: #3DFA3D; 
    border: 2px solid #4B0082; 
    display: flex;
    border-radius: 0; 
    margin-inline: auto;  
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
`   