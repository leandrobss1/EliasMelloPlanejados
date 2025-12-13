import styled from 'styled-components';
import { pageFade } from "../../styles/GlobalStyles";

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
export const OrçTitle = styled.h1` 
    padding: 2rem 0 2rem 0;
    font-weight: 500;

    @media (max-width: 425px) {
        text-align: center;
        width: 50%;
    }
    
`

export const OrçParagraph = styled.p`
    font-size: 1.4rem;
`

export const OrçForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 1rem;
    border: 0.1rem solid #ccc;
    border-radius: 0 10px 0 10px;

    @media (max-width: 425px) {
        width: 50%;
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
    border-radius: 0 10px 0 10px;  
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
    margin-right: 0.45rem;
    cursor: pointer;
`

export const OrçLabel = styled.label`
    padding: 0.50rem 0;
    
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    font-size: 1.10rem;
`

export const OrçLabelVerify = styled.label`
    display: flex;
    align-items: center;

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
    border-radius: 0 10px 0 10px;
    transition: all 0.2s ease;
    background-color: #f5f5f5ff;


  &:focus {
    border-color: #ea8a01;  
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25); 
  }
`

