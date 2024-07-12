import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

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

        @media(max-width: 1200px) {
            width: 92%;
        }
    }
`;   

export const LessonsContainer = styled.div`    
    display: flex; 
    flex-direction: row; 
    max-width: 86%;
    margin-inline: auto;

    @media(max-width: 1200px) {
        max-width: 94%;  
    }
`

export const Sidebar = styled.div`
    flex: 1.1; 
    background-color: #f4f4f4; 
    padding: 20px;
    box-shadow: 2px 0 5px rgba(0,0,0,0.1);
    height: 100%;
    overflow-y: auto;
    min-width: 230px;      
 
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

export const StyledNavLink = styled(NavLink)`
    display: block;
    color: #333;
    text-decoration: none;
    padding: 10px 0; 
    font-size: 16px;   

    &.activeLink {
        color: red; 
    }

    &:hover {
        background: blue;    
        text-decoration: underline;   
    }
`;

export const StyledLink = styled(Link)`
    display: block;
    color: #333;
    text-decoration: none;
    padding: 10px 0; 
    font-size: 16px; 
    font-weight: normal;      

    &.activeLink {
        font-weight: bold; 
    }
 
    &:hover {
        background-color: #ddd;
    }
`;

export const PaginationContainer = styled.div`
    border: 2px solid gold;
    width: 100%;

`

export const PaginationButton = styled.button`
    border: 2px solid #000; 
`