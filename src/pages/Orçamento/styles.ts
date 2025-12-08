import styled from 'styled-components';
import { pageFade } from "../../styles/GlobalStyles";

export const OrçContainer = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    
    animation: ${pageFade} 1.5s ease-in-out;
    

`
export const OrçTitle = styled.h1` 
    padding: 2rem 0 2rem 0;
    
`

export const OrçParagraph = styled.p`
    font-size: 1.4rem;
`

export const OrçForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    padding: 0 0 1rem;
`
export const OrçButton = styled.button`
    margin-top: 1rem;
    padding: 0.8rem;
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
    cursor: pointer;
    font-weight: bold;
    border-radius: 0.25rem;


    &:hover {
        background-color: #000;
        color: #fff;
    }
`

export const OrçDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

`
export const OrçInput = styled.input`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
`
export const OrçLabel = styled.label`
    padding: 0.50rem 0;
    
    font-family: "Source Code Pro", monospace;
    font-weight: 700;
    font-size: 1.10rem;
`

export const OrçTextarea = styled.textarea`
    width: 100%;
    height: 2.5rem;
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
`

