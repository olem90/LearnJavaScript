import { IntermediateTasksWrapper, IntermediateTasksContainer } from "./IntermediateTasks.styles";
import { NavBar } from "../Nav/Nav";

export const IntermediateTasks = () => {
    return (
        <IntermediateTasksWrapper>
            <NavBar />
            <IntermediateTasksContainer>
                <h1>Intermediate Tasks</h1>
            </IntermediateTasksContainer>
        </IntermediateTasksWrapper>
    )
} 