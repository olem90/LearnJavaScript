import React from 'react';
import { NavLink } from "react-router-dom";
import { NavStyles, NavLinksContainer } from "./Nav.styles";

export const NavBar = () => {
    return (
        <NavStyles>
            <NavLinksContainer>
                <NavLink className="intro">Intro</NavLink>
                <NavLink>JavaScript tasks</NavLink>
            </NavLinksContainer>   
        </NavStyles> 
    )
} 