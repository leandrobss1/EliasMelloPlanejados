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

  &:focus {
    border-color: #ea8a01;  
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25); 
  }
`
export const OrçLabel = styled.label`
    padding: 0.50rem 0;
    
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    font-size: 1.10rem;
`

export const OrçTextarea = styled.textarea`
    resize: none;
    outline: none;
    border: 1px solid #ccc;
    padding: 12px;
    border-radius: 0 10px 0 10px;
    transition: all 0.2s ease;

  &:focus {
    border-color: #ea8a01;  
    box-shadow: 0 0 0 2px rgba(218, 135, 10, 0.25); 
  }
`

