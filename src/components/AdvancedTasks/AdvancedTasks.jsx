import { AdvancedTasksWrapper, AdvancedTasksContainer } from "./AdvancedTasks.styles";
import { NavBar } from "../Nav/Nav";

export const AdvancedTasks = () => {
    return (
        <AdvancedTasksWrapper>
            <NavBar />
            <AdvancedTasksContainer>
                <h1>Advanced Tasks</h1>
            </AdvancedTasksContainer>    
        </AdvancedTasksWrapper>
    )
}