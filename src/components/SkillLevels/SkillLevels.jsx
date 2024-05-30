import { SkillLevelsContainer } from "./SkillLevels.styles";
import advanced from "../../Images/AdvancedLevel.png"; 
import beginner from "../../Images/BeginnerLevel.png";
import { SkillLevelIcons } from "./SkillLevels.styles";

export const SkillLevels = () => { 
    return (
        <SkillLevelsContainer>
            <SkillLevelIcons>
                <img src={beginner} />  
            </SkillLevelIcons> 

            <SkillLevelIcons>
                <img src={advanced} /> 
            </SkillLevelIcons> 

            <SkillLevelIcons>
                <img src={advanced} /> 
            </SkillLevelIcons>
        </SkillLevelsContainer>
    )
} 

