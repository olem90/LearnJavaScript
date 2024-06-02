import { SelectTaskLevelWrapper, SelectTaskLevelContainer } from "./SelectTaskLevel.styles";
import { SkillLevels } from "../SkillLevels/SkillLevels";
import { NavBar } from "../Nav/Nav";

export const SelectTaskLevel = () => {
    return (
        <SelectTaskLevelWrapper>
            <NavBar />
            <SelectTaskLevelContainer>
                <h1>Select Your Task Level</h1>
                <SkillLevels basePath="tasks" />
            </SelectTaskLevelContainer>
        </SelectTaskLevelWrapper>
    )
}