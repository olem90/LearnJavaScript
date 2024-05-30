import { LearnJsPageStyles, LearnJsPageStylesWrapper, LearnJsPageH1Styles } from "./LearnJsPage.styles";
import { NavBar } from "../Nav/Nav";
import { SkillLevels } from "../SkillLevels/SkillLevels";

export const LearnJsPage = () => {
    return (
        <>
        <NavBar />
        <LearnJsPageStylesWrapper>
            <LearnJsPageStyles> 
                <LearnJsPageH1Styles>
                    Start Learning JavaScript  
                </LearnJsPageH1Styles> 
                <SkillLevels />

            </LearnJsPageStyles>  
        </LearnJsPageStylesWrapper> 
        </>
        
    ) 
}  