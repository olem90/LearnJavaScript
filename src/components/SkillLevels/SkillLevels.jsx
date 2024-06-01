import { SkillLevelsContainer } from "./SkillLevels.styles";
import advanced from "../../Images/AdvancedLevel.png"; 
import beginner from "../../Images/BeginnerLevel.png";
import intermediate from "../../Images/IntermediateLevel.png";
import { SkillLevelIcons } from "./SkillLevels.styles";
import { useNavigate } from "react-router-dom";

export const SkillLevels = ({ basePath }) => { 
    const navigate = useNavigate();

    const goToBeginnerPage = () => {
        navigate(`/${basePath}/beginner`);
    };

    return (
        <SkillLevelsContainer>
            <SkillLevelIcons >
                <img onClick={goToBeginnerPage} className="beginner" src={beginner} />  
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

