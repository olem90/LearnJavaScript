import { BeginnerTasksWrapper, BeginnerTasksContainer } from "./BeginnerTasks.styles";
import { NavBar } from "../Nav/Nav";

export const BeginnerTasks = () => {
    return (
        <BeginnerTasksWrapper>         
            <NavBar />
            <BeginnerTasksContainer>
                <h1>Beginner Tasks</h1>
            </BeginnerTasksContainer>
        </BeginnerTasksWrapper>
    )
}