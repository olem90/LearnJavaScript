import { SelectTaskLevelWrapper } from "./SelectTaskLevel.styles";
import { SkillLevels } from "../SkillLevels/SkillLevels";

export const SelectTaskLevel = () => {
    return (
        <SelectTaskLevelWrapper>
            <hi>Select Your Task Level</hi>
            <SkillLevels basePath="tasks" />

        </SelectTaskLevelWrapper>
    )
}