import styled from "styled-components";

export const NavStyles = styled.nav`
    box-sizing: border-box;
    color: #fff;   
    display: flex;
    align-items: center;
    min-width: 100%;    
    height: 60px;  
    background-color: rgba(0, 0, 0, 0.6);     
    z-index: 99;      
    position: relative;
 
    a {  
        margin: 0 auto;  
        font-size: 18px;   
        padding: 5px;   
        color: #fff;
        z-index: 44; 
    }   
   
    .intro {  
        color: #32CD32;
    } 

    .javascript-tasks {
        color: #9932CC; 
    }
`   

export const NavLinksContainer = styled.div` 
    width: 300px; 
    display: flex; 
    margin-left: 120px;   
` 