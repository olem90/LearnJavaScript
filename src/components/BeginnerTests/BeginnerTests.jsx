import { BeginnerTestsWrapper, BeginnerTestsContainer } from "./BeginnerTests.styles";
import { NavBar } from "../Nav/Nav";

export const BeginnerTests = () => {
    return (
        <BeginnerTestsWrapper>
            <NavBar />
            <BeginnerTestsContainer>
                <h1>Beginner Tests</h1>
            </BeginnerTestsContainer>  
        </BeginnerTestsWrapper>
    )
}    