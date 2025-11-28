import styled from "styled-components";
import { pageFade } from "../../styles/GlobalStyles";

export const ProjectContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    
    animation: ${pageFade} 1.5s ease-in-out;
    

`
export const ProjectTitle = styled.h1` 
    padding: 2rem 0 2rem 0;
`

export const ProjectParagraph = styled.p`
    font-size: 1.4rem;
`