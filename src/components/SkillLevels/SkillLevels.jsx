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

    const goToIntermediatePage = () => {
        navigate(`/${basePath}/intermediate`);
    };

    const goToAdvancedPage = () => {
        navigate(`/${basePath}/advanced`);
    };

    return (
        <SkillLevelsContainer>
            <SkillLevelIcons >
                <img onClick={goToBeginnerPage} className="beginner" src={beginner} />  
            </SkillLevelIcons> 

            <SkillLevelIcons>
                <img onClick={goToIntermediatePage} className="intermediate" src={intermediate} /> 
            </SkillLevelIcons>  

            <SkillLevelIcons> 
                <img onClick={goToAdvancedPage} className="advanced" src={advanced} />  
            </SkillLevelIcons>
        </SkillLevelsContainer>
    )    
} 

