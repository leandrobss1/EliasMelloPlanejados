import { createGlobalStyle } from 'styled-components';
import { keyframes } from "styled-components";

export const pageFade = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;

}

html {
    height: 100%;
    overflow-x: hidden;
}

body {
    min-height: 100%; 
    overflow-x: hidden; 
}
`;


