import { SelectQuizLevelWrapper } from "./SelectQuizLevel.styles";
import { SkillLevels } from "../SkillLevels/SkillLevels";

export const SelectQuizLevel = () => {
    return (
        <SelectQuizLevelWrapper>
            <h1>Select Your Quiz Level</h1>
            <SkillLevels basePath="quizzes" />
        </SelectQuizLevelWrapper>
    )
}