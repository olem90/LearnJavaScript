import { ResourcesWrapper, ResourcesContainer } from "./Resources.styles";
import { NavBar } from "../Nav/Nav";

export const Resources = () => {
    return (
        <ResourcesWrapper>
            <NavBar />
            <ResourcesContainer>
                <h1>Resources</h1>
            </ResourcesContainer>     
        </ResourcesWrapper>
    )
}  