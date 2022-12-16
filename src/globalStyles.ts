import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
        outline: none;

        font-family: 'Open Sans', sans-serif; 
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 100vh;

        background-color: #E3E3E3;
    }
`

export const Container = styled.div`
    height: 80vh;
    width: 35vw;

    background-color: #FCFCFC;
    border-radius: 0.9375rem;

    box-shadow: 0 8px 50px #17171735;
`