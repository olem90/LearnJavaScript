import styled from "styled-components";

export const SkillLevelsContainer = styled.div` 
    box-sizing: border-box;
    display: flex;
    flex-direction: row; 
    max-width: 1200px; 
    align-items: center; 
` 

export const SkillLevelIcons = styled.div` 
    box-sizing: border-box;   
    display: flex; 
    justify-content: center;
    align-items: center;  
    flex: 1;    
    max-height: 300px;  
    width: 320px;     
        
    img {  
        border: 2px solid #ffff;    
        max-width: 100%;   
        max-height: 280px;      
        margin: auto;         
    }
`      