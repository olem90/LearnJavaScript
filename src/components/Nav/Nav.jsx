import React from 'react';
import { NavLink } from "react-router-dom";
import { NavStyles, NavLinksContainer } from "./Nav.styles";

export const NavBar = () => {
    return (
        <NavStyles>
            <NavLinksContainer>
                <NavLink to="/" className="home">Home</NavLink>
                <NavLink className="intro">Intro</NavLink>
                <NavLink to="lessons" className="lessons">Lessons</NavLink>
                <NavLink className="tasks">Tasks</NavLink>
                <NavLink className="quizzes">Quizzes</NavLink> 
                <NavLink className="tests">Tests</NavLink>
                <NavLink className="resources">Resources</NavLink>
                <NavLink className="about">About</NavLink>
            </NavLinksContainer>   
        </NavStyles> 
    )
} 