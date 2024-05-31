import styled from "styled-components";

export const SkillLevelsContainer = styled.div` 
    box-sizing: border-box;
    display: flex;
    flex-direction: row; 
    max-width: 1200px; 
    align-items: center;

    .beginner {    
        &:hover {  
            box-shadow: 0 0 2px 2px rgba(99, 164, 255, 0.5);
            cursor: pointer;
        }     
    } 

    .intermediate {
        &:hover {     
            box-shadow: 0 0 2px 2px rgba(50, 205, 50, 0.5);   
            cursor: pointer;
        }    
    }   
 
    .advanced {
        &:hover {
            box-shadow: 0 0 2px 2px rgba(255, 215, 0, 0.7);
            cursor: pointer;
        }
    }
` 
 
export const SkillLevelIcons = styled.div` 
    box-sizing: border-box;   
    justify-content: center;
    align-items: center;   
    flex: 1;      
    max-height: 300px;  
    width: 320px;   
    margin-top: 60px; 

    img {     
        display: flex; 
        max-height: 200px; 
        max-width: 200px;
        min-width: 200px;   
        transition: all 0.3s ease; 
        margin-inline: auto; 
    }   
`       