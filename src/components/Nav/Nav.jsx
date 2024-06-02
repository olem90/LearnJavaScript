import React from 'react';
import { NavLink } from "react-router-dom";
import { NavStyles, NavLinksContainer } from "./Nav.styles";

export const NavBar = () => {
    return (
        <NavStyles>
            <NavLinksContainer>
                <NavLink to="/" className="home">Home</NavLink>
                <NavLink className="/intro">Intro</NavLink>
                <NavLink to="/lessons" className="lessons">Lessons</NavLink>
                <NavLink to="/tasks" className="tasks">Tasks</NavLink>
                <NavLink to="/quizzes" className="quizzes">Quizzes</NavLink> 
                <NavLink to="/tests" className="tests">Tests</NavLink>
                <NavLink to="/resources" className="resources">Resources</NavLink>
                <NavLink to="/about" className="about">About</NavLink>
            </NavLinksContainer>   
        </NavStyles> 
    )
}  

