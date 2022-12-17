import styled from 'styled-components'

// Header
export const HeaderContainer = styled.div`
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

// Input header
export const InputContainer = styled.div`
    width: 70%;
    margin-top: 1.25rem;

    height: 6.25rem;

    display: flex;
    justify-content: center;
`

export const InputText = styled.input`
    flex: 8;

    border-radius: 0.625rem 0 0 0.625rem;
    border: 2px solid #E3E3E3;
    background-color: none;

    padding: 0.3125rem 0.9375rem 0.3125rem;
    height: 4.6875rem;

    font-size: 1.25rem;
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

    border-radius: 0 0.625rem 0.625rem 0;
    border: none;
    background-color: #305DFE;

    color: #FCFCFC;
    font-weight: 700;
    font-size: 1.875rem;

    height: 4.6875rem;
    padding: 0.625rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
`

// Todo item
export const TodoItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(1, auto);
`

export const TodoItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 5.3125rem;

    padding: 0 0.9375rem 0;
    margin-top: 0.9375rem;

    background-color: #F1F1F1;
    box-shadow: 0 2.5px 10px #3C3C3C35;

    color: #808080;
`

export const TodoItemContent = styled.div`
    display: flex;
    align-items: center;
`

export const TodoItemTitle = styled.h2`
    font-size: 1.25rem;
    font-weight: 500;

    margin-left: 0.625rem;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 14.6875rem;
`