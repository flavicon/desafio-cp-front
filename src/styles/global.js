import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --text-black: #1C2A39;
        --text-gray: #5C6A79;
        --background-banner: #FFE0E2;
        --background-categories: #EFEEF6;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, p {
        font-family: 'Montserrat', sans-serif;
    }

`