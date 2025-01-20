import { createGlobalStyle } from 'styled-components';

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
