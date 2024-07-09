import React, { useState, useEffect} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { LessonsWrapper, LessonsContainer, ContentContainer, Sidebar, Content, StyledLink, PaginationButton, PaginationContainer } from "./Lessons.styles";
import { NavBar } from "../Nav/Nav";

export const Lessons = () => {
    const [activeLink, setActiveLink] = useState("#introduction");
    const navigate = useNavigate();

    const components = [
        { id: "introduction", path: "introduction" },
        { id: "setup", path: "setup" },
        { id: "variables", path: "variables" },
        { id: "operators", path: "operators" },
        { id: "controlStructures", path: "controlStructures" },
        { id: "loops", path: "loops" },
        { id: "functions", path: "functions" },
        { id: "objects", path: "objects" },
        { id: "arrays", path: "arrays" },
        { id: "events", path: "events" },
        { id: "domManipulation", path: "domManipulation" },  
        { id: "asyncJavaScript", path: "asyncJavaScript" }, 
    ];     
    
 
    const handleLinkClick = ( link, path ) => { 
        const component = components.find(comp => `#${comp.id}` === link); 
        if (component) {
            setActiveLink(link);
            navigate(`/lessons/${path}`);  
        }
    };   
  
    return (
        <LessonsWrapper>
            <NavBar />
            <div className="lessons_h3-container">
                <h1>Lessons</h1>
            </div>
            <LessonsContainer>   
                <Sidebar>  
                    <h2>Index</h2>
                    <StyledLink
                        to="/lessons/introduction"
                        className={activeLink === '#introduction' ? 'activeLink' : ''}
                        onClick={() => handleLinkClick("#introduction", "introduction")}
                    >
                        Introduction to JavaScript 
                    </StyledLink>    
 
                    <StyledLink  
                            to="/lessons/setup" 
                            className={activeLink === '#setup' ? 'activeLink' : ''}
                            onClick={() => handleLinkClick('#setup')}  
                            >
                        Setting Up Your Development Environment 
                    </StyledLink>
                    
                    <StyledLink 
                        to="/lessons/variables" 
                        className={activeLink === '#variables' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#variables')} 
                        >
                            Variables and Data Types
                    </StyledLink>
                    
                    <StyledLink 
                        to="/lessons/operators"
                        className={activeLink === '#operators' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#operators')} 
                        >
                            Basic Operators 
                    </StyledLink>
                         
                    <StyledLink  
                        to="/lessons/controlStructures"
                        className={activeLink === '#controlStructures' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#controlStructures')} >Control Structures
                    </StyledLink>
                       
                    <StyledLink 
                        to="/lessons/loops"
                        className={activeLink === '#loops' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#loops')} >Loops 
                    </StyledLink> 
                    
                    <StyledLink
                        to="/lessons/functions" 
                        className={activeLink === '#functions' ? 'activeLink' : ''}       
                        onClick={() => handleLinkClick('#functions')} >Functions
                    </StyledLink>
                    
                    <StyledLink 
                        to="/lessons/objects"
                        className={activeLink === '#objects' ? 'activeLink' : ''}
                        onClick={() => handleLinkClick('#objects')} >Objects
                    </StyledLink>
                          
                    <StyledLink
                        to="/lessons/arrays"
                        className={activeLink === '#arrays' ? 'activeLink' : ''}
                        onClick={() => handleLinkClick('#arrays')} >Arrays
                    </StyledLink> 
                    
                    <StyledLink 
                        to="/lessons/events"
                        className={activeLink === '#events' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#events')} >Events
                    </StyledLink>   
                      
                    <StyledLink
                        to="/lessons/domManipulation"
                        className={activeLink === '#domManipulation' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick('#domManipulation')} 
                        >
                            DOM Manipulation
                    </StyledLink> 

                    <StyledLink
                        to="/lessons/asyncJavaScript"
                        className={activeLink === '#asyncJavaScript' ? 'activeLink' : ''} 
                        onClick={() => handleLinkClick("#asyncJavaScript")}    
                        >
                            AsyncJavaScript
                    </StyledLink>
                </Sidebar>  
                <Content>  
                    <ContentContainer>  
                        <Outlet />  
                    </ContentContainer> 
                </Content> 
            </LessonsContainer>
        </LessonsWrapper> 
    ); 
};