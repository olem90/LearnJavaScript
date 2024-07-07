import React, { useState, useEffect} from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { LessonsWrapper, LessonsContainer, ContentContainer, Sidebar, Content, Dropdown, DropdownContent, StyledNavLink, StyledLink, PaginationButton, PaginationContainer } from "./Lessons.styles";
import { NavBar } from "../Nav/Nav";

export const Lessons = () => {
    const [activeLink, setActiveLink] = useState("#introduction");
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [activeDropdownLink, setActiveDropdownLink] = useState("");  
    const navigate = useNavigate();

    const components = [
        { id: "introduction", path: "introduction"},
        { id: "setup", path: "setup"},
        { id: "variables", path: "variables"}, 
        { id: "operators", path: "operators"},  
        { id: "controlStructures", path: "controlStructures"},   
        { id: "loops", path: "loops" },
        { id: "functions", path: "functions" },
        { id: "objects", path: "objects" },{ id: "functions", path: "functions" },
    ];   
  

    const toggleDropdown = (dropdown) => {
        setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
        setActiveLink("");
    };  
 /*
  const handleLinkClick = (ref, link, path) => {
        setActiveLink(link);
        setActiveDropdown("");
        setActiveDropdownLink(""); 
        navigate(`/lessons/${path}`); 
        setTimeout(() => {
            if (ref && ref.current) {
                const offsetTop = ref.current.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            }
        }, 100);
    };
*/


    const handleLinkClick = (link, path) => { 
        const component = components.find(comp => `#${comp.id}` === link); 
        if (component) {
            
            setActiveLink(link);
            navigate(`/lessons/${path}`);  
        }
    };

 const handleDropdownLinkClick = (ref, link, path) => { 
        setActiveDropdownLink(link);
        navigate(`/lessons/${path}`);
        setTimeout(() => {
            if (ref && ref.current) {
                const offsetTop = ref.current.offsetTop - 100;
                window.scrollTo({ top: offsetTop, behavior: 'smooth' }); 
            }
        }, 100);
    };

    useEffect(() => {
        const currentPath = location.pathname.split("/").pop();
        const component = components.find(comp => comp.path === currentPath);
        if (component && component.ref) {
            setTimeout(() => {
                if (component.ref.current) {
                    const offsetTop = component.ref.current.offsetTop - 100; 
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            }, 100);
        }
    }, [location.pathname]);

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
                            className={activeLink === '#objects' ? 'active' : ''}
                            onClick={() => handleLinkClick('#objects')} >Objects
                        </StyledLink>
                          
    
                    <Dropdown className={activeDropdown === 'arrays' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('arrays')} className={activeDropdown === 'arrays' ? 'active' : ''}>Arrays</div>
                        {activeDropdown === 'arrays' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#arrays-creation"
                                    className={activeDropdownLink === '#arrays-creation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#arrays-creation', 'arrays')}
                                >
                                    Array Creation
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#arrays-methods"
                                    className={activeDropdownLink === '#arrays-methods' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#arrays-methods', 'arrays')}
                                >
                                    Array Methods
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#arrays-iteration"
                                    className={activeDropdownLink === '#arrays-iteration' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#arrays-iteration', 'arrays')}
                                >
                                    Iteration
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'events' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('events')} className={activeDropdown === 'events' ? 'active' : ''}>Events</div>
                        {activeDropdown === 'events' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#events-handling"
                                    className={activeDropdownLink === '#events-handling' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#events-handling', 'events')}
                                >
                                    Event Handling
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#events-listeners"
                                    className={activeDropdownLink === '#events-listeners' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#events-listeners', 'events')}
                                >
                                    Event Listeners
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#events-propagation"
                                    className={activeDropdownLink === '#events-propagation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#events-propagation', 'events')}
                                >
                                    Event Propagation
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
                    <Dropdown className={activeDropdown === 'dom' ? 'active' : ''}>
                        <div onClick={() => toggleDropdown('dom')} className={activeDropdown === 'dom' ? 'active' : ''}>DOM Manipulation</div>
                        {activeDropdown === 'dom' && (
                            <DropdownContent>
                                <StyledNavLink
                                    to="#dom-selection"
                                    className={activeDropdownLink === '#dom-selection' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#dom-selection', 'dom')}
                                >
                                    Selecting Elements
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#dom-modification"
                                    className={activeDropdownLink === '#dom-modification' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#dom-modification', 'dom')}
                                >
                                    Modifying Elements
                                </StyledNavLink>
                                <StyledNavLink
                                    to="#dom-creation"
                                    className={activeDropdownLink === '#dom-creation' ? 'activeLink' : ''}
                                    onClick={() => handleDropdownLinkClick(null, '#dom-creation', 'dom')}
                                >
                                    Creating Elements
                                </StyledNavLink>
                            </DropdownContent>
                        )}
                    </Dropdown>
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

 