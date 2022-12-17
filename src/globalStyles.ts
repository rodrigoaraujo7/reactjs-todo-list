import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;

        margin: 0;
        padding: 0;
        outline: none;

        font-family: 'Nunito', sans-serif; 
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;

        min-height: 100vh;
        padding-top: 50px;

        background-color: #E3E3E3;
    }
`

export const Container = styled.div`
    min-height: 30vh;
    min-width: 1vw;

    padding: 2.1875rem 1.875rem;

    background-color: #FCFCFC;
    border-radius: 0.9375rem;

    box-shadow: 0 8px 50px #17171735;
`