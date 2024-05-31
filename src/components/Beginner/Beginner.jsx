import { BeginnerWrapper, BeginnerTopicContainer } from "./Beginner.styles";
import { NavBar } from "../Nav/Nav";

export const Beginner = () => {
    return (
        <BeginnerWrapper>
            <NavBar />  
            <h1>Beginner Level</h1>

            <BeginnerTopicContainer>
            
            <p>Welcome to the Beginner level! Here you will learn the basics of JavaScript.</p>

            </BeginnerTopicContainer>
        </BeginnerWrapper>
    )
}