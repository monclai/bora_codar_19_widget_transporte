import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: #121214;

    height: 100vh;
    display: grid;
    place-content: center;
}

`;
