import React from 'react';
import { NavLink } from "react-router-dom";
import { NavStyles, NavLinksContainer } from "./Nav.styles";

export const NavBar = () => {
    return (
        <NavStyles>
            <NavLinksContainer>
                <NavLink to="/" className="home">Home</NavLink>
                <NavLink className="intro">Intro</NavLink>
                <NavLink className="javascript-tasks">JavaScript tasks</NavLink>
            </NavLinksContainer>   
        </NavStyles> 
    )
} 