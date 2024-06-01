import styled from "styled-components";

export const NavStyles = styled.nav`
    box-sizing: border-box;
    color: #fff;   
    border: 1px solid gold;
    display: flex;
    align-items: center;
    min-width: 100%;     
    height: 60px;   
    background-color: rgba(0, 0, 0, 0.6);     
    position: fixed; 
    top: 0;
    left: 0; 
    z-index: 1200;   
   
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
    box-sizing: border-box;
    width: fit-content; 
    display: flex; 
    margin-left: 120px;   
    border: 1px solid gold;
`  