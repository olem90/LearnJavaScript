import { SkillLevels } from "../SkillLevels/SkillLevels";
import { SelectTestLevelWrapper } from "./SelectTestLevel.styles";

export const SelectTestLevel = () => {
    return (
        <SelectTestLevelWrapper>
            <hi>Select Your Test Level</hi>
            <SkillLevels basePath="tests" />
        </SelectTestLevelWrapper>
    )
}