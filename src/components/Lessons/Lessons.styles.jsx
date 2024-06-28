import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LessonsWrapper = styled.div`
    box-sizing: border-box;
    min-height: 100vh;
    min-width: 100%;
    border: 1px solid transparent;
    background-color: #FAFAFA;
    
    .lessons_h3-container {
        max-width: 100%;
        margin-inline: auto;
        margin-top: 50px;    
        display: flex;
        max-height: 200px; 
    }  

    h1 {
        color: #333; 
        display: flex;
        margin-inline: auto;  
        padding: 10px;
        background-color: #f4f4f4;  
        width: 85%;     
        text-align: center;  
    }    
`;   

export const LessonsContainer = styled.div`    
    display: flex; 
    flex-direction: row; 
    max-width: 86%;
    margin-inline: auto; 
`

export const Sidebar = styled.div`
    flex: 1;  
    background-color: #f4f4f4; 
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    height: 100%;
    overflow-y: auto;
 
    h2 {
        color: #333;
    } 

    a {
        display: block;
        color: #333;
        text-decoration: none;
        padding: 10px 0;
    }

    a:hover {
        background-color: #ddd;
    }
`;

export const Content = styled.div`
    margin-left: 10px;
    padding: 20px; 
    flex: 4;   

    h2 {
        color: #333;    
    }

    code {
        background-color: #eee; 
        padding: 2px 4px;
    }

    pre {
        background-color: #eee;
        padding: 10px;
        border-radius: 4px;
        overflow-x: auto;
        white-space: pre-wrap; /* This ensures the text wraps and doesn't overflow the container */
    }
`;

export const ContentContainer = styled.div`
    max-width: 800px; 
    margin-inline: auto;  
`;

export const Dropdown = styled.div`
    cursor: pointer;
    padding: 10px 0;
    border-bottom: 1px solid #ddd;

    &:hover {
        background-color: #ddd;
    }

    &.active {
        font-weight: bold;
    }
`;

export const DropdownContent = styled.div`
    padding-left: 20px;

    button {
        display: block;
        background: none;
        border: none;
        color: #333;
        text-align: left;
        padding: 5px 0;
        cursor: pointer;
        width: 100%;
    }
`;

export const StyledNavLink = styled(NavLink)`
    display: block;
    color: #333;
    text-decoration: none;
    padding: 10px 0;

    &.active {
        font-weight: bold;
    }

    &:hover {
        background-color: #ddd;
    }
`;