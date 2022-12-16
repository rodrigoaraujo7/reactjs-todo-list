import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    width: 100%;
    height: 30%;
`

export const Title = styled.h1`
    font-size: 1.625rem;
    font-weight: 500;
    color: #2C2C2C;

    display: flex;
    margin-top: 2.8125rem;
`

export const BoldTitle = styled.h1`
    font-size: 1.625rem;
    font-weight: 700;
    color: #305DFE;

    margin-left: 0.5rem;
`

export const InputContainer = styled.div`
    width: 70%;
    margin-top: 20px;

    height: 6.25rem;

    display: flex;
    justify-content: center;
`

export const InputText = styled.input`
    flex: 8;

    border-radius: 10px 0 0 10px;
    border: 2px solid #E3E3E3;
    background-color: none;

    padding: 5px 15px 5px;

    font-size: 20px;
    font-weight: 400;
    color: #B9B9B9;

    transition: 0.3s;

    ::placeholder {
        color: #B9B9B9;
    }

    :focus {
        border-color: #305DFE;
        color: #2C2C2C;
    }
`

export const InputButton = styled.button`
    flex: 2;

    border-radius: 0 10px 10px 0;
    border: none;
    background-color: #305DFE;

    color: #FCFCFC;
    font-weight: 700;
    font-size: 30px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`