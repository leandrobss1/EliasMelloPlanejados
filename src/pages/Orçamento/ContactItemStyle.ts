import styled from 'styled-components';
import { pageFade } from "../../styles/GlobalStyles";
import bgPlant from '../../assets/img/bg-plant.png';


export const OrçContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
    
    
    animation: ${pageFade} 1.5s ease-in-out;

    @media (max-width: 425px) {
        width: 100%;
    }   

`
export const OrçGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  max-width: 1100px;
  height: 47.38rem;
  align-items: start;
  margin-bottom: -2.5rem;
;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const OrçTitle = styled.h1` 
    padding: 2rem 0 2rem 0;
    font-weight: 500;

    @media (max-width: 425px) {
        text-align: center;
        width: 50%;
    }
    
`
export const OrçTitleContain = styled.h2` 
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    font-size: 2.7rem;
    padding: 1rem 0 1rem 0;


    @media (max-width: 425px) {
        text-align: center;
        width: 50%;
    }
    
`
export const OrçForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 1rem;
;

    @media (max-width: 425px) {
        width: 100%;
    }
`
export const OrçDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

`
export const OrçInput = styled.input`
    resize: none;
    outline: none;
    border: 1px solid #ccc;
    padding: 12px;
;  
    transition: all 0.2s ease;
    background-color: #f5f5f5ff;

  &:focus {
    border-color: #ea8a01;  
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25); 
  }
`
export const OrçWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.6rem;
    margin-top: 0.5rem;
`;
export const OrçInputVerify = styled.input`
    margin-right: 0.20rem;
    cursor: pointer;
`
export const OrçLabel = styled.label`
    padding: 0.50rem 0;
    color: #5f5959ff;
    font-family: "Source Code Pro", monospace;
    font-weight: 500;
    font-size: 1.10rem;
`
export const OrçLabelVerify = styled.label`
    display: flex;
    align-items: center;
    color: #5f5959ff;
    font-family: "Source Code Pro", monospace;
    font-weight: 500;
    font-size: 0.90rem;
    line-height: 1.4;
    width: auto;
    margin: 0;
    cursor: pointer;
`
export const OrçTextarea = styled.textarea`
    resize: none;
    outline: none;
    border: 1px solid #ccc;
    padding: 12px;
;
    transition: all 0.2s ease;
    background-color: #f8f6f6ff;


  &:focus {
    border-color: #ea8a01;  
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25); 
  }
`
export const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 100%;
  max-width: 420px;
  padding: 1.2rem 0;
`;
export const ContactHeader = styled.h6`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1rem;
  color: #e4e4e4ff;

  svg {
    font-size: 1.2rem;
    flex-shrink: 0;
  }
`;
export const ContactValue = styled.p`
  font-size: 0.9rem;
  color: #e4e4e4ff;
  width: 100%;
  padding-left: 1.8rem;
  padding-top: 0.3rem;
`;
export const OrçContain = styled.div`
  position: relative;
  z-index: 8;

  background-image: url(${bgPlant});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  color: #fff;
  width: 90%;
  height: 100%;
  border: 1px solid #b3b0acff;
`;
export const OrçWrapperRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 12rem;
  padding-left: 3rem;
  padding-right: 3rem;
`;

export const OrçSpanContain = styled.span`
  font-size: 0.9rem;
  color: #e4e4e4ff;
  text-align: left;
`;
export const OrçParagraphContain = styled.p`
    font-size: 0.9rem;
    color: #e4e4e4ff;
    width: 100%;
`;