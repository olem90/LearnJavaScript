import { SkillLevels } from "../SkillLevels/SkillLevels";
import { SelectTestLevelWrapper, SelectTestLevelContainer } from "./SelectTestLevel.styles";
import { NavBar } from "../Nav/Nav";

export const SelectTestLevel = () => {
    return (
        <SelectTestLevelWrapper>
             <NavBar />
             <SelectTestLevelContainer>
                <h1>Select Your Test Level</h1>
                <SkillLevels basePath="tests" />
             </SelectTestLevelContainer> 
        </SelectTestLevelWrapper>
    )
}