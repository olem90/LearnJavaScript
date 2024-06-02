import { SelectQuizLevelWrapper, SelectQuizLevelContainer } from "./SelectQuizLevel.styles";
import { SkillLevels } from "../SkillLevels/SkillLevels";
import { NavBar } from "../Nav/Nav";

export const SelectQuizLevel = () => {
    return (
        <SelectQuizLevelWrapper>
            <NavBar />
            <SelectQuizLevelContainer>
                <h1>Select Your Quiz Level</h1>
                <SkillLevels basePath="quizzes" />
            </SelectQuizLevelContainer>
        </SelectQuizLevelWrapper>
    )
}


