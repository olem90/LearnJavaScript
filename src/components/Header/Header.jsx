import React from 'react';
import { HeaderStyle, HeaderTextStyle } from "./Header.styles";
import codingImage from "../../Images/coding-background.jpg";
import { NavBar } from "../Nav/Nav";

export const Header = () => {
    return(
        <>
            <NavBar />
            <HeaderStyle bgimage={codingImage}> 
                <HeaderTextStyle>
                    <h1 className="header-h1">Get Your Keyboard ready and start learning Javascript NOW!</h1> 
                </HeaderTextStyle>
            </HeaderStyle> 
        </>
    )
}