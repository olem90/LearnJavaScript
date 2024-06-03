import { IntermediateTestsWrapper, IntermediateTestsContainer } from "./IntermediateTests.styles";
import { NavBar } from "../Nav/Nav";

export const IntermediateTests = () => {
    return (
        <IntermediateTestsWrapper>
            <NavBar />
            <IntermediateTestsContainer>
                <h1>Intermediate Tests</h1>
            </IntermediateTestsContainer> 
        </IntermediateTestsWrapper>
    )
}