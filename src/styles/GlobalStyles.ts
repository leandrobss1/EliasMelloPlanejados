import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;

}

html, body {
height: 100%;
width: 100%;
overflow-x: hidden;
}
`;
