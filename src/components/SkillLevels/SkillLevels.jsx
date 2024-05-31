import { SkillLevelsContainer } from "./SkillLevels.styles";
import advanced from "../../Images/AdvancedLevel.png"; 
import beginner from "../../Images/BeginnerLevel.png";
import intermediate from "../../Images/IntermediateLevel.png";
import { SkillLevelIcons } from "./SkillLevels.styles";

export const SkillLevels = () => { 
    return (
        <SkillLevelsContainer>
            <SkillLevelIcons >
                <img className="beginner" src={beginner} />  
            </SkillLevelIcons> 

            <SkillLevelIcons>
                <img className="intermediate" src={intermediate} /> 
            </SkillLevelIcons> 

            <SkillLevelIcons> 
                <img className="advanced" src={advanced} />  
            </SkillLevelIcons>
        </SkillLevelsContainer>
    )
} 

