import { AboutWrapper, AboutContainer } from "./About.styles";
import { NavBar } from "../Nav/Nav";

export const About = () => {
    return (
        <AboutWrapper>
            <NavBar />
            <AboutContainer>
                <h1>About</h1>
            </AboutContainer>     
        </AboutWrapper>
    )
} 