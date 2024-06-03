import { IntermediateQuizzesWrapper, IntermediateQuizzesContainer } from "./IntermediateQuizzes.styles";
import { NavBar } from "../Nav/Nav";

export const IntermediateQuizzes = () => {
    return (
        <IntermediateQuizzesWrapper>
            <NavBar />
            <IntermediateQuizzesContainer>
                <h1>Intermediate Quizzes</h1>        
            </IntermediateQuizzesContainer>       
        </IntermediateQuizzesWrapper>
    )
}   