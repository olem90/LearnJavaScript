import { AdvancedTestsWrapper, AdvancedTestsContainer } from "./AdvancedTests.styles";
import { NavBar } from "../Nav/Nav";

export const AdvancedTests = () => {
    return (
        <AdvancedTestsWrapper>
            <NavBar />
            <AdvancedTestsContainer>
                <h1>Advanced Tests</h1>
            </AdvancedTestsContainer>
        </AdvancedTestsWrapper>
    )
}